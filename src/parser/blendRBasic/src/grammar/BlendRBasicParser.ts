// Generated from src/grammar/BlendRBasic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BlendRBasicListener } from "./BlendRBasicListener";

export class BlendRBasicParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly PATH_IDENTIFIER = 16;
	public static readonly IDENTIFIER = 17;
	public static readonly CAPITAL_IDENTIFIER = 18;
	public static readonly WS = 19;
	public static readonly RULE_sections = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_dataModule = 2;
	public static readonly RULE_apiModule = 3;
	public static readonly RULE_program = 4;
	public static readonly RULE_roleDefenition = 5;
	public static readonly RULE_screenDefenition = 6;
	public static readonly RULE_componentDefenition = 7;
	public static readonly RULE_layoutDefinition = 8;
	public static readonly RULE_pageDefinition = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sections", "module", "dataModule", "apiModule", "program", "roleDefenition", 
		"screenDefenition", "componentDefenition", "layoutDefinition", "pageDefinition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'data-module'", "','", "'api-module'", "'role'", "'screen'", 
		"'under'", "'component'", "'layout'", "'('", "')'", "'{'", "'}'", "'page'", 
		"'view'", "'authenticated'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "PATH_IDENTIFIER", "IDENTIFIER", "CAPITAL_IDENTIFIER", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendRBasicParser._LITERAL_NAMES, BlendRBasicParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendRBasicParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendRBasic.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendRBasicParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendRBasicParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendRBasicParser._ATN, this);
	}
	// @RuleVersion(0)
	public sections(): SectionsContext {
		let _localctx: SectionsContext = new SectionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendRBasicParser.RULE_sections);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__0 || _la === BlendRBasicParser.T__2) {
				{
				{
				this.state = 20;
				this.module();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
			this.program();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BlendRBasicParser.RULE_module);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BlendRBasicParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.dataModule();
				}
				break;
			case BlendRBasicParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 29;
				this.apiModule();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataModule(): DataModuleContext {
		let _localctx: DataModuleContext = new DataModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendRBasicParser.RULE_dataModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(BlendRBasicParser.T__0);
			this.state = 33;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__1) {
				{
				{
				this.state = 34;
				this.match(BlendRBasicParser.T__1);
				this.state = 35;
				this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apiModule(): ApiModuleContext {
		let _localctx: ApiModuleContext = new ApiModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendRBasicParser.RULE_apiModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(BlendRBasicParser.T__2);
			this.state = 42;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__1) {
				{
				{
				this.state = 43;
				this.match(BlendRBasicParser.T__1);
				this.state = 44;
				this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendRBasicParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendRBasicParser.T__3) | (1 << BlendRBasicParser.T__4) | (1 << BlendRBasicParser.T__6) | (1 << BlendRBasicParser.T__7))) !== 0)) {
				{
				this.state = 54;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case BlendRBasicParser.T__3:
					{
					this.state = 50;
					this.roleDefenition();
					}
					break;
				case BlendRBasicParser.T__6:
					{
					this.state = 51;
					this.componentDefenition();
					}
					break;
				case BlendRBasicParser.T__4:
					{
					this.state = 52;
					this.screenDefenition();
					}
					break;
				case BlendRBasicParser.T__7:
					{
					this.state = 53;
					this.layoutDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public roleDefenition(): RoleDefenitionContext {
		let _localctx: RoleDefenitionContext = new RoleDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendRBasicParser.RULE_roleDefenition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(BlendRBasicParser.T__3);
			this.state = 60;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__1) {
				{
				{
				this.state = 61;
				this.match(BlendRBasicParser.T__1);
				this.state = 62;
				this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public screenDefenition(): ScreenDefenitionContext {
		let _localctx: ScreenDefenitionContext = new ScreenDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BlendRBasicParser.RULE_screenDefenition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(BlendRBasicParser.T__4);
			this.state = 69;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__1) {
				{
				{
				this.state = 70;
				this.match(BlendRBasicParser.T__1);
				this.state = 71;
				this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
			this.match(BlendRBasicParser.T__5);
			this.state = 78;
			this.match(BlendRBasicParser.PATH_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentDefenition(): ComponentDefenitionContext {
		let _localctx: ComponentDefenitionContext = new ComponentDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BlendRBasicParser.RULE_componentDefenition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(BlendRBasicParser.T__6);
			this.state = 81;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__1) {
				{
				{
				this.state = 82;
				this.match(BlendRBasicParser.T__1);
				this.state = 83;
				this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 89;
			this.match(BlendRBasicParser.T__5);
			this.state = 90;
			this.match(BlendRBasicParser.PATH_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layoutDefinition(): LayoutDefinitionContext {
		let _localctx: LayoutDefinitionContext = new LayoutDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BlendRBasicParser.RULE_layoutDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(BlendRBasicParser.T__7);
			this.state = 93;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 94;
			this.match(BlendRBasicParser.T__8);
			this.state = 95;
			this.match(BlendRBasicParser.PATH_IDENTIFIER);
			this.state = 96;
			this.match(BlendRBasicParser.T__9);
			this.state = 97;
			this.match(BlendRBasicParser.T__10);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__12) {
				{
				{
				this.state = 98;
				this.pageDefinition();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRBasicParser.T__7) {
				{
				{
				this.state = 104;
				this.layoutDefinition();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(BlendRBasicParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pageDefinition(): PageDefinitionContext {
		let _localctx: PageDefinitionContext = new PageDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BlendRBasicParser.RULE_pageDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(BlendRBasicParser.T__12);
			this.state = 113;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 114;
			this.match(BlendRBasicParser.T__8);
			this.state = 115;
			this.match(BlendRBasicParser.PATH_IDENTIFIER);
			this.state = 116;
			this.match(BlendRBasicParser.T__9);
			this.state = 117;
			this.match(BlendRBasicParser.T__13);
			this.state = 118;
			this.match(BlendRBasicParser.T__8);
			this.state = 119;
			this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
			this.state = 120;
			this.match(BlendRBasicParser.T__9);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendRBasicParser.T__14) {
				{
				this.state = 121;
				this.match(BlendRBasicParser.T__14);
				this.state = 122;
				this.match(BlendRBasicParser.T__8);
				this.state = 123;
				this.match(BlendRBasicParser.CAPITAL_IDENTIFIER);
				this.state = 124;
				this.match(BlendRBasicParser.T__9);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15\x82\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x07\x02\x18\n\x02" +
		"\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03!\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04\f\x04\x0E\x04*\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x050\n\x05\f\x05\x0E\x053\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x069\n\x06\f\x06\x0E\x06<\v\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07B\n\x07\f\x07\x0E\x07E\v\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x07\bK\n\b\f\b\x0E\bN\v\b\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x07\tW\n\t\f\t\x0E\tZ\v\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\nf\n\n\f\n\x0E\ni\v\n\x03\n\x07\nl\n\n" +
		"\f\n\x0E\no\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x80\n\v\x03\v\x02\x02\x02\f" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x02\x02\x02\x85\x02\x19\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06" +
		"\"\x03\x02\x02\x02\b+\x03\x02\x02\x02\n:\x03\x02\x02\x02\f=\x03\x02\x02" +
		"\x02\x0EF\x03\x02\x02\x02\x10R\x03\x02\x02\x02\x12^\x03\x02\x02\x02\x14" +
		"r\x03\x02\x02\x02\x16\x18\x05\x04\x03\x02\x17\x16\x03\x02\x02\x02\x18" +
		"\x1B\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A" +
		"\x1C\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1D\x05\n\x06\x02\x1D" +
		"\x03\x03\x02\x02\x02\x1E!\x05\x06\x04\x02\x1F!\x05\b\x05\x02 \x1E\x03" +
		"\x02\x02\x02 \x1F\x03\x02\x02\x02!\x05\x03\x02\x02\x02\"#\x07\x03\x02" +
		"\x02#(\x07\x14\x02\x02$%\x07\x04\x02\x02%\'\x07\x14\x02\x02&$\x03\x02" +
		"\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x07\x03" +
		"\x02\x02\x02*(\x03\x02\x02\x02+,\x07\x05\x02\x02,1\x07\x14\x02\x02-.\x07" +
		"\x04\x02\x02.0\x07\x14\x02\x02/-\x03\x02\x02\x0203\x03\x02\x02\x021/\x03" +
		"\x02\x02\x0212\x03\x02\x02\x022\t\x03\x02\x02\x0231\x03\x02\x02\x0249" +
		"\x05\f\x07\x0259\x05\x10\t\x0269\x05\x0E\b\x0279\x05\x12\n\x0284\x03\x02" +
		"\x02\x0285\x03\x02\x02\x0286\x03\x02\x02\x0287\x03\x02\x02\x029<\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\v\x03\x02\x02\x02<:\x03" +
		"\x02\x02\x02=>\x07\x06\x02\x02>C\x07\x14\x02\x02?@\x07\x04\x02\x02@B\x07" +
		"\x14\x02\x02A?\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03" +
		"\x02\x02\x02D\r\x03\x02\x02\x02EC\x03\x02\x02\x02FG\x07\x07\x02\x02GL" +
		"\x07\x14\x02\x02HI\x07\x04\x02\x02IK\x07\x14\x02\x02JH\x03\x02\x02\x02" +
		"KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02" +
		"NL\x03\x02\x02\x02OP\x07\b\x02\x02PQ\x07\x12\x02\x02Q\x0F\x03\x02\x02" +
		"\x02RS\x07\t\x02\x02SX\x07\x14\x02\x02TU\x07\x04\x02\x02UW\x07\x14\x02" +
		"\x02VT\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02Y[\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\x07\b\x02\x02\\]\x07\x12\x02" +
		"\x02]\x11\x03\x02\x02\x02^_\x07\n\x02\x02_`\x07\x14\x02\x02`a\x07\v\x02" +
		"\x02ab\x07\x12\x02\x02bc\x07\f\x02\x02cg\x07\r\x02\x02df\x05\x14\v\x02" +
		"ed\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02" +
		"hm\x03\x02\x02\x02ig\x03\x02\x02\x02jl\x05\x12\n\x02kj\x03\x02\x02\x02" +
		"lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02" +
		"om\x03\x02\x02\x02pq\x07\x0E\x02\x02q\x13\x03\x02\x02\x02rs\x07\x0F\x02" +
		"\x02st\x07\x14\x02\x02tu\x07\v\x02\x02uv\x07\x12\x02\x02vw\x07\f\x02\x02" +
		"wx\x07\x10\x02\x02xy\x07\v\x02\x02yz\x07\x14\x02\x02z\x7F\x07\f\x02\x02" +
		"{|\x07\x11\x02\x02|}\x07\v\x02\x02}~\x07\x14\x02\x02~\x80\x07\f\x02\x02" +
		"\x7F{\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x15\x03\x02\x02\x02" +
		"\x0E\x19 (18:CLXgm\x7F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendRBasicParser.__ATN) {
			BlendRBasicParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendRBasicParser._serializedATN));
		}

		return BlendRBasicParser.__ATN;
	}

}

export class SectionsContext extends ParserRuleContext {
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	public module(): ModuleContext[];
	public module(i: number): ModuleContext;
	public module(i?: number): ModuleContext | ModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleContext);
		} else {
			return this.getRuleContext(i, ModuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_sections; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterSections) {
			listener.enterSections(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitSections) {
			listener.exitSections(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public dataModule(): DataModuleContext | undefined {
		return this.tryGetRuleContext(0, DataModuleContext);
	}
	public apiModule(): ApiModuleContext | undefined {
		return this.tryGetRuleContext(0, ApiModuleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_module; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
}


export class DataModuleContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_dataModule; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterDataModule) {
			listener.enterDataModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitDataModule) {
			listener.exitDataModule(this);
		}
	}
}


export class ApiModuleContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_apiModule; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterApiModule) {
			listener.enterApiModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitApiModule) {
			listener.exitApiModule(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public roleDefenition(): RoleDefenitionContext[];
	public roleDefenition(i: number): RoleDefenitionContext;
	public roleDefenition(i?: number): RoleDefenitionContext | RoleDefenitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RoleDefenitionContext);
		} else {
			return this.getRuleContext(i, RoleDefenitionContext);
		}
	}
	public componentDefenition(): ComponentDefenitionContext[];
	public componentDefenition(i: number): ComponentDefenitionContext;
	public componentDefenition(i?: number): ComponentDefenitionContext | ComponentDefenitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentDefenitionContext);
		} else {
			return this.getRuleContext(i, ComponentDefenitionContext);
		}
	}
	public screenDefenition(): ScreenDefenitionContext[];
	public screenDefenition(i: number): ScreenDefenitionContext;
	public screenDefenition(i?: number): ScreenDefenitionContext | ScreenDefenitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScreenDefenitionContext);
		} else {
			return this.getRuleContext(i, ScreenDefenitionContext);
		}
	}
	public layoutDefinition(): LayoutDefinitionContext[];
	public layoutDefinition(i: number): LayoutDefinitionContext;
	public layoutDefinition(i?: number): LayoutDefinitionContext | LayoutDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LayoutDefinitionContext);
		} else {
			return this.getRuleContext(i, LayoutDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class RoleDefenitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_roleDefenition; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterRoleDefenition) {
			listener.enterRoleDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitRoleDefenition) {
			listener.exitRoleDefenition(this);
		}
	}
}


export class ScreenDefenitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
	}
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_screenDefenition; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterScreenDefenition) {
			listener.enterScreenDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitScreenDefenition) {
			listener.exitScreenDefenition(this);
		}
	}
}


export class ComponentDefenitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
	}
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_componentDefenition; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterComponentDefenition) {
			listener.enterComponentDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitComponentDefenition) {
			listener.exitComponentDefenition(this);
		}
	}
}


export class LayoutDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, 0); }
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
	public pageDefinition(): PageDefinitionContext[];
	public pageDefinition(i: number): PageDefinitionContext;
	public pageDefinition(i?: number): PageDefinitionContext | PageDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PageDefinitionContext);
		} else {
			return this.getRuleContext(i, PageDefinitionContext);
		}
	}
	public layoutDefinition(): LayoutDefinitionContext[];
	public layoutDefinition(i: number): LayoutDefinitionContext;
	public layoutDefinition(i?: number): LayoutDefinitionContext | LayoutDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LayoutDefinitionContext);
		} else {
			return this.getRuleContext(i, LayoutDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_layoutDefinition; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterLayoutDefinition) {
			listener.enterLayoutDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitLayoutDefinition) {
			listener.exitLayoutDefinition(this);
		}
	}
}


export class PageDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
	}
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRBasicParser.RULE_pageDefinition; }
	// @Override
	public enterRule(listener: BlendRBasicListener): void {
		if (listener.enterPageDefinition) {
			listener.enterPageDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRBasicListener): void {
		if (listener.exitPageDefinition) {
			listener.exitPageDefinition(this);
		}
	}
}


