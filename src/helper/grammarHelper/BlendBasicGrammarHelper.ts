import { CharStreams, CommonTokenStream } from "antlr4ts";

import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import GrammarErrorHelper from "./GrammarErrorHelper";

import { IReactLayout, IReactModule, IReactScreen, IRNComponent, IRNLayout, IRNModule, IRNScreen } from "../../types/frontendOperationTypes";
import { BlendRBasicLexer } from "../../parser/blendRBasic/src/grammar/BlendRBasicLexer";
import { ApiModuleContext, BlendRBasicParser, DataModuleContext, LayoutDefinitionContext, ModuleContext, ProgramContext } from "../../parser/blendRBasic/src/grammar/BlendRBasicParser";

export default class BlendBasicGrammarHelper extends AbstractParseTreeVisitor<any> {
    protected defaultResult() {
        return {}; // Avoid errors if visitChildren returns nothing
    }

    parseBlendBasic(code: string) {
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendRBasicLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendRBasicParser(tokenStream);
        const frontend = this.parseBlendRN(code);
        const dataModuleList: string[] = [];
        const apiModuleList: any[] = [];
        parser.sections().module().map(module => {
            const resultList = this.visitModule(module);
            resultList.map(result => {
                if (result.type === "data-module") {
                    dataModuleList.push(result.name);
                } else if (result.type === "api-module") {
                    apiModuleList.push(result.name);
                }
            })
        }
        );
        const basicJson = {
            name: "BlendBasicConfig",
            description: "Basic config for swing",
            createdAt: new Date().toISOString(),
            dataModuleList,
            apiModuleList,
            frontend: frontend.json

        };
        return { valid: parser.numberOfSyntaxErrors === 0 && frontend.valid, basicJson };
    }

    visitSection(mod: ModuleContext): any {
        const dataModuleList: string[] = [];
        const apiModuleList: any[] = [];

        const resultList = this.visitModule(mod);
        resultList.map(result => {
            if (result.type === "data-module") {
                dataModuleList.push(result.name);
            } else if (result.type === "api-module") {
                apiModuleList.push({ name: result.name });
            }
        })
        return {
            dataModuleList,
            apiModuleList,
        };
    }

    visitModule(ctx: ModuleContext): any {
        // Handle multiple identifiers
        // const moduleType = ctx.children?.[0].text; // First token is the type (e.g., data-module)
        if (ctx.dataModule()) return this.visitDataModule(ctx.dataModule())
        if (ctx.apiModule()) return this.visitExpressModule(ctx.apiModule())
    }

    visitDataModule(ctx: DataModuleContext): any {
        return ctx.CAPITAL_IDENTIFIER().map(id => ({ type: "data-module", name: id.text }));
    }

    visitExpressModule(ctx: ApiModuleContext): any {
        return ctx.CAPITAL_IDENTIFIER().map(id => ({ type: "api-module", name: id.text }));
    }


    parseBlendRN(code: string) {
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendRBasicLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendRBasicParser(tokenStream);
        const program = parser.sections().program();
        let haveNoDataFoundError: boolean = false;
        let screenList: IRNScreen[] = [];
        let componentList: IRNComponent[] = [];
        let roleList: String[] = [];
        program.screenDefenition().forEach(screen => {
            screen.CAPITAL_IDENTIFIER().forEach(screenName => {
                screenList.push({ name: screenName.text, path: screen.PATH_IDENTIFIER().text.replace(/"/g, '') });
            })
        });

        program.roleDefenition().forEach(role => {
            role.CAPITAL_IDENTIFIER().forEach(roleName => {
                roleList.push(roleName.text);
            })
        });

        program.componentDefenition().forEach(component => {
            component.CAPITAL_IDENTIFIER().forEach(componentName => {
                componentList.push({ name: componentName.text, path: component.PATH_IDENTIFIER().text.replace(/"/g, '') });
            })
        });
        const layout: IReactLayout[] = parseAndCreateLayoutAndScreen(program);
        function parseAndCreateLayoutAndScreen(prgrm: ProgramContext | LayoutDefinitionContext): IReactLayout[] {
            return prgrm.layoutDefinition().map(layout => {
                const layoutList = parseAndCreateLayoutAndScreen(layout);
                const pageList: IReactLayout[] = layout.pageDefinition().map(page => {
                    if (screenList.findIndex(item => item.name == page.CAPITAL_IDENTIFIER()[1].text) == -1) {
                        haveNoDataFoundError = true;
                        console.error(`❌ Screen '${page.CAPITAL_IDENTIFIER()[1]?.text}' not found inside layout '${layout.CAPITAL_IDENTIFIER().text}' at line ${page.start.line}`)
                    }
                    return {
                        name: page.CAPITAL_IDENTIFIER()[0].text,
                        route: page.PATH_IDENTIFIER().text.replace(/"/g, ''),
                        element: page.CAPITAL_IDENTIFIER()[1].text,
                        authenticatedRoles: page.CAPITAL_IDENTIFIER().length > 2 ? [page.CAPITAL_IDENTIFIER()[2].text] : undefined

                    }
                })
                return {
                    name: layout.CAPITAL_IDENTIFIER().text,
                    route: layout.PATH_IDENTIFIER().text.replace(/"/g, ''),
                    children: [...layoutList, ...pageList],
                }
            });
        }

        const json: IRNModule = {
            componentList,
            screenList,
            layout,
            roleList
        }

        return {
            valid: parser.numberOfSyntaxErrors == 0 && !haveNoDataFoundError,
            json
        }
        // return json;

    }





}
