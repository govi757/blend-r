// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-r/src/grammar/BlendApi.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link BlendApiParser}.
 */
public interface BlendApiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(BlendApiParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(BlendApiParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#sectionDefinition}.
	 * @param ctx the parse tree
	 */
	void enterSectionDefinition(BlendApiParser.SectionDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#sectionDefinition}.
	 * @param ctx the parse tree
	 */
	void exitSectionDefinition(BlendApiParser.SectionDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#moduleDefinition}.
	 * @param ctx the parse tree
	 */
	void enterModuleDefinition(BlendApiParser.ModuleDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#moduleDefinition}.
	 * @param ctx the parse tree
	 */
	void exitModuleDefinition(BlendApiParser.ModuleDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#apiDefinition}.
	 * @param ctx the parse tree
	 */
	void enterApiDefinition(BlendApiParser.ApiDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#apiDefinition}.
	 * @param ctx the parse tree
	 */
	void exitApiDefinition(BlendApiParser.ApiDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#authenticated}.
	 * @param ctx the parse tree
	 */
	void enterAuthenticated(BlendApiParser.AuthenticatedContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#authenticated}.
	 * @param ctx the parse tree
	 */
	void exitAuthenticated(BlendApiParser.AuthenticatedContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#inputDefinition}.
	 * @param ctx the parse tree
	 */
	void enterInputDefinition(BlendApiParser.InputDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#inputDefinition}.
	 * @param ctx the parse tree
	 */
	void exitInputDefinition(BlendApiParser.InputDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#outputDefinition}.
	 * @param ctx the parse tree
	 */
	void enterOutputDefinition(BlendApiParser.OutputDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#outputDefinition}.
	 * @param ctx the parse tree
	 */
	void exitOutputDefinition(BlendApiParser.OutputDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#directOutputDefenition}.
	 * @param ctx the parse tree
	 */
	void enterDirectOutputDefenition(BlendApiParser.DirectOutputDefenitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#directOutputDefenition}.
	 * @param ctx the parse tree
	 */
	void exitDirectOutputDefenition(BlendApiParser.DirectOutputDefenitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(BlendApiParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(BlendApiParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(BlendApiParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(BlendApiParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendApiParser#primitiveType}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveType(BlendApiParser.PrimitiveTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendApiParser#primitiveType}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveType(BlendApiParser.PrimitiveTypeContext ctx);
}