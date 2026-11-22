import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendApiLexer } from "../../parser/blendApi/src/grammar/BlendApiLexer";
import { BlendApiParser } from "../../parser/blendApi/src/grammar/BlendApiParser";
import { IApiMainSection, IApiSection, IApiSpec, IExpressSection } from "../../types/apiOperationTypes";
import path from "node:path";

export default class BlendApiGrammarHelper {
    parseBlendApi(code: string, dataModuleList: string[], filePath: string = "<unknown>.api") {
        const fileLabel = path.relative(process.cwd(), filePath) || filePath;
        const syntaxErrorListener = {
            syntaxError: (_recognizer: any, _offendingSymbol: any, line: number, charPositionInLine: number, msg: string) => {
                console.error(`❌ [${fileLabel}:${line}:${charPositionInLine}] Syntax error: ${msg}`);
            }
        };
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendApiLexer(inputStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(syntaxErrorListener);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendApiParser(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(syntaxErrorListener);

        const mainModule = parser.program();
        let haveDuplicateSection: boolean = false;
        let duplicateApis: any = {};
        let haveNoDataFoundError : boolean = false;
        const sectionNameList = new Set<string>();
        const json: IExpressSection = {
            name: mainModule.moduleDefinition().CAPITAL_IDENTIFIER().text,
            apiSectionList: mainModule.sectionDefinition().map(item => {
                
                if(sectionNameList.has(item.CAPITAL_IDENTIFIER().text)) {
                    console.error(`❌ [${fileLabel}:${item.start.line}] Duplicate Section '${item.CAPITAL_IDENTIFIER().text}'`);
                    haveDuplicateSection=true;
                }
                const apiNameList = new Set<string>();

                const apiSection: IApiSection = {
                    name: item.CAPITAL_IDENTIFIER().text, apiList: item.apiDefinition().map(api => {
                        const apiName = api.IDENTIFIER().text;
                        if (apiNameList.has(apiName)) {
                            duplicateApis[apiName] = true;
                            console.error(`❌ [${fileLabel}:${api.start.line}] Duplicate API '${apiName}' in section '${item.CAPITAL_IDENTIFIER().text}'`);
                        } else {
                            apiNameList.add(apiName);
                        }
                        const apiSpec: IApiSpec = {
                            input: {},
                            output: {},
                            name: apiName,
                            type: api.HTTP_METHOD().text,
                            directOutput: api.outputDefinition()?.directOutputDefenition()?.type() ? {
                                required: !api.outputDefinition()?.directOutputDefenition()?.type().text.includes("?"),
                                name: api.outputDefinition()?.directOutputDefenition()?.type().text?.replace("?", ""),
                            } : {},
                            authenticated: api?.authenticated()?.text == "authenticated",
                            url: api?.URL_IDENTIFIER().text.replace(/"/g, ''),
                            inputStore: !!api.inputDefinition()?.store()
                        }
                        api.inputDefinition()?.field()?.forEach(field => {
                            const fieldName = field.IDENTIFIER()?.text || field.CAPITAL_IDENTIFIER()?.text;
                            apiSpec.input[fieldName] = { type: field.type().text?.replace("?", ""), required: !field?.type().text.includes("?") };
                        })
                        const customData = api.outputDefinition()?.directOutputDefenition()?.type().text;
                        if(customData&&!dataModuleList.includes(customData?.split("->")[0])) {
                            console.error(`❌ [${fileLabel}:${api.start.line}] No Data Module '${customData.split("->")[0]}' Found in section '${item.CAPITAL_IDENTIFIER().text}'`);
                                haveNoDataFoundError = true;
                        }
                        api.outputDefinition()?.field()?.forEach(field => {
                            
                            if(field.type().text.includes("->")) {
                                const customDataSplit = field.type().text.split("->");
                                if(!dataModuleList.includes(customDataSplit[0])) {
                                    console.error(`❌ [${fileLabel}:${field.start.line}] No Data Module '${customDataSplit[0]}' Found in section '${item.CAPITAL_IDENTIFIER().text}'`);
                                    haveNoDataFoundError = true;
                                }
                            }
                            const fieldName = field.IDENTIFIER()?.text || field.CAPITAL_IDENTIFIER()?.text;
                            apiSpec.output[fieldName] = { type: field.type().text?.replace("?", ""), required: !field?.type().text.includes("?") };
                        })
                        return apiSpec;
                    })
                }
                return apiSection;
            }),
            includedDataModuleList: []
        }
        return { isValid: parser.numberOfSyntaxErrors === 0 && Object.keys(duplicateApis).length===0 && !haveDuplicateSection&&!haveNoDataFoundError, json };
    }

    static getDatasInDataSection(dataSectionName,folderPath) {
        const sectionPath = path.join(folderPath, `module/${dataSectionName}`);
        // sectionData.sectionDataList.forEach(async (moduleData) => {
    }
}