import path from 'path';
import { IBasicProject, IFrontEnd, IRNScreen } from '../types/basicOperationTypes';
import { FileHelper } from './fileHelper';
import { IReactLayout, IReactModule, IRNLayout } from '../types/frontendOperationTypes';
export default class FrontEndHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    specPath: string;
    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
        this.specPath = path.join(this.folderPath, 'spec');
    }

    buildFrontEnd() {
        this.generateFrontEndScreen();
        this.buildLayouts();
        this.generateComponents();
    }

    generateFrontEndScreen() {
        const basicFile: IBasicProject = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`));
        basicFile.frontend.screenList.map(screen => {
            const screenPath = `${this.folderPath}/src/view/${screen.path}/${screen.name}/`;
            const screenCode = this.generateScreenCode(screen);
            FileHelper.createFile(`${screenPath}${screen.name}View.tsx`, screenCode)
            FileHelper.createFile(`${screenPath}${screen.name}Style.css`, `
            `);
            FileHelper.ensureDir(`${screenPath}/components`)


            
        })
    }

    // createTestCaseCode() {

    // }

     generateComponents() {
         const basicFile: IBasicProject = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`));
        basicFile.frontend.componentList.map(component => {
            const screenPath = `${this.folderPath}/src/components/${component.path}/${component.name}/`;
            const screenCode = this.generateScreenCode(component);
            FileHelper.createFile(`${screenPath}${component.name}Comp.tsx`, screenCode)
              FileHelper.createFile(`${screenPath}${component.name}Style.ts`, `
            import { StyleSheet } from 'react-native';
            const styles = StyleSheet.create({})
            export default styles;
            `);
        })
    }

    



    generateScreenCode(screen: IRNScreen) {
        return `
        import "./${screen.name}Style.css"
        const ${screen.name} = () => {
        return(
            <div>
            ${screen.name}
            </div>
        )
        }
        
        export default ${screen.name};
        `
    }



    buildLayouts() {
        const basicFile: IBasicProject = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`));
        const lo: IReactLayout = {
            name: "BlendGenerated",
            route: "/",
            children: basicFile.frontend.layout,
        }
        const routerCode = this.generateRouterCode(lo,basicFile);
        FileHelper.writeFile(`${this.folderPath}/src-gen/router/blend-router.tsx`, routerCode)

        this.traverseChildrenAndCreateLayout(lo, basicFile.frontend);
        const routerConstant = this.generateRouterConstant(basicFile.frontend.layout);
        FileHelper.createFile(`${this.folderPath}/src/layout/${lo.name}Layout.tsx`, `
${this.generateLayoutCode(lo, )}
`)


    FileHelper.writeFile(`${this.folderPath}/src-gen/router/routerConstant.ts`, `
    ${routerConstant}
    `)
        // })
    }

    traverseChildrenAndCreateLayout(lo: IRNLayout, frontEnd: IFrontEnd) {
        lo.children.forEach(loChild => {
            if (loChild.children) {
                FileHelper.createFile(`${this.folderPath}/src/layout/${loChild.name}Layout.tsx`, `
${this.generateLayoutCode(loChild)}
`)
                this.traverseChildrenAndCreateLayout(loChild, frontEnd)
            }
        })
    }

    findScreenPath(screenList: IRNScreen[], screenName: string) {
        const index = screenList.findIndex(screen => screen.name === screenName);
        if (screenList[index]) {
            return `${screenList[index].path}`;
        } else {


            // alert(`${screenName} not found`)
        }
    }

     generateRouterConstant(children: IReactLayout[]) {
        let path = '';
        const routeObj = generateRouterConstantObj(children);
        function generateRouterConstantObj(children: IReactLayout[]): any {

            return children.reduce((acc: any, child: any, index: number) => {
                if (child.children) {
                    path = child.route && child.route != "" && child.route != "/" ? path + "/" + child.route : path;
                    acc[child.name] = generateRouterConstantObj(child.children);
                    if (index == children.length - 1) {
                        path = path.split("/").slice(0, -1).join('_').toString();
                        // const pathNumToBeRemoved = child.route.split("/").length;
                        // path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                    }
                } else {
                    path = child.route && child.route != "" && child.route != "/" ? path + "/" + child.route : path;
                    acc[child.name] = path;
                    const pathNumToBeRemoved = child.route.split("/").length;
                    path = path.split("/").slice(0, -pathNumToBeRemoved).join('_').toString();

                    if (index == children.length - 1) {
                        path = path.split("/").slice(0, -1).join('_').toString();
                        // const pathNumToBeRemoved = child.route.split("/").length;
                        // path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                    }

                }

                return acc;
            }, {})
        }

        return `export const RouterConstant = ${JSON.stringify(routeObj)}`;
    }

    generateLayoutCode(lo: IReactLayout, ) {

        return (
            `
import { Outlet } from "react-router-dom"
const ${lo.name}Layout = () => {
        return (
        <div>
            ${lo.name}Layout
            <Outlet />
        </div>
        )
}

export default ${lo.name}Layout;
`
        )
    }

    
    generateFlattenedArray(children: IReactLayout[]) {
        let uniqueElements: any[] = [];
        let flatenedArray: any[] = [];
        generateFlattenedArrayFun(children);
        function generateFlattenedArrayFun(children: IReactLayout[]) {
            return children.forEach((child) => {
                flatenedArray.push(child);
                if (child.children) {
                    generateFlattenedArrayFun(child.children);
                } else {
                    if (!uniqueElements.includes(child.element)) {
                        uniqueElements.push(child.element);
                    } else {
                        flatenedArray.pop();
                    }
                }
            });
        }

        return flatenedArray;


    }

    generateRouterCode(mainLayout: IReactLayout, basicFile:IBasicProject) {
        const defaultImportCode = `
        import { createBrowserRouter } from 'react-router-dom';\n
        import React from 'react';\n
        import BlendGeneratedLayout from '../../src/layout/BlendGeneratedLayout';
        `;

        const routerJsonCode = `const router = createBrowserRouter([${this.generateLayoutRouterJSONCode([mainLayout])}])\nexport default router;`
        const routerConstant = this.generateRouterConstant([mainLayout]);
        const importCode = `${this.generateFlattenedArray(mainLayout.children).reduce((acc, item) => {
            const importCode = `   ${item.children ? `
                    import ${item.name}Layout from '../../src/layout/${item.name}Layout';\n
                    `: `
                    import ${item.element} from '../../src/view/${this.findScreenPath(basicFile.frontend.screenList, (item?.element || ""))}/${item.element}/${item.element}View';\n
                    `}`
            acc = acc + importCode;
            return acc;
        }, "")}`;
        return importCode + defaultImportCode + routerJsonCode + '\n' + routerConstant;
    }
    generateLayoutRouterJSONCode(layoutList: IReactLayout[]) {
        return layoutList.reduce((acc, layout) => {
            acc = acc + `{element: ${layout.children ? `<${layout.name}Layout/>,` : `<${layout.element} />,`}
            path: "${layout.route}",
            ${layout.children ? `children: [${this.generateLayoutRouterJSONCode(layout.children)}],` : ``}
            },
            `
            return acc;
        }, '')
    }


    
    



}