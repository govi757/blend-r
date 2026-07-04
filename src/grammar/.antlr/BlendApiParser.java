// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-r/src/grammar/BlendApi.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendApiParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, HTTP_METHOD=22, IDENTIFIER=23, 
		CAPITAL_IDENTIFIER=24, URL_IDENTIFIER=25, WS=26;
	public static final int
		RULE_program = 0, RULE_sectionDefinition = 1, RULE_moduleDefinition = 2, 
		RULE_apiDefinition = 3, RULE_authenticated = 4, RULE_store = 5, RULE_inputDefinition = 6, 
		RULE_outputDefinition = 7, RULE_directOutputDefenition = 8, RULE_field = 9, 
		RULE_type = 10, RULE_primitiveType = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "sectionDefinition", "moduleDefinition", "apiDefinition", 
			"authenticated", "store", "inputDefinition", "outputDefinition", "directOutputDefenition", 
			"field", "type", "primitiveType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'section'", "'{'", "'}'", "'module'", "'api'", "'('", "')'", "'authenticated'", 
			"'store'", "'input('", "','", "'output('", "':'", "'[]'", "'?'", "'->'", 
			"'string'", "'number'", "'boolean'", "'any'", "'object'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "HTTP_METHOD", 
			"IDENTIFIER", "CAPITAL_IDENTIFIER", "URL_IDENTIFIER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "BlendApi.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendApiParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
		}
		public List<SectionDefinitionContext> sectionDefinition() {
			return getRuleContexts(SectionDefinitionContext.class);
		}
		public SectionDefinitionContext sectionDefinition(int i) {
			return getRuleContext(SectionDefinitionContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			moduleDefinition();
			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(25);
				sectionDefinition();
				}
				}
				setState(30);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SectionDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendApiParser.CAPITAL_IDENTIFIER, 0); }
		public List<ApiDefinitionContext> apiDefinition() {
			return getRuleContexts(ApiDefinitionContext.class);
		}
		public ApiDefinitionContext apiDefinition(int i) {
			return getRuleContext(ApiDefinitionContext.class,i);
		}
		public SectionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sectionDefinition; }
	}

	public final SectionDefinitionContext sectionDefinition() throws RecognitionException {
		SectionDefinitionContext _localctx = new SectionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sectionDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(T__0);
			setState(32);
			match(CAPITAL_IDENTIFIER);
			setState(33);
			match(T__1);
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(34);
				apiDefinition();
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(40);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModuleDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendApiParser.CAPITAL_IDENTIFIER, 0); }
		public ModuleDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDefinition; }
	}

	public final ModuleDefinitionContext moduleDefinition() throws RecognitionException {
		ModuleDefinitionContext _localctx = new ModuleDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(T__3);
			setState(43);
			match(CAPITAL_IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ApiDefinitionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendApiParser.IDENTIFIER, 0); }
		public TerminalNode HTTP_METHOD() { return getToken(BlendApiParser.HTTP_METHOD, 0); }
		public TerminalNode URL_IDENTIFIER() { return getToken(BlendApiParser.URL_IDENTIFIER, 0); }
		public AuthenticatedContext authenticated() {
			return getRuleContext(AuthenticatedContext.class,0);
		}
		public InputDefinitionContext inputDefinition() {
			return getRuleContext(InputDefinitionContext.class,0);
		}
		public OutputDefinitionContext outputDefinition() {
			return getRuleContext(OutputDefinitionContext.class,0);
		}
		public ApiDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_apiDefinition; }
	}

	public final ApiDefinitionContext apiDefinition() throws RecognitionException {
		ApiDefinitionContext _localctx = new ApiDefinitionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_apiDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(T__4);
			setState(46);
			match(IDENTIFIER);
			setState(47);
			match(T__5);
			setState(48);
			match(HTTP_METHOD);
			setState(49);
			match(T__6);
			setState(50);
			match(URL_IDENTIFIER);
			setState(51);
			match(T__1);
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(52);
				authenticated();
				}
			}

			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(55);
				inputDefinition();
				}
			}

			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__11) {
				{
				setState(58);
				outputDefinition();
				}
			}

			setState(61);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AuthenticatedContext extends ParserRuleContext {
		public AuthenticatedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_authenticated; }
	}

	public final AuthenticatedContext authenticated() throws RecognitionException {
		AuthenticatedContext _localctx = new AuthenticatedContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_authenticated);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StoreContext extends ParserRuleContext {
		public StoreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_store; }
	}

	public final StoreContext store() throws RecognitionException {
		StoreContext _localctx = new StoreContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_store);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InputDefinitionContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public StoreContext store() {
			return getRuleContext(StoreContext.class,0);
		}
		public InputDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inputDefinition; }
	}

	public final InputDefinitionContext inputDefinition() throws RecognitionException {
		InputDefinitionContext _localctx = new InputDefinitionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_inputDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(T__9);
			setState(68);
			field();
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(69);
				match(T__10);
				setState(70);
				field();
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(76);
			match(T__6);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(77);
				store();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OutputDefinitionContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public DirectOutputDefenitionContext directOutputDefenition() {
			return getRuleContext(DirectOutputDefenitionContext.class,0);
		}
		public OutputDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputDefinition; }
	}

	public final OutputDefinitionContext outputDefinition() throws RecognitionException {
		OutputDefinitionContext _localctx = new OutputDefinitionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_outputDefinition);
		int _la;
		try {
			setState(95);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				match(T__11);
				setState(81);
				field();
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__10) {
					{
					{
					setState(82);
					match(T__10);
					setState(83);
					field();
					}
					}
					setState(88);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(89);
				match(T__6);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				match(T__11);
				setState(92);
				directOutputDefenition();
				setState(93);
				match(T__6);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DirectOutputDefenitionContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public DirectOutputDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directOutputDefenition; }
	}

	public final DirectOutputDefenitionContext directOutputDefenition() throws RecognitionException {
		DirectOutputDefenitionContext _localctx = new DirectOutputDefenitionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_directOutputDefenition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(BlendApiParser.IDENTIFIER, 0); }
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendApiParser.CAPITAL_IDENTIFIER, 0); }
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			_la = _input.LA(1);
			if ( !(_la==IDENTIFIER || _la==CAPITAL_IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(100);
			match(T__12);
			setState(101);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendApiParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendApiParser.CAPITAL_IDENTIFIER, i);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_type);
		try {
			setState(121);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				primitiveType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(104);
				primitiveType();
				setState(105);
				match(T__13);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(107);
				primitiveType();
				setState(108);
				match(T__14);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(110);
				match(CAPITAL_IDENTIFIER);
				setState(111);
				match(T__15);
				setState(112);
				match(CAPITAL_IDENTIFIER);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(113);
				match(CAPITAL_IDENTIFIER);
				setState(114);
				match(T__15);
				setState(115);
				match(CAPITAL_IDENTIFIER);
				setState(116);
				match(T__14);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(117);
				match(CAPITAL_IDENTIFIER);
				setState(118);
				match(T__15);
				setState(119);
				match(CAPITAL_IDENTIFIER);
				setState(120);
				match(T__13);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimitiveTypeContext extends ParserRuleContext {
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4063232L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001a~\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001"+
		"\u0000\u0001\u0000\u0005\u0000\u001b\b\u0000\n\u0000\f\u0000\u001e\t\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001$\b\u0001"+
		"\n\u0001\f\u0001\'\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00036\b\u0003\u0001\u0003"+
		"\u0003\u00039\b\u0003\u0001\u0003\u0003\u0003<\b\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0005\u0006H\b\u0006\n\u0006\f\u0006K\t"+
		"\u0006\u0001\u0006\u0001\u0006\u0003\u0006O\b\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0005\u0007U\b\u0007\n\u0007\f\u0007X\t"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0003\u0007`\b\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0003\nz\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0000\u0000\f\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0002\u0001"+
		"\u0000\u0017\u0018\u0001\u0000\u0011\u0015\u007f\u0000\u0018\u0001\u0000"+
		"\u0000\u0000\u0002\u001f\u0001\u0000\u0000\u0000\u0004*\u0001\u0000\u0000"+
		"\u0000\u0006-\u0001\u0000\u0000\u0000\b?\u0001\u0000\u0000\u0000\nA\u0001"+
		"\u0000\u0000\u0000\fC\u0001\u0000\u0000\u0000\u000e_\u0001\u0000\u0000"+
		"\u0000\u0010a\u0001\u0000\u0000\u0000\u0012c\u0001\u0000\u0000\u0000\u0014"+
		"y\u0001\u0000\u0000\u0000\u0016{\u0001\u0000\u0000\u0000\u0018\u001c\u0003"+
		"\u0004\u0002\u0000\u0019\u001b\u0003\u0002\u0001\u0000\u001a\u0019\u0001"+
		"\u0000\u0000\u0000\u001b\u001e\u0001\u0000\u0000\u0000\u001c\u001a\u0001"+
		"\u0000\u0000\u0000\u001c\u001d\u0001\u0000\u0000\u0000\u001d\u0001\u0001"+
		"\u0000\u0000\u0000\u001e\u001c\u0001\u0000\u0000\u0000\u001f \u0005\u0001"+
		"\u0000\u0000 !\u0005\u0018\u0000\u0000!%\u0005\u0002\u0000\u0000\"$\u0003"+
		"\u0006\u0003\u0000#\"\u0001\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000"+
		"%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&(\u0001\u0000\u0000"+
		"\u0000\'%\u0001\u0000\u0000\u0000()\u0005\u0003\u0000\u0000)\u0003\u0001"+
		"\u0000\u0000\u0000*+\u0005\u0004\u0000\u0000+,\u0005\u0018\u0000\u0000"+
		",\u0005\u0001\u0000\u0000\u0000-.\u0005\u0005\u0000\u0000./\u0005\u0017"+
		"\u0000\u0000/0\u0005\u0006\u0000\u000001\u0005\u0016\u0000\u000012\u0005"+
		"\u0007\u0000\u000023\u0005\u0019\u0000\u000035\u0005\u0002\u0000\u0000"+
		"46\u0003\b\u0004\u000054\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u0000"+
		"68\u0001\u0000\u0000\u000079\u0003\f\u0006\u000087\u0001\u0000\u0000\u0000"+
		"89\u0001\u0000\u0000\u00009;\u0001\u0000\u0000\u0000:<\u0003\u000e\u0007"+
		"\u0000;:\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0001\u0000"+
		"\u0000\u0000=>\u0005\u0003\u0000\u0000>\u0007\u0001\u0000\u0000\u0000"+
		"?@\u0005\b\u0000\u0000@\t\u0001\u0000\u0000\u0000AB\u0005\t\u0000\u0000"+
		"B\u000b\u0001\u0000\u0000\u0000CD\u0005\n\u0000\u0000DI\u0003\u0012\t"+
		"\u0000EF\u0005\u000b\u0000\u0000FH\u0003\u0012\t\u0000GE\u0001\u0000\u0000"+
		"\u0000HK\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000"+
		"\u0000\u0000JL\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000LN\u0005"+
		"\u0007\u0000\u0000MO\u0003\n\u0005\u0000NM\u0001\u0000\u0000\u0000NO\u0001"+
		"\u0000\u0000\u0000O\r\u0001\u0000\u0000\u0000PQ\u0005\f\u0000\u0000QV"+
		"\u0003\u0012\t\u0000RS\u0005\u000b\u0000\u0000SU\u0003\u0012\t\u0000T"+
		"R\u0001\u0000\u0000\u0000UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000"+
		"\u0000VW\u0001\u0000\u0000\u0000WY\u0001\u0000\u0000\u0000XV\u0001\u0000"+
		"\u0000\u0000YZ\u0005\u0007\u0000\u0000Z`\u0001\u0000\u0000\u0000[\\\u0005"+
		"\f\u0000\u0000\\]\u0003\u0010\b\u0000]^\u0005\u0007\u0000\u0000^`\u0001"+
		"\u0000\u0000\u0000_P\u0001\u0000\u0000\u0000_[\u0001\u0000\u0000\u0000"+
		"`\u000f\u0001\u0000\u0000\u0000ab\u0003\u0014\n\u0000b\u0011\u0001\u0000"+
		"\u0000\u0000cd\u0007\u0000\u0000\u0000de\u0005\r\u0000\u0000ef\u0003\u0014"+
		"\n\u0000f\u0013\u0001\u0000\u0000\u0000gz\u0003\u0016\u000b\u0000hi\u0003"+
		"\u0016\u000b\u0000ij\u0005\u000e\u0000\u0000jz\u0001\u0000\u0000\u0000"+
		"kl\u0003\u0016\u000b\u0000lm\u0005\u000f\u0000\u0000mz\u0001\u0000\u0000"+
		"\u0000no\u0005\u0018\u0000\u0000op\u0005\u0010\u0000\u0000pz\u0005\u0018"+
		"\u0000\u0000qr\u0005\u0018\u0000\u0000rs\u0005\u0010\u0000\u0000st\u0005"+
		"\u0018\u0000\u0000tz\u0005\u000f\u0000\u0000uv\u0005\u0018\u0000\u0000"+
		"vw\u0005\u0010\u0000\u0000wx\u0005\u0018\u0000\u0000xz\u0005\u000e\u0000"+
		"\u0000yg\u0001\u0000\u0000\u0000yh\u0001\u0000\u0000\u0000yk\u0001\u0000"+
		"\u0000\u0000yn\u0001\u0000\u0000\u0000yq\u0001\u0000\u0000\u0000yu\u0001"+
		"\u0000\u0000\u0000z\u0015\u0001\u0000\u0000\u0000{|\u0007\u0001\u0000"+
		"\u0000|\u0017\u0001\u0000\u0000\u0000\n\u001c%58;INV_y";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}