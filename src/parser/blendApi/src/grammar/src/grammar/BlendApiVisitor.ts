// Generated from src/grammar/BlendApi.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./BlendApiParser";
import { SectionDefinitionContext } from "./BlendApiParser";
import { ModuleDefinitionContext } from "./BlendApiParser";
import { ApiDefinitionContext } from "./BlendApiParser";
import { AuthenticatedContext } from "./BlendApiParser";
import { StoreContext } from "./BlendApiParser";
import { InputDefinitionContext } from "./BlendApiParser";
import { OutputDefinitionContext } from "./BlendApiParser";
import { DirectOutputDefenitionContext } from "./BlendApiParser";
import { FieldContext } from "./BlendApiParser";
import { TypeContext } from "./BlendApiParser";
import { PrimitiveTypeContext } from "./BlendApiParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BlendApiParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface BlendApiVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `BlendApiParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.sectionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionDefinition?: (ctx: SectionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.moduleDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDefinition?: (ctx: ModuleDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.apiDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApiDefinition?: (ctx: ApiDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.authenticated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthenticated?: (ctx: AuthenticatedContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.store`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStore?: (ctx: StoreContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.inputDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputDefinition?: (ctx: InputDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.outputDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputDefinition?: (ctx: OutputDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.directOutputDefenition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectOutputDefenition?: (ctx: DirectOutputDefenitionContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `BlendApiParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
}

