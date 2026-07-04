import path from "path";
import { IBasicProject } from "../types/basicOperationTypes";
import { FileHelper } from "./fileHelper";
import BlendApiGrammarHelper from "./grammarHelper/BlendApiGrammarHelper";
import { IApiDataField, IApiSection, IExpressSection } from "../types/apiOperationTypes";
import { IDataField } from "../types/dataOperationTypes";

export default class ApiHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    baseRoute: string = 'api';
    basicProjectContent: IBasicProject;

    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
        this.basicProjectContent = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`) || "{}");
    }


    parseSpec() {
        let mainApiObjList = [];

        this.basicProjectContent.apiModuleList.forEach(apiModule => {
            const filePath = path.join(this.folderPath, `spec/api/${apiModule}.api`);
            const specCode = FileHelper.readFile(filePath);
            const json = new BlendApiGrammarHelper().parseBlendApi(specCode, this.basicProjectContent.dataModuleList || []);
            if (!json.isValid) {
                throw new Error("Error while parsing the syntax");
            }
            mainApiObjList.push(json.json);
        });


        FileHelper.writeFile(`${this.configPath}/apiConfig.json`, JSON.stringify(mainApiObjList));


    }

    doFrontEndApiGenerations() {
        this.writeStoreFiles();
        this.createRequiredFiles();
    }

    createRequiredFiles() {
        const apiMainSectionList: IExpressSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/apiConfig.json`));
        // const rnSectionList: IReactSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/reactConfig.json`));
        // rnSectionList.forEach(rnSection => {
        //     const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react`);
        //     rnSection.reactModuleList.forEach(rnModule => {
        // let currentApiSection: IApiMainSection = apiMainSectionList.find(item => item.name === rnSection.name)
        // const rnProjectPath = path.join(rnFolderPath, rnModule.name);
        const rapcode = this.generateRmoteApiPointsCode();
        FileHelper.createFile(`${this.folderPath}/src/remote-api-point.ts`, rapcode);
        FileHelper.createFile(`${this.folderPath}/src-gen/data/common.ts`, commonApiDataCode);
        FileHelper.createFile(`${this.folderPath}/src/redux/store/store.ts`, mainStoreCode);
        // FileHelper.createFile(`${this.folderPath}/src/redux/store/saga.ts`, mainSagaCode);
        FileHelper.createFile(`${this.folderPath}/src/redux/store/snackbar/snackbarSlice.ts`, snackbarSliceCode);
        FileHelper.createFile(`${this.folderPath}/src/redux/hooks.ts`, hooksCode);

    }

    generateRmoteApiPointsCode() {
        let code = `
        import axios from 'axios';
        const apiUrl = import.meta.env.VITE_API_URL;
        ${this.basicProjectContent.apiModuleList.reduce((acc, curVal) => {
            acc = acc + `export const ${curVal}Api = axios.create({
baseURL: apiUrl||'http://localhost:8000', // Replace with your API base URL
headers: {
Authorization: localStorage.getItem("authToken")||""
}
});
\n
`
            return acc;
        }, "")}    
    `;
        return code;
    }


    generateRoleSliceCode() {
            const code = `
            import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
            import type { Role } from "./type";

            interface RolesState {
                roles: Role[];
            }


            const initialState: RolesState = {
                roles: []
            };

                        // ---- Slice
            const rolesSlice = createSlice({
            name: "roles",
            initialState,
            reducers: {
                setRoles(state, action: PayloadAction<Role[]>) {
                state.roles = action.payload;
                },
                addRole(state, action: PayloadAction<Role>) {
                if (!state.roles.includes(action.payload)) {
                    state.roles.push(action.payload);
                }
                },
                removeRole(state, action: PayloadAction<Role>) {
                state.roles = state.roles.filter(r => r !== action.payload);
                },
                clearRoles(state) {
                state.roles = [];
                }
            }
            });

            // ---- Actions
            export const { setRoles, addRole, removeRole, clearRoles } = rolesSlice.actions;

            // ---- Reducer
            export default rolesSlice.reducer;
            
            `
            return code;
    }


    generateRolesGetterCode() {
        const code = `
        import type { RootState } from "@/redux/store/store";
        import type { Role } from "./type";
        export const selectRoles = (state: RootState) => state.roles.roles;

// Generic checker
export const hasRole = (role: Role) => (state: RootState) =>
  state.roles.roles.includes(role);
export const hasAnyRole = (roles: Role[]) => (state: RootState) =>
  roles.some(role => state.roles.roles.includes(role));

${
    this.basicProjectContent.frontend.roleList.reduce((acc,role) => {
        acc = acc +  `
        export const has${role}Role = (state: RootState) =>
  state.roles.roles.includes("${role}");
        `
        return acc;
    }, '')
}
        `;
        return code;

    }
    generateRolesTypeCode() {
        const code = `
        export type Role = ${this.basicProjectContent.frontend.roleList.map(role => `"${role}"`).join(' | ')};
        `;
        return this.basicProjectContent.frontend.roleList.length>0?code:'';
    }

    generateRoleRelatedFiles() {
        const roleSliceCode = this.generateRoleSliceCode();
        const rolesGetterCode = this.generateRolesGetterCode();
        const rolesTypeCode = this.generateRolesTypeCode();
        const rolePath = path.join(this.folderPath, `src-gen/redux/roles`);
        FileHelper.writeFile(`${rolePath}/rolesSlice.ts`, roleSliceCode);
        FileHelper.writeFile(`${rolePath}/rolesGetter.ts`, rolesGetterCode);
        FileHelper.writeFile(`${rolePath}/type.ts`, rolesTypeCode);


    }
    

    writeStoreFiles() {
        const apiMainSectionList: IExpressSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/apiConfig.json`));

        const allApiSections: IApiSection[] = apiMainSectionList.flatMap(
        (section) => section.apiSectionList.map((api) => ({
    ...api,
    sectionName: section.name,
  }))
        );
        const reducerCode = this.generateReducersCode(allApiSections);
        this.generateRoleRelatedFiles();

        apiMainSectionList.forEach(expressSection => {
            const rnApiPath = path.join(this.folderPath, `src-gen/redux/${expressSection.name}`);
            const rnSelectorPath = path.join(this.folderPath, `src/redux/selectors/${expressSection.name}`);
            const rnReducerPath = path.join(this.folderPath, `src-gen/redux/gen-reducers.ts`);

            

            
            // const rnSagaPath = path.join(this.folderPath, `src-gen/redux/gen-root-saga.ts`);
            const rootSagaCode = this.generateRootSagaCode(expressSection.apiSectionList, expressSection.name);
            FileHelper.writeFile(rnReducerPath, reducerCode);
            // FileHelper.writeFile(rnSagaPath, rootSagaCode);


            expressSection.apiSectionList.forEach(apiSection => {
                const apiSectionSlicePath = path.join(rnApiPath, apiSection.name, `${apiSection.name}Slice.ts`);
                const apiSectionSelectorPath = path.join(rnApiPath, apiSection.name, `selector.ts`);
                const apiSectionDataPath = path.join(rnApiPath, apiSection.name, `data.ts`);
                const apiSectionActionPath = path.join(rnApiPath, apiSection.name, `action.ts`);
                const apiSelectorPath = path.join(rnSelectorPath, `${apiSection.name}.ts`);
                // const apiSectionSagaPath = path.join(rnApiPath, apiSection.name, `${apiSection.name}Saga.ts`);
                const sliceCode = this.generateSliceCode(apiSection);
                const dataCode = this.generateApiDatacode(apiSection);
                const actionCode = this.generateApiActioncode(apiSection, expressSection);
                const selectorCode = this.generateApiSelectorCode(apiSection);
                // const sagaCode = this.generateSagaCode(apiSection);
                FileHelper.writeFile(apiSectionSlicePath, sliceCode);
                FileHelper.writeFile(apiSectionSelectorPath, selectorCode);
                FileHelper.createFile(apiSelectorPath, `
import { RootState } from "@/redux/store/store";
import * as ${apiSection.name}Selector from "src-gen/redux/${expressSection.name}/${apiSection.name}/selector";`);
                
                if (!this.isEmptyOrWhitespace(dataCode)) {
                    FileHelper.writeFile(apiSectionDataPath, dataCode);
                }

                FileHelper.writeFile(apiSectionActionPath, actionCode);
                // FileHelper.writeFile(apiSectionSagaPath, sagaCode);

            })
        })



    }

    isEmptyOrWhitespace(str: string): boolean {
        return str.trim().length === 0;
    }


    generateSliceCode(apiSection: IApiSection) {
        const filteredApiListForData = apiSection.apiList.filter(api => {
            const inputKeyList = Object.keys(api.input);
            const outputKeyList = Object.keys(api.output);
            return inputKeyList.length > 0 || outputKeyList.length > 0
        })
        const inputStoreApis = apiSection.apiList.filter(api => api.inputStore && Object.keys(api.input).length > 0);
        const code = `
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {${
    apiSection.apiList.reduce((acc, curVal) => {
        acc = acc + `${curVal.name}AsyncThunk,`
        return acc
    },'')}${inputStoreApis.reduce((acc, curVal) => {
        acc = acc + `set${this.capitalizeFirstLetter(curVal.name)}Input,`
        return acc
    }, '')}
} from './action';

${filteredApiListForData.length > 0 ? `import { ${filteredApiListForData.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            const outputKeyList = Object.keys(curVal.output);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Output`).toUpperCase();
            acc = acc + `${curVal.inputStore && inputKeyList.length > 0 ? `I_${inputDataTypeName},` : ''}`;
            acc = acc + `${outputKeyList.length > 0 ? outputDataTypeName+ `,I_${outputDataTypeName}` + ',' : ''}`;
            return acc
        }, '')} } from "./data";` : ''}

        ${apiSection.apiList.reduce((acc, curVal) => {
            if (curVal?.directOutput?.name) {
                const [moduleName, dataName] = curVal?.directOutput?.name?.split("->");
                if (dataName) {
                    const dataTypeName = `${dataName?.replace("[]", "")}`;
                    acc = acc + `import {${dataTypeName},I_${dataTypeName}} from "../../../data/${moduleName}";`;
                }
            }
            return acc
        }, '')}


import { ApiStatus } from "../../../data/common";
interface ${apiSection.name}State {
    ${apiSection.apiList.reduce((acc, curVal) => {
            const [moduleName, dataName] = curVal?.directOutput?.name?.split("->") || [];
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            acc = acc + `${curVal.name}: {
            data: ${Object.keys(curVal.output).length > 0 ? `I_${apiSection.name.toUpperCase()}_${curVal.name.toUpperCase()}_OUTPUT` : dataName ? `I_${dataName}` : "any"},\n
            status: ApiStatus,
            error:string|null
        }
        `
            if (curVal.inputStore && Object.keys(curVal.input).length > 0) {
                acc = acc + `${curVal.name}Input: I_${inputDataTypeName} | null\n`
            }
            return acc
        }, "")}
}

const initialState: ${apiSection.name}State = {
    ${apiSection.apiList.reduce((acc, curVal) => {
            const [moduleName, dataName] = curVal?.directOutput?.name?.split("->") || [];
            const isOutputDataArray = (dataName || "").includes("[]")
            acc = acc + `${curVal.name}:{
            data: ${Object.keys(curVal.output).length > 0 ? `new ${apiSection.name.toUpperCase()}_${curVal.name.toUpperCase()}_OUTPUT().toJSON()` : (dataName && !isOutputDataArray) ? `new ${dataName}().toJSON()` : (dataName && isOutputDataArray) ? '[]' : "null"},
            status: ApiStatus.Idle,
            error: null
        },\n`
            if (curVal.inputStore && Object.keys(curVal.input).length > 0) {
                acc = acc + `${curVal.name}Input: null,\n`
            }
            return acc
        }, "")}
}

export const ${apiSection.name}Slice = createSlice({
    name: "${apiSection.name}",
    initialState,
    reducers: {
        reset${apiSection.name}Reducer: () => initialState
    },
    extraReducers: (builder) =>{
        builder.
        ${apiSection.apiList.reduce((acc, curVal, currentIndex) => {
                acc = acc + `addCase(${curVal.name}AsyncThunk.pending, state => {
                state.${curVal.name}.status= ApiStatus.Loading;
                state.${curVal.name}.error= null;
            })\n\t\t.addCase(${curVal.name}AsyncThunk.fulfilled,(state, action) => {
                state.${curVal.name}.status = ApiStatus.Success;
                state.${curVal.name}.data = action.payload;
                state.${curVal.name}.error = null;
            })\n\t\t.addCase(${curVal.name}AsyncThunk.rejected, (state, action) => {
                state.${curVal.name}.status = ApiStatus.Failed;
                state.${curVal.name}.error = action.payload as string;
                })\n\t\t${curVal.inputStore && Object.keys(curVal.input).length > 0 ? `.addCase(set${this.capitalizeFirstLetter(curVal.name)}Input, (state, action) => {
                state.${curVal.name}Input = action.payload;
            })\n\t\t` : ''}${currentIndex<apiSection.apiList.length-1?'.':''}`
            return acc
        },"")}
    }
});

export const {reset${apiSection.name}Reducer} = ${apiSection.name}Slice.actions;
export default ${apiSection.name}Slice.reducer;
        `
        return code;
    }


    generateSagaCode(apiSection: IApiSection) {
        const code = `
        import { put, takeLatest } from "redux-saga/effects";
        import { PayloadAction } from "@reduxjs/toolkit";
        

        import { ${apiSection.apiList.reduce((acc, curVal) => {
            acc = acc + `${curVal.name}Api,`;
            return acc
        }, '')} }from './action';

        import { ${apiSection.apiList.reduce((acc, curVal) => {

            acc = acc + `${curVal.name}SuccessAction,${curVal.name}ErrorAction,`;
            return acc
        }, '')} } from "./${apiSection.name}Slice";

        ${apiSection.apiList.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            acc = acc + `
        function* ${curVal.name}Saga(action: PayloadAction<any>): any {
        try {
            const response: any = yield ${curVal.name}Api(${inputKeyList.length > 0 ? `action.payload` : ``})
            yield put(${curVal.name}SuccessAction(response.data))
        } catch(e: any) {
            yield put(${curVal.name}ErrorAction(e));
        }
}

        export function* watch${apiSection.name}${curVal.name}() {
            yield takeLatest("${apiSection.name}/${curVal.name}Action", ${curVal.name}Saga);
        }
            `
            return acc

        }, '')}

        `

        return code;
    }

    generateReducersCode(apiSectionList: any[]) {
        const code = `
        ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `
    import ${curVal.name}Reducer from './${curVal.sectionName}/${curVal.name}/${curVal.name}Slice';\n`
            return acc;
        }, '')}

export const GeneratedReducers = {
    ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `${curVal.sectionName}_${curVal.name.toLowerCase()}: ${curVal.name}Reducer,`
            return acc;
        }, '')}
}
`;
        return code;
    }

    generateApiActioncode(apiSection: IApiSection, expressSection: IExpressSection) {
        const filteredApiListForData = apiSection.apiList.filter(api => {
            const inputKeyList = Object.keys(api.input);
            const outputKeyList = Object.keys(api.output);
            return inputKeyList.length > 0 || outputKeyList.length > 0
        })
        const inputStoreApis = apiSection.apiList.filter(api => api.inputStore && Object.keys(api.input).length > 0);
        const code = `
        import { createAsyncThunk${inputStoreApis.length > 0 ? ', createAction' : ''} } from "@reduxjs/toolkit";
        import axios, { AxiosError } from 'axios';
        import {${expressSection.name}Api} from "../../../../src/remote-api-point";
        ${filteredApiListForData.length > 0 ? `import { ${filteredApiListForData.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            const outputKeyList = Object.keys(curVal.output);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Output`).toUpperCase();
            acc = acc + `${inputKeyList.length > 0 ? inputDataTypeName + ',' : ''}`;
            acc = acc + `${outputKeyList.length > 0 ? outputDataTypeName + ',' : ''}`;
            return acc
        }, '')} } from "./data";` : ''}

        ${apiSection.apiList.reduce((acc, curVal) => {
            if (curVal?.directOutput?.name) {
                const [moduleName, dataName] = curVal?.directOutput?.name?.split("->");
                if (dataName) {
                    acc = acc + `import * as ${moduleName} from "../../../data/${moduleName}";`;
                }
            }
            return acc
        }, '')}

        const showError = (err: AxiosError) => {
            const errorResponse: any = err.response?.data;
            if (errorResponse) {
              return {status: err.status,data: errorResponse}
            }
            else {
              return {status: err.status||500, data: err.message||"Unknown Error"}
            }
          }

        ${inputStoreApis.reduce((acc, curVal) => {
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            acc = acc + `
export const set${this.capitalizeFirstLetter(curVal.name)}Input = createAction<${inputDataTypeName} | null>('${apiSection.name}/set${this.capitalizeFirstLetter(curVal.name)}Input');
            `;
            return acc;
        }, '')}

        ${apiSection.apiList.reduce((acc, curVal) => {
            const inputKeyList = Object.keys(curVal.input);
            const outputKeyList = Object.keys(curVal.output);
            const inputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${curVal.name}_Output`).toUpperCase();
            const [moduleName, dataName] = curVal?.directOutput?.name?.split("->") || [];
            const hasInputStore = curVal.inputStore && inputKeyList.length > 0;
            acc = acc + `


              export const ${curVal.name}Api = async (${inputKeyList.length > 0 ? `input: ${inputDataTypeName},` : ``} ) => {
                  return ${expressSection.name}Api.${curVal.type.toLowerCase()}('${curVal.url}',${inputKeyList.length > 0 ? `${curVal.type == 'POST' ? 'input' : '{params: input.toJSON()}'}` : ''});
              }
                   export const ${curVal.name}AsyncThunk = createAsyncThunk<${outputKeyList.length > 0 ? outputDataTypeName : dataName ? `${moduleName}.${dataName}` : 'any'},${inputKeyList.length>0?`${inputDataTypeName}`:`void`},any>('${apiSection.name}/${curVal.name}', async (${inputKeyList.length>0?`input: ${inputDataTypeName}`:`_`}, { rejectWithValue${hasInputStore ? ', dispatch' : ''} }) => {
                ${hasInputStore ? `dispatch(set${this.capitalizeFirstLetter(curVal.name)}Input(input.toJSON()));` : ''}
                return call${this.capitalizeFirstLetter(curVal.name)}Api(${inputKeyList.length>0?`input,`:''} output => {
                    return output
                  },error=> {
                    return rejectWithValue(error)
                  })
              })


            export const call${this.capitalizeFirstLetter(curVal.name)}Api = async (${inputKeyList.length > 0 ? `input: ${inputDataTypeName},` : ``} output: (output: ${outputKeyList.length > 0 ? outputDataTypeName : dataName ? `${moduleName}.${dataName}` : 'any'}) => any,error?: (errMsg: any) => void) => {
                try {
                  const { data } = await ${curVal.name}Api(${inputKeyList.length > 0 ? `${curVal.type == 'POST' ? 'input' : 'input'}` : ''});
                  return output(data);
                } catch (err: any) {
                 if(error) {
                 return error(showError(err));
                 }

                }
              }
            `
            return acc
        }, '')}

        `

        return code;
    }

    generateApiSelectorCode(apiSection: IApiSection) {
        const code = `
import { RootState } from "@/redux/store/store";

        ${apiSection.apiList.reduce((acc, curVal) => {
            acc = acc +
`export const select${this.capitalizeFirstLetter(curVal.name)}Data = (state: RootState) => state.${apiSection.name.toLocaleLowerCase()}.${curVal.name}.data;\n`;
            if (curVal.inputStore && Object.keys(curVal.input).length > 0) {
                acc = acc +
`export const select${this.capitalizeFirstLetter(curVal.name)}Input = (state: RootState) => state.${apiSection.name.toLocaleLowerCase()}.${curVal.name}Input;\n`;
            }
            return acc
        }, '')}
        `

        return code;
    }


    generateRootSagaCode(apiSectionList: IApiSection[], expressSectionName: string) {
        const code = `
        import { all, fork } from "redux-saga/effects";
        ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `
            import{
    ${curVal.apiList.reduce((apiAcc, apiCurVal) => {
                apiAcc = apiAcc + `
         watch${curVal.name}${apiCurVal.name},
        `;
                return apiAcc
            }, '')
                }
    } from './${expressSectionName}/${curVal.name}/${curVal.name}Saga';\n
`
            return acc;
        }, '')}




const genRootSaga = [

    ${apiSectionList.reduce((acc, curVal) => {
            acc = acc + `
        
${curVal.apiList.reduce((apiAcc, apiCurVal) => {
                apiAcc = apiAcc + `
    watch${curVal.name}${apiCurVal.name}()
     ,
    `;
                return apiAcc
            }, '')
                }

`
            return acc;
        }, '')}
        
];

export default genRootSaga;
`;
        return code;
    }

    getApiName(apiName: string) {
        return apiName.replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replace(/^-/, '');
    }

    capitalizeFirstLetter(val: string) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    generateApiDatacode(apiSection: IApiSection) {

        return this.generateSampleApiDataCode(apiSection, "react-native");
    }

    generateSampleApiDataCode(apiSection: IApiSection, type = "api") {
        const imports = new Set<string>(); // Collect unique imports
        const code = `
        ${apiSection.apiList.reduce((acc: string, api) => {
            const inputKeyList = Object.keys(api.input);
            const outputKeyList = api.output ? Object.keys(api.output) : [];
            const inputDataTypeName: string = (`${apiSection.name}_${api.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${api.name}_Output`).toUpperCase();
            
            inputKeyList.forEach(inputKey => {
                const typeParts = api.input[inputKey].type.split("->");
                if (typeParts.length === 2) {
                    const [module, typeName] = typeParts;
                    const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                    if (type === "api") {
                        imports.add(`import { ${baseTypeName} } from '../data/${module}';`);
                    } else {
                        imports.add(`import { ${baseTypeName} } from 'src-gen/data/${module}';`);
                    }

                }
            })

            outputKeyList.forEach(outputKey => {
                const typeParts = api.output[outputKey].type.split("->");
                if (typeParts.length === 2) {
                    const [module, typeName] = typeParts;
                    const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                    if (type === "api") {
                        imports.add(`import { ${baseTypeName} } from '../data/${module}';`);
                    } else {
                        imports.add(`import { ${baseTypeName} } from 'src-gen/data/${module}';`);
                    }

                }
            })
            acc = acc + `

${inputKeyList.length > 0 ? `
export class ${inputDataTypeName} {
    
   
            constructor(
    ${inputKeyList
                        .map(
                            (inputKey) =>
                                `        public ${inputKey}: ${this.resolveType(api.input[inputKey].type)}${!api.input[inputKey].required ? '|undefined' : ''} = ${this.getDefaultValue(
                                    api.input[inputKey]
                                )},`
                        )
                        .join('\n')}
        ) {}
        
      static fromJSON(jsonObj: any):${inputDataTypeName} {
            return new ${inputDataTypeName}(
    ${inputKeyList
                        .map((inputKey) => this.generateFromJSONField({ ...api.input[inputKey], name: inputKey }))
                        .join(',\n')}
            );
        }

         toJSON():any {
            return {
    ${inputKeyList
                        .map((inputKey) => this.generateToJSONField({ ...api.input[inputKey], name: inputKey }))
                        .join('\n')}
        };
        }

  
}\n

export interface I_${inputDataTypeName} {
${inputKeyList
            .map(
                (inputKey) =>
`        ${inputKey}: ${this.resolveType(api.input[inputKey].type)}${!api.input[inputKey].required ? '|undefined' : ''},`
        )
    .join('\n')}
}
`: ''}

${outputKeyList.length > 0 ? `export class ${outputDataTypeName} {
   
constructor(
  ${outputKeyList
                        .map(
                            (outputKey) =>
                                `        public ${outputKey}: ${this.resolveType(api.output[outputKey].type)}${!api.output[outputKey].required ? '|undefined' : ''} = ${this.getDefaultValue(
                                    api.output[outputKey]
                                )},`
                        )
                        .join('\n')}
        ) {}

 static fromJSON(jsonObj: any):${outputDataTypeName} {
            return new ${outputDataTypeName}(
    ${outputKeyList
                        .map((outputKey) => this.generateFromJSONField({ ...api.output[outputKey], name: outputKey }))
                        .join(',\n')}
            );
        }

        
   toJSON():any {
            return {
    ${outputKeyList
                        .map((outputKey) => this.generateToJSONField({ ...api.output[outputKey], name: outputKey }))
                        .join('\n')}
        };
        }
        }
export interface I_${outputDataTypeName} {
${outputKeyList
                    .map(
                        (outputKey) =>
                            `        ${outputKey}: ${this.resolveType(api.output[outputKey].type)}${!api.output[outputKey].required ? '|undefined' : ''},`
                    )
                    .join('\n')}
}
`: ''}

`
            return acc;
        }, "")
            }
        `
        return Array.from(imports).join('\n') + code
    }

    resolveType(type: string): string {
        const typeParts = type.split("->");
        const baseType = typeParts.length === 2 ? typeParts[1] : type;
        return baseType.endsWith("[]") ? `${baseType.slice(0, -2)}[]` : baseType; // Handle array types
    }

    getDefaultValue(field: IDataField): string {
        const typeParts = field.type.split("->");
        const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
        if (baseType.endsWith("[]")) {
            return "[]"; // Default value for arrays
        }
        if (typeParts.length === 2) {
            const [, typeName] = typeParts;
            const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
            return field.required?`new ${baseTypeName}()`:"undefined"; // Instantiate the imported class
        }
        switch (field.type) {
            case "string":
                return field.required ? "''" : "undefined";
            case "object":
                return field.required ? "{}" : "undefined";
            case "boolean":
                return field.required ? "false" : "undefined";
            case "number":
                return field.required ? "0" : "undefined";
            default:
                return "null";
        }
    }

    generateFromJSONField(field: IDataField): string {
        const typeParts = field.type.split("->");
        const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
        if (baseType.endsWith("[]")) {
            const elementType = baseType.slice(0, -2);
            if (["string", "number", "boolean"].includes(elementType)) {
                return `            jsonObj.${field.name} ?? []`;
            }
            return `            (jsonObj.${field.name} != null) ? jsonObj.${field.name}.map((item: any) => ${elementType}.fromJSON(item)) : []`;
        }
        if (typeParts.length === 2) {
            const [, typeName] = typeParts;
            const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
            return `            (jsonObj.${field.name} != null) ? ${baseTypeName}.fromJSON(jsonObj.${field.name}) : new ${baseTypeName}()`;
        }
        return `            (jsonObj.${field.name} !== null) ? jsonObj?.${field.name} : undefined`;
    }

    generateToJSONField(field: IDataField): string {
        // const typeParts = field.type.split("->");
        // const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
        // if (baseType.endsWith("[]")) {
        //     const elementType = baseType.slice(0, -2);
        //     if (["string", "number", "boolean"].includes(elementType)) {
        //         return `            ${field.name}: this.${field.name} ?? [],`;
        //     }
        //     return `            ${field.name}: (this.${field.name} != null) ? this.${field.name}.map((x) => x.toJson()) : [],`;
        // }
        // return `            ${field.name}: this.${field.name} != null ? this.${field.name} : undefined,`;
        const typeParts = field.type.split("->");
        const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
        if (baseType.endsWith("[]")) {
            const elementType = baseType.slice(0, -2);
            if (["string", "number", "boolean","object","any"].includes(elementType)) {
                return `            ${field.name}: this.${field.name} ?? [],`;
            }
            return `            ${field.name}: (this.${field.name} != null) ? this.${field.name}.map((x) => x.toJSON()) : [],`;
        } else {
            if (["string", "number", "boolean","object","any"].includes(baseType)) {
                return `${field.name}: this.${field.name} != null ? this.${field.name} : ${this.getDefaultValue(field)},`;
            } else {
                return `            ${field.name}: this.${field.name} != null ? this.${field.name}.toJSON() : ${field.required?`${this.getDefaultValue(field)}.toJSON()`:'undefined'},`;
            }
        }
        
    }
}


const commonApiDataCode = `
export enum ApiStatus {
    Success="Success",
    Loading="Loading",
    Failed="Failed",
    Idle="Idle"
}
`;


const snackbarSliceCode = `
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface SnackbarRequest {
    type: SnackbarType,
    message: string,
    timing: number
}

export enum SnackbarType {
    Success="success",
    Error="error",
}


interface SnackbarState {
    snackbarRequestList: SnackbarRequest[]
}

const initialState:SnackbarState = {
    snackbarRequestList: []
}


export const snackbarSlice=  createSlice({
    name: "Snackbar",
    initialState: initialState,
    reducers: {
        addSnackbar: (state, action: {type:String,payload: SnackbarRequest}) => {
            state.snackbarRequestList.push(action.payload);
        },
        removeLastSnackbar: (state) => {
            state.snackbarRequestList.pop();
        },
    }
});


export const {addSnackbar,removeLastSnackbar} = snackbarSlice.actions;

export default snackbarSlice.reducer;
`


const mainStoreCode = `


import { configureStore } from '@reduxjs/toolkit'
import { GeneratedReducers } from 'src-gen/redux/gen-reducers';
const store =  configureStore({
    reducer: {
        ...GeneratedReducers,
    },
    
  })

  

  export type RootState = ReturnType<typeof store.getState>  

  export type AppDispatch = typeof store.dispatch;

export default store;
`;



const hooksCode = `
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'

// Use throughout your app instead of plain useDispatch and useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
`;