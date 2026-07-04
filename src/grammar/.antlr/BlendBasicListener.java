// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-r/src/grammar/BlendBasic.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link BlendBasicParser}.
 */
public interface BlendBasicListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#sections}.
	 * @param ctx the parse tree
	 */
	void enterSections(BlendBasicParser.SectionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#sections}.
	 * @param ctx the parse tree
	 */
	void exitSections(BlendBasicParser.SectionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#section}.
	 * @param ctx the parse tree
	 */
	void enterSection(BlendBasicParser.SectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#section}.
	 * @param ctx the parse tree
	 */
	void exitSection(BlendBasicParser.SectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#module}.
	 * @param ctx the parse tree
	 */
	void enterModule(BlendBasicParser.ModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#module}.
	 * @param ctx the parse tree
	 */
	void exitModule(BlendBasicParser.ModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#dataModule}.
	 * @param ctx the parse tree
	 */
	void enterDataModule(BlendBasicParser.DataModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#dataModule}.
	 * @param ctx the parse tree
	 */
	void exitDataModule(BlendBasicParser.DataModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#expressModule}.
	 * @param ctx the parse tree
	 */
	void enterExpressModule(BlendBasicParser.ExpressModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#expressModule}.
	 * @param ctx the parse tree
	 */
	void exitExpressModule(BlendBasicParser.ExpressModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#rnModule}.
	 * @param ctx the parse tree
	 */
	void enterRnModule(BlendBasicParser.RnModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#rnModule}.
	 * @param ctx the parse tree
	 */
	void exitRnModule(BlendBasicParser.RnModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#reactModule}.
	 * @param ctx the parse tree
	 */
	void enterReactModule(BlendBasicParser.ReactModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#reactModule}.
	 * @param ctx the parse tree
	 */
	void exitReactModule(BlendBasicParser.ReactModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link BlendBasicParser#mongoModule}.
	 * @param ctx the parse tree
	 */
	void enterMongoModule(BlendBasicParser.MongoModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link BlendBasicParser#mongoModule}.
	 * @param ctx the parse tree
	 */
	void exitMongoModule(BlendBasicParser.MongoModuleContext ctx);
}