import path from 'path';
import { IBasicProject, IFrontEnd, IRNScreen } from '../types/basicOperationTypes';
import { FileHelper } from './fileHelper';
import { IReactLayout, IReactModule, IRNLayout } from '../types/frontendOperationTypes';

const blendRouterCode = `
import { useCallback } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";

export type RouteParams<Path extends string> =
  Path extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? { [K in Param]: string } & RouteParams<\`/\${Rest}\`>
    : Path extends \`\${string}:\${infer Param}\`
      ? { [K in Param]: string }
      : unknown;

type ParamValue = string | number;

export type BlendRouteParams<Path extends string> = string extends Path
  ? Record<string, ParamValue>
  : { [K in keyof RouteParams<Path>]: ParamValue };

type BlendNavigateArgs<Path extends string> =
  string extends Path
    ? [params?: BlendRouteParams<Path>, options?: NavigateOptions]
    : [keyof RouteParams<Path>] extends [never]
      ? [params?: BlendRouteParams<Path>, options?: NavigateOptions]
      : [params: BlendRouteParams<Path>, options?: NavigateOptions];

export function buildPath<Path extends string>(
  path: Path,
  ...[params]: BlendNavigateArgs<Path>
): string {
  const values = (params ?? {}) as Record<string, ParamValue>;

  return path.replace(/:([A-Za-z0-9_]+)/g, (_, name: string) => {
    const value = values[name];

    if (value === undefined || value === null || value === "") {
      throw new Error(\`buildPath: missing value for ":\${name}" in "\${path}"\`);
    }

    return encodeURIComponent(String(value));
  });
}

export function useBlendRouter() {
  const routerNavigate = useNavigate();

  const navigate = useCallback(
    <Path extends string>(path: Path, ...args: BlendNavigateArgs<Path>) => {
      const [params, options] = args;

      return routerNavigate(
        buildPath(path, ...([params] as BlendNavigateArgs<Path>)),
        options,
      );
    },
    [routerNavigate],
  );

  return { navigate, buildPath };
}
`;
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


    FileHelper.writeFile(`${this.folderPath}/src-gen/router/useBlendRouter.ts`, `
    ${blendRouterCode}
    `)

    const blendParamsCode = this.generateBlendParamsCode(basicFile.frontend.layout);
    if (blendParamsCode) {
        FileHelper.writeFile(`${this.folderPath}/src-gen/router/useBlendParams.ts`, blendParamsCode);
    }
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

    // "/main" + "client" -> "/main/client"; empty or "/" routes add nothing
    joinRoute(parentPath: string, route?: string): string {
        return route && route !== "/" ? `${parentPath}/${route}` : parentPath;
    }

    // Builds { LayoutName: { ScreenName: "/full/path" } } from the layout tree
    buildRouteObj(children: IReactLayout[], parentPath: string = ""): any {
        return children.reduce((acc: any, child: IReactLayout) => {
            const fullPath = this.joinRoute(parentPath, child.route);
            acc[child.name] = child.children
                ? this.buildRouteObj(child.children, fullPath)
                : fullPath;
            return acc;
        }, {});
    }

    generateRouterConstant(children: IReactLayout[]) {
        const routeObj = this.buildRouteObj(children);
        return `export const RouterConstant = ${JSON.stringify(routeObj)} as const`;
    }

    // Finds every leaf route with a ":param" and returns its key path, e.g. ["Main", "DCPClientFile", "DCPQualificationDetails"]
    findParamRoutes(routeObj: any, keyPath: string[] = []): string[][] {
        return Object.keys(routeObj).reduce((acc: string[][], key: string) => {
            const value = routeObj[key];
            const currentPath = [...keyPath, key];
            if (typeof value === "string") {
                return value.indexOf(":") !== -1 ? [...acc, currentPath] : acc;
            }
            return [...acc, ...this.findParamRoutes(value, currentPath)];
        }, []);
    }

    generateBlendParamsCode(children: IReactLayout[]): string {
        const paramRoutes = this.findParamRoutes(this.buildRouteObj(children));
        if (paramRoutes.length === 0) return "";

        // if two screens share a name, use the full key path so hook names don't clash
        const leafName = (keyPath: string[]) => keyPath[keyPath.length - 1];
        const isDuplicate = (name: string) => paramRoutes.filter(p => leafName(p) === name).length > 1;

        const hooks = paramRoutes.map(keyPath => {
            const name = isDuplicate(leafName(keyPath)) ? keyPath.join("") : leafName(keyPath);
            return `export const use${name}Params = () =>
  useParams() as RouteParams<typeof RouterConstant.${keyPath.join(".")}>;`;
        });

        return `import { useParams } from "react-router-dom";
import { RouteParams } from "./useBlendRouter";
import { RouterConstant } from "./routerConstant";

${hooks.join("\n\n")}
`;
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