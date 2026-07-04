// Generated from src/grammar/BlendRBasic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SectionsContext } from "./BlendRBasicParser";
import { ModuleContext } from "./BlendRBasicParser";
import { DataModuleContext } from "./BlendRBasicParser";
import { ApiModuleContext } from "./BlendRBasicParser";
import { ProgramContext } from "./BlendRBasicParser";
import { RoleDefenitionContext } from "./BlendRBasicParser";
import { ScreenDefenitionContext } from "./BlendRBasicParser";
import { ComponentDefenitionContext } from "./BlendRBasicParser";
import { LayoutDefinitionContext } from "./BlendRBasicParser";
import { PageDefinitionContext } from "./BlendRBasicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendRBasicParser`.
 */
export interface BlendRBasicListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendRBasicParser.sections`.
	 * @param ctx the parse tree
	 */
	enterSections?: (ctx: SectionsContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.sections`.
	 * @param ctx the parse tree
	 */
	exitSections?: (ctx: SectionsContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.dataModule`.
	 * @param ctx the parse tree
	 */
	enterDataModule?: (ctx: DataModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.dataModule`.
	 * @param ctx the parse tree
	 */
	exitDataModule?: (ctx: DataModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.apiModule`.
	 * @param ctx the parse tree
	 */
	enterApiModule?: (ctx: ApiModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.apiModule`.
	 * @param ctx the parse tree
	 */
	exitApiModule?: (ctx: ApiModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.roleDefenition`.
	 * @param ctx the parse tree
	 */
	enterRoleDefenition?: (ctx: RoleDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.roleDefenition`.
	 * @param ctx the parse tree
	 */
	exitRoleDefenition?: (ctx: RoleDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.screenDefenition`.
	 * @param ctx the parse tree
	 */
	enterScreenDefenition?: (ctx: ScreenDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.screenDefenition`.
	 * @param ctx the parse tree
	 */
	exitScreenDefenition?: (ctx: ScreenDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.componentDefenition`.
	 * @param ctx the parse tree
	 */
	enterComponentDefenition?: (ctx: ComponentDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.componentDefenition`.
	 * @param ctx the parse tree
	 */
	exitComponentDefenition?: (ctx: ComponentDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.layoutDefinition`.
	 * @param ctx the parse tree
	 */
	enterLayoutDefinition?: (ctx: LayoutDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.layoutDefinition`.
	 * @param ctx the parse tree
	 */
	exitLayoutDefinition?: (ctx: LayoutDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRBasicParser.pageDefinition`.
	 * @param ctx the parse tree
	 */
	enterPageDefinition?: (ctx: PageDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRBasicParser.pageDefinition`.
	 * @param ctx the parse tree
	 */
	exitPageDefinition?: (ctx: PageDefinitionContext) => void;
}

