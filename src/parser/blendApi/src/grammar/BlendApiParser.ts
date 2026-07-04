// Generated from src/grammar/BlendApi.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BlendApiListener } from "./BlendApiListener";

export class BlendApiParser extends Parser {
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
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly HTTP_METHOD = 22;
	public static readonly IDENTIFIER = 23;
	public static readonly CAPITAL_IDENTIFIER = 24;
	public static readonly URL_IDENTIFIER = 25;
	public static readonly WS = 26;
	public static readonly RULE_program = 0;
	public static readonly RULE_sectionDefinition = 1;
	public static readonly RULE_moduleDefinition = 2;
	public static readonly RULE_apiDefinition = 3;
	public static readonly RULE_authenticated = 4;
	public static readonly RULE_store = 5;
	public static readonly RULE_inputDefinition = 6;
	public static readonly RULE_outputDefinition = 7;
	public static readonly RULE_directOutputDefenition = 8;
	public static readonly RULE_field = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_primitiveType = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sectionDefinition", "moduleDefinition", "apiDefinition", "authenticated", 
		"store", "inputDefinition", "outputDefinition", "directOutputDefenition", 
		"field", "type", "primitiveType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'section'", "'{'", "'}'", "'module'", "'api'", "'('", "')'", 
		"'authenticated'", "'store'", "'input('", "','", "'output('", "':'", "'[]'", 
		"'?'", "'->'", "'string'", "'number'", "'boolean'", "'any'", "'object'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "HTTP_METHOD", "IDENTIFIER", "CAPITAL_IDENTIFIER", "URL_IDENTIFIER", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendApiParser._LITERAL_NAMES, BlendApiParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendApiParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendApi.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendApiParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendApiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendApiParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendApiParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.moduleDefinition();
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendApiParser.T__0) {
				{
				{
				this.state = 25;
				this.sectionDefinition();
				}
				}
				this.state = 30;
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
	public sectionDefinition(): SectionDefinitionContext {
		let _localctx: SectionDefinitionContext = new SectionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BlendApiParser.RULE_sectionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(BlendApiParser.T__0);
			this.state = 32;
			this.match(BlendApiParser.CAPITAL_IDENTIFIER);
			this.state = 33;
			this.match(BlendApiParser.T__1);
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendApiParser.T__4) {
				{
				{
				this.state = 34;
				this.apiDefinition();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
			this.match(BlendApiParser.T__2);
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
	public moduleDefinition(): ModuleDefinitionContext {
		let _localctx: ModuleDefinitionContext = new ModuleDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendApiParser.RULE_moduleDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(BlendApiParser.T__3);
			this.state = 43;
			this.match(BlendApiParser.CAPITAL_IDENTIFIER);
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
	public apiDefinition(): ApiDefinitionContext {
		let _localctx: ApiDefinitionContext = new ApiDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendApiParser.RULE_apiDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(BlendApiParser.T__4);
			this.state = 46;
			this.match(BlendApiParser.IDENTIFIER);
			this.state = 47;
			this.match(BlendApiParser.T__5);
			this.state = 48;
			this.match(BlendApiParser.HTTP_METHOD);
			this.state = 49;
			this.match(BlendApiParser.T__6);
			this.state = 50;
			this.match(BlendApiParser.URL_IDENTIFIER);
			this.state = 51;
			this.match(BlendApiParser.T__1);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendApiParser.T__7) {
				{
				this.state = 52;
				this.authenticated();
				}
			}

			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendApiParser.T__9) {
				{
				this.state = 55;
				this.inputDefinition();
				}
			}

			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendApiParser.T__11) {
				{
				this.state = 58;
				this.outputDefinition();
				}
			}

			this.state = 61;
			this.match(BlendApiParser.T__2);
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
	public authenticated(): AuthenticatedContext {
		let _localctx: AuthenticatedContext = new AuthenticatedContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendApiParser.RULE_authenticated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(BlendApiParser.T__7);
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
	public store(): StoreContext {
		let _localctx: StoreContext = new StoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendApiParser.RULE_store);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(BlendApiParser.T__8);
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
	public inputDefinition(): InputDefinitionContext {
		let _localctx: InputDefinitionContext = new InputDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BlendApiParser.RULE_inputDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(BlendApiParser.T__9);
			this.state = 68;
			this.field();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendApiParser.T__10) {
				{
				{
				this.state = 69;
				this.match(BlendApiParser.T__10);
				this.state = 70;
				this.field();
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 76;
			this.match(BlendApiParser.T__6);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendApiParser.T__8) {
				{
				this.state = 77;
				this.store();
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
	// @RuleVersion(0)
	public outputDefinition(): OutputDefinitionContext {
		let _localctx: OutputDefinitionContext = new OutputDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BlendApiParser.RULE_outputDefinition);
		let _la: number;
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.match(BlendApiParser.T__11);
				this.state = 81;
				this.field();
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BlendApiParser.T__10) {
					{
					{
					this.state = 82;
					this.match(BlendApiParser.T__10);
					this.state = 83;
					this.field();
					}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 89;
				this.match(BlendApiParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.match(BlendApiParser.T__11);
				this.state = 92;
				this.directOutputDefenition();
				this.state = 93;
				this.match(BlendApiParser.T__6);
				}
				break;
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
	public directOutputDefenition(): DirectOutputDefenitionContext {
		let _localctx: DirectOutputDefenitionContext = new DirectOutputDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BlendApiParser.RULE_directOutputDefenition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.type();
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BlendApiParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			_la = this._input.LA(1);
			if (!(_la === BlendApiParser.IDENTIFIER || _la === BlendApiParser.CAPITAL_IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 100;
			this.match(BlendApiParser.T__12);
			this.state = 101;
			this.type();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BlendApiParser.RULE_type);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.primitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.primitiveType();
				this.state = 105;
				this.match(BlendApiParser.T__13);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 107;
				this.primitiveType();
				this.state = 108;
				this.match(BlendApiParser.T__14);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.match(BlendApiParser.CAPITAL_IDENTIFIER);
				this.state = 111;
				this.match(BlendApiParser.T__15);
				this.state = 112;
				this.match(BlendApiParser.CAPITAL_IDENTIFIER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 113;
				this.match(BlendApiParser.CAPITAL_IDENTIFIER);
				this.state = 114;
				this.match(BlendApiParser.T__15);
				this.state = 115;
				this.match(BlendApiParser.CAPITAL_IDENTIFIER);
				this.state = 116;
				this.match(BlendApiParser.T__14);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 117;
				this.match(BlendApiParser.CAPITAL_IDENTIFIER);
				this.state = 118;
				this.match(BlendApiParser.T__15);
				this.state = 119;
				this.match(BlendApiParser.CAPITAL_IDENTIFIER);
				this.state = 120;
				this.match(BlendApiParser.T__13);
				}
				break;
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, BlendApiParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendApiParser.T__16) | (1 << BlendApiParser.T__17) | (1 << BlendApiParser.T__18) | (1 << BlendApiParser.T__19) | (1 << BlendApiParser.T__20))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\x80\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x058\n\x05\x03\x05\x05\x05;\n\x05\x03\x05\x05\x05>\n\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x07\bJ\n\b\f\b\x0E\bM\v\b\x03\b\x03\b\x05\bQ\n\b\x03\t\x03\t\x03\t" +
		"\x03\t\x07\tW\n\t\f\t\x0E\tZ\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\tb\n\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f|\n\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x02\x04\x03\x02\x19\x1A\x03\x02\x13\x17\x02\x81\x02\x1A\x03\x02\x02" +
		"\x02\x04!\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b/\x03\x02\x02\x02\nA\x03" +
		"\x02\x02\x02\fC\x03\x02\x02\x02\x0EE\x03\x02\x02\x02\x10a\x03\x02\x02" +
		"\x02\x12c\x03\x02\x02\x02\x14e\x03\x02\x02\x02\x16{\x03\x02\x02\x02\x18" +
		"}\x03\x02\x02\x02\x1A\x1E\x05\x06\x04\x02\x1B\x1D\x05\x04\x03\x02\x1C" +
		"\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E" +
		"\x1F\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07" +
		"\x03\x02\x02\"#\x07\x1A\x02\x02#\'\x07\x04\x02\x02$&\x05\b\x05\x02%$\x03" +
		"\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(" +
		"*\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07\x05\x02\x02+\x05\x03\x02\x02" +
		"\x02,-\x07\x06\x02\x02-.\x07\x1A\x02\x02.\x07\x03\x02\x02\x02/0\x07\x07" +
		"\x02\x0201\x07\x19\x02\x0212\x07\b\x02\x0223\x07\x18\x02\x0234\x07\t\x02" +
		"\x0245\x07\x1B\x02\x0257\x07\x04\x02\x0268\x05\n\x06\x0276\x03\x02\x02" +
		"\x0278\x03\x02\x02\x028:\x03\x02\x02\x029;\x05\x0E\b\x02:9\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<>\x05\x10\t\x02=<\x03\x02\x02" +
		"\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x07\x05\x02\x02@\t\x03\x02" +
		"\x02\x02AB\x07\n\x02\x02B\v\x03\x02\x02\x02CD\x07\v\x02\x02D\r\x03\x02" +
		"\x02\x02EF\x07\f\x02\x02FK\x05\x14\v\x02GH\x07\r\x02\x02HJ\x05\x14\v\x02" +
		"IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"LN\x03\x02\x02\x02MK\x03\x02\x02\x02NP\x07\t\x02\x02OQ\x05\f\x07\x02P" +
		"O\x03\x02\x02\x02PQ\x03\x02\x02\x02Q\x0F\x03\x02\x02\x02RS\x07\x0E\x02" +
		"\x02SX\x05\x14\v\x02TU\x07\r\x02\x02UW\x05\x14\v\x02VT\x03\x02\x02\x02" +
		"WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x03\x02\x02\x02" +
		"ZX\x03\x02\x02\x02[\\\x07\t\x02\x02\\b\x03\x02\x02\x02]^\x07\x0E\x02\x02" +
		"^_\x05\x12\n\x02_`\x07\t\x02\x02`b\x03\x02\x02\x02aR\x03\x02\x02\x02a" +
		"]\x03\x02\x02\x02b\x11\x03\x02\x02\x02cd\x05\x16\f\x02d\x13\x03\x02\x02" +
		"\x02ef\t\x02\x02\x02fg\x07\x0F\x02\x02gh\x05\x16\f\x02h\x15\x03\x02\x02" +
		"\x02i|\x05\x18\r\x02jk\x05\x18\r\x02kl\x07\x10\x02\x02l|\x03\x02\x02\x02" +
		"mn\x05\x18\r\x02no\x07\x11\x02\x02o|\x03\x02\x02\x02pq\x07\x1A\x02\x02" +
		"qr\x07\x12\x02\x02r|\x07\x1A\x02\x02st\x07\x1A\x02\x02tu\x07\x12\x02\x02" +
		"uv\x07\x1A\x02\x02v|\x07\x11\x02\x02wx\x07\x1A\x02\x02xy\x07\x12\x02\x02" +
		"yz\x07\x1A\x02\x02z|\x07\x10\x02\x02{i\x03\x02\x02\x02{j\x03\x02\x02\x02" +
		"{m\x03\x02\x02\x02{p\x03\x02\x02\x02{s\x03\x02\x02\x02{w\x03\x02\x02\x02" +
		"|\x17\x03\x02\x02\x02}~\t\x03\x02\x02~\x19\x03\x02\x02\x02\f\x1E\'7:=" +
		"KPXa{";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendApiParser.__ATN) {
			BlendApiParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendApiParser._serializedATN));
		}

		return BlendApiParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext {
		return this.getRuleContext(0, ModuleDefinitionContext);
	}
	public sectionDefinition(): SectionDefinitionContext[];
	public sectionDefinition(i: number): SectionDefinitionContext;
	public sectionDefinition(i?: number): SectionDefinitionContext | SectionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SectionDefinitionContext);
		} else {
			return this.getRuleContext(i, SectionDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class SectionDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendApiParser.CAPITAL_IDENTIFIER, 0); }
	public apiDefinition(): ApiDefinitionContext[];
	public apiDefinition(i: number): ApiDefinitionContext;
	public apiDefinition(i?: number): ApiDefinitionContext | ApiDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApiDefinitionContext);
		} else {
			return this.getRuleContext(i, ApiDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_sectionDefinition; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterSectionDefinition) {
			listener.enterSectionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitSectionDefinition) {
			listener.exitSectionDefinition(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendApiParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class ApiDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendApiParser.IDENTIFIER, 0); }
	public HTTP_METHOD(): TerminalNode { return this.getToken(BlendApiParser.HTTP_METHOD, 0); }
	public URL_IDENTIFIER(): TerminalNode { return this.getToken(BlendApiParser.URL_IDENTIFIER, 0); }
	public authenticated(): AuthenticatedContext | undefined {
		return this.tryGetRuleContext(0, AuthenticatedContext);
	}
	public inputDefinition(): InputDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InputDefinitionContext);
	}
	public outputDefinition(): OutputDefinitionContext | undefined {
		return this.tryGetRuleContext(0, OutputDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_apiDefinition; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterApiDefinition) {
			listener.enterApiDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitApiDefinition) {
			listener.exitApiDefinition(this);
		}
	}
}


export class AuthenticatedContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_authenticated; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterAuthenticated) {
			listener.enterAuthenticated(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitAuthenticated) {
			listener.exitAuthenticated(this);
		}
	}
}


export class StoreContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_store; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterStore) {
			listener.enterStore(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitStore) {
			listener.exitStore(this);
		}
	}
}


export class InputDefinitionContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public store(): StoreContext | undefined {
		return this.tryGetRuleContext(0, StoreContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_inputDefinition; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterInputDefinition) {
			listener.enterInputDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitInputDefinition) {
			listener.exitInputDefinition(this);
		}
	}
}


export class OutputDefinitionContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public directOutputDefenition(): DirectOutputDefenitionContext | undefined {
		return this.tryGetRuleContext(0, DirectOutputDefenitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_outputDefinition; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterOutputDefinition) {
			listener.enterOutputDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitOutputDefinition) {
			listener.exitOutputDefinition(this);
		}
	}
}


export class DirectOutputDefenitionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_directOutputDefenition; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterDirectOutputDefenition) {
			listener.enterDirectOutputDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitDirectOutputDefenition) {
			listener.exitDirectOutputDefenition(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(BlendApiParser.IDENTIFIER, 0); }
	public CAPITAL_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(BlendApiParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_field; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendApiParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendApiParser.CAPITAL_IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_type; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendApiParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: BlendApiListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendApiListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


