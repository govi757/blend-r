import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendDataLexer } from "../../parser/blendData/src/grammar/BlendDataLexer";
import { BlendDataParser, DataDefinitionContext, FieldContext } from "../../parser/blendData/src/grammar/BlendDataParser";
import path from "node:path";

export default class BlendDataGrammarHelper {
       parseBlendData(code: string, filePath: string = "<unknown>.data") {
            const fileLabel = path.relative(process.cwd(), filePath) || filePath;
            const syntaxErrorListener = {
                syntaxError: (_recognizer: any, _offendingSymbol: any, line: number, charPositionInLine: number, msg: string) => {
                    console.error(`❌ [${fileLabel}:${line}:${charPositionInLine}] Syntax error: ${msg}`);
                }
            };
            const inputStream = CharStreams.fromString(code);
            const lexer = new BlendDataLexer(inputStream);
            lexer.removeErrorListeners();
            lexer.addErrorListener(syntaxErrorListener);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new BlendDataParser(tokenStream);
            parser.removeErrorListeners();
            parser.addErrorListener(syntaxErrorListener);
            const mainSection = parser.program(); // Assuming the root rule is "program" that contains multiple sections
            const dataDefenitionList = mainSection.dataDefinition();
            let hasError = false;
          
            const dataSet = new Set();
            const moduleDataObject = {
                name: mainSection.moduleDefinition().CAPITAL_IDENTIFIER().text,
                dataList:   dataDefenitionList.map((dataDefinition: DataDefinitionContext) => {
                    const dataName = dataDefinition.CAPITAL_IDENTIFIER().text;
                    if(dataSet.has(dataName)) {
                        hasError = true;
                        console.error(`❌ [${fileLabel}:${dataDefinition.start.line}] Duplicate Data '${dataName}'`)
                    }
                    dataSet.add(dataDefinition.CAPITAL_IDENTIFIER().text)
                    const fieldSet = new Set();
                    return {
                        name: dataDefinition.CAPITAL_IDENTIFIER().text,
                        fields: dataDefinition.field().map((field: FieldContext) => {
                            const fieldName = field.IDENTIFIER().text;
                                if(fieldSet.has(fieldName)) {
                                    hasError = true;
                                    console.error(`❌ [${fileLabel}:${field.start.line}] Duplicate field '${fieldName}' in '${dataName}'`)
                                }
                                fieldSet.add(fieldName);
                            return {
                                name: fieldName,
                                required: !field.type().text.includes("?"),
                                type: field.type().text.replace("?",""),
                            }
                        })
                    }
                    
                    
                })
            }
            
            return {valid: parser.numberOfSyntaxErrors===0&&!hasError,moduleDataObject};
        }
}