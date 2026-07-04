// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-r/src/grammar/blendRBasic.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendRBasicParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, PATH_IDENTIFIER=20, IDENTIFIER=21, CAPITAL_IDENTIFIER=22, 
		WS=23;
	public static final int
		RULE_sections = 0, RULE_module = 1, RULE_dataModule = 2, RULE_apiModule = 3, 
		RULE_program = 4, RULE_screenDefenition = 5, RULE_componentDefenition = 6, 
		RULE_layoutDefinition = 7, RULE_pageDefinition = 8, RULE_paramsSection = 9, 
		RULE_paramsDefinition = 10, RULE_field = 11, RULE_type = 12, RULE_primitiveType = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"sections", "module", "dataModule", "apiModule", "program", "screenDefenition", 
			"componentDefenition", "layoutDefinition", "pageDefinition", "paramsSection", 
			"paramsDefinition", "field", "type", "primitiveType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'data-module'", "','", "'api-module'", "'screen'", "'under'", 
			"'component'", "'layout'", "'('", "')'", "'{'", "'}'", "'page'", "':'", 
			"'?'", "'string'", "'number'", "'boolean'", "'any'", "'object'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "PATH_IDENTIFIER", "IDENTIFIER", 
			"CAPITAL_IDENTIFIER", "WS"
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
	public String getGrammarFileName() { return "blendRBasic.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendRBasicParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SectionsContext extends ParserRuleContext {
		public ProgramContext program() {
			return getRuleContext(ProgramContext.class,0);
		}
		public List<ModuleContext> module() {
			return getRuleContexts(ModuleContext.class);
		}
		public ModuleContext module(int i) {
			return getRuleContext(ModuleContext.class,i);
		}
		public SectionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sections; }
	}

	public final SectionsContext sections() throws RecognitionException {
		SectionsContext _localctx = new SectionsContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sections);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__2) {
				{
				{
				setState(28);
				module();
				}
				}
				setState(33);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(34);
			program();
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
	public static class ModuleContext extends ParserRuleContext {
		public DataModuleContext dataModule() {
			return getRuleContext(DataModuleContext.class,0);
		}
		public ApiModuleContext apiModule() {
			return getRuleContext(ApiModuleContext.class,0);
		}
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
	}

	public final ModuleContext module() throws RecognitionException {
		ModuleContext _localctx = new ModuleContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_module);
		try {
			setState(38);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(36);
				dataModule();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(37);
				apiModule();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class DataModuleContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
		public DataModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataModule; }
	}

	public final DataModuleContext dataModule() throws RecognitionException {
		DataModuleContext _localctx = new DataModuleContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_dataModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(T__0);
			setState(41);
			match(CAPITAL_IDENTIFIER);
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(42);
				match(T__1);
				setState(43);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(48);
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
	public static class ApiModuleContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
		public ApiModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_apiModule; }
	}

	public final ApiModuleContext apiModule() throws RecognitionException {
		ApiModuleContext _localctx = new ApiModuleContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_apiModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(T__2);
			setState(50);
			match(CAPITAL_IDENTIFIER);
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(51);
				match(T__1);
				setState(52);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(57);
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
	public static class ProgramContext extends ParserRuleContext {
		public List<ComponentDefenitionContext> componentDefenition() {
			return getRuleContexts(ComponentDefenitionContext.class);
		}
		public ComponentDefenitionContext componentDefenition(int i) {
			return getRuleContext(ComponentDefenitionContext.class,i);
		}
		public List<ScreenDefenitionContext> screenDefenition() {
			return getRuleContexts(ScreenDefenitionContext.class);
		}
		public ScreenDefenitionContext screenDefenition(int i) {
			return getRuleContext(ScreenDefenitionContext.class,i);
		}
		public List<LayoutDefinitionContext> layoutDefinition() {
			return getRuleContexts(LayoutDefinitionContext.class);
		}
		public LayoutDefinitionContext layoutDefinition(int i) {
			return getRuleContext(LayoutDefinitionContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(58);
				componentDefenition();
				}
				}
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(64);
				screenDefenition();
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__6) {
				{
				{
				setState(70);
				layoutDefinition();
				}
				}
				setState(75);
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
	public static class ScreenDefenitionContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
		public ScreenDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_screenDefenition; }
	}

	public final ScreenDefenitionContext screenDefenition() throws RecognitionException {
		ScreenDefenitionContext _localctx = new ScreenDefenitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_screenDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(T__3);
			setState(77);
			match(CAPITAL_IDENTIFIER);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(78);
				match(T__1);
				setState(79);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(85);
			match(T__4);
			setState(86);
			match(PATH_IDENTIFIER);
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
	public static class ComponentDefenitionContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
		public ComponentDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentDefenition; }
	}

	public final ComponentDefenitionContext componentDefenition() throws RecognitionException {
		ComponentDefenitionContext _localctx = new ComponentDefenitionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_componentDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(T__5);
			setState(89);
			match(CAPITAL_IDENTIFIER);
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(90);
				match(T__1);
				setState(91);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(97);
			match(T__4);
			setState(98);
			match(PATH_IDENTIFIER);
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
	public static class LayoutDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, 0); }
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
		public List<PageDefinitionContext> pageDefinition() {
			return getRuleContexts(PageDefinitionContext.class);
		}
		public PageDefinitionContext pageDefinition(int i) {
			return getRuleContext(PageDefinitionContext.class,i);
		}
		public List<LayoutDefinitionContext> layoutDefinition() {
			return getRuleContexts(LayoutDefinitionContext.class);
		}
		public LayoutDefinitionContext layoutDefinition(int i) {
			return getRuleContext(LayoutDefinitionContext.class,i);
		}
		public LayoutDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_layoutDefinition; }
	}

	public final LayoutDefinitionContext layoutDefinition() throws RecognitionException {
		LayoutDefinitionContext _localctx = new LayoutDefinitionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_layoutDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(T__6);
			setState(101);
			match(CAPITAL_IDENTIFIER);
			setState(102);
			match(T__7);
			setState(103);
			match(PATH_IDENTIFIER);
			setState(104);
			match(T__8);
			setState(105);
			match(T__9);
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__11) {
				{
				{
				setState(106);
				pageDefinition();
				}
				}
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__6) {
				{
				{
				setState(112);
				layoutDefinition();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
			match(T__10);
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
	public static class PageDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, 0); }
		public ParamsSectionContext paramsSection() {
			return getRuleContext(ParamsSectionContext.class,0);
		}
		public PageDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pageDefinition; }
	}

	public final PageDefinitionContext pageDefinition() throws RecognitionException {
		PageDefinitionContext _localctx = new PageDefinitionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_pageDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(T__11);
			setState(121);
			match(CAPITAL_IDENTIFIER);
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(122);
				paramsSection();
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
	public static class ParamsSectionContext extends ParserRuleContext {
		public ParamsDefinitionContext paramsDefinition() {
			return getRuleContext(ParamsDefinitionContext.class,0);
		}
		public ParamsSectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramsSection; }
	}

	public final ParamsSectionContext paramsSection() throws RecognitionException {
		ParamsSectionContext _localctx = new ParamsSectionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_paramsSection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(T__7);
			setState(126);
			paramsDefinition();
			setState(127);
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
	public static class ParamsDefinitionContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public ParamsDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramsDefinition; }
	}

	public final ParamsDefinitionContext paramsDefinition() throws RecognitionException {
		ParamsDefinitionContext _localctx = new ParamsDefinitionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_paramsDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			field();
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(130);
				match(T__1);
				setState(131);
				field();
				}
				}
				setState(136);
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
	public static class FieldContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendRBasicParser.IDENTIFIER, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			match(IDENTIFIER);
			setState(138);
			match(T__12);
			setState(139);
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
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_type);
		try {
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(141);
				primitiveType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(142);
				primitiveType();
				setState(143);
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
		enterRule(_localctx, 26, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1015808L) != 0)) ) {
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
		"\u0004\u0001\u0017\u0096\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0005\u0000\u001e\b\u0000"+
		"\n\u0000\f\u0000!\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0003\u0001\'\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0005\u0002-\b\u0002\n\u0002\f\u00020\t\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0005\u00036\b\u0003\n\u0003\f\u00039\t\u0003"+
		"\u0001\u0004\u0005\u0004<\b\u0004\n\u0004\f\u0004?\t\u0004\u0001\u0004"+
		"\u0005\u0004B\b\u0004\n\u0004\f\u0004E\t\u0004\u0001\u0004\u0005\u0004"+
		"H\b\u0004\n\u0004\f\u0004K\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0005\u0005Q\b\u0005\n\u0005\f\u0005T\t\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0005\u0006]\b\u0006\n\u0006\f\u0006`\t\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0005\u0007l\b\u0007\n\u0007\f\u0007o\t\u0007"+
		"\u0001\u0007\u0005\u0007r\b\u0007\n\u0007\f\u0007u\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0003\b|\b\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0005\n\u0085\b\n\n\n\f\n\u0088\t\n"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0003\f\u0092\b\f\u0001\r\u0001\r\u0001\r\u0000\u0000\u000e"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u0000\u0001\u0001\u0000\u000f\u0013\u0095\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0002&\u0001\u0000\u0000\u0000\u0004(\u0001\u0000\u0000\u0000\u0006"+
		"1\u0001\u0000\u0000\u0000\b=\u0001\u0000\u0000\u0000\nL\u0001\u0000\u0000"+
		"\u0000\fX\u0001\u0000\u0000\u0000\u000ed\u0001\u0000\u0000\u0000\u0010"+
		"x\u0001\u0000\u0000\u0000\u0012}\u0001\u0000\u0000\u0000\u0014\u0081\u0001"+
		"\u0000\u0000\u0000\u0016\u0089\u0001\u0000\u0000\u0000\u0018\u0091\u0001"+
		"\u0000\u0000\u0000\u001a\u0093\u0001\u0000\u0000\u0000\u001c\u001e\u0003"+
		"\u0002\u0001\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e!\u0001\u0000"+
		"\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000"+
		"\u0000 \"\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000\"#\u0003"+
		"\b\u0004\u0000#\u0001\u0001\u0000\u0000\u0000$\'\u0003\u0004\u0002\u0000"+
		"%\'\u0003\u0006\u0003\u0000&$\u0001\u0000\u0000\u0000&%\u0001\u0000\u0000"+
		"\u0000\'\u0003\u0001\u0000\u0000\u0000()\u0005\u0001\u0000\u0000).\u0005"+
		"\u0016\u0000\u0000*+\u0005\u0002\u0000\u0000+-\u0005\u0016\u0000\u0000"+
		",*\u0001\u0000\u0000\u0000-0\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000"+
		"\u0000./\u0001\u0000\u0000\u0000/\u0005\u0001\u0000\u0000\u00000.\u0001"+
		"\u0000\u0000\u000012\u0005\u0003\u0000\u000027\u0005\u0016\u0000\u0000"+
		"34\u0005\u0002\u0000\u000046\u0005\u0016\u0000\u000053\u0001\u0000\u0000"+
		"\u000069\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u000078\u0001\u0000"+
		"\u0000\u00008\u0007\u0001\u0000\u0000\u000097\u0001\u0000\u0000\u0000"+
		":<\u0003\f\u0006\u0000;:\u0001\u0000\u0000\u0000<?\u0001\u0000\u0000\u0000"+
		"=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>C\u0001\u0000\u0000"+
		"\u0000?=\u0001\u0000\u0000\u0000@B\u0003\n\u0005\u0000A@\u0001\u0000\u0000"+
		"\u0000BE\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001\u0000"+
		"\u0000\u0000DI\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000FH\u0003"+
		"\u000e\u0007\u0000GF\u0001\u0000\u0000\u0000HK\u0001\u0000\u0000\u0000"+
		"IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000J\t\u0001\u0000\u0000"+
		"\u0000KI\u0001\u0000\u0000\u0000LM\u0005\u0004\u0000\u0000MR\u0005\u0016"+
		"\u0000\u0000NO\u0005\u0002\u0000\u0000OQ\u0005\u0016\u0000\u0000PN\u0001"+
		"\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000"+
		"RS\u0001\u0000\u0000\u0000SU\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000"+
		"\u0000UV\u0005\u0005\u0000\u0000VW\u0005\u0014\u0000\u0000W\u000b\u0001"+
		"\u0000\u0000\u0000XY\u0005\u0006\u0000\u0000Y^\u0005\u0016\u0000\u0000"+
		"Z[\u0005\u0002\u0000\u0000[]\u0005\u0016\u0000\u0000\\Z\u0001\u0000\u0000"+
		"\u0000]`\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000"+
		"\u0000\u0000_a\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000ab\u0005"+
		"\u0005\u0000\u0000bc\u0005\u0014\u0000\u0000c\r\u0001\u0000\u0000\u0000"+
		"de\u0005\u0007\u0000\u0000ef\u0005\u0016\u0000\u0000fg\u0005\b\u0000\u0000"+
		"gh\u0005\u0014\u0000\u0000hi\u0005\t\u0000\u0000im\u0005\n\u0000\u0000"+
		"jl\u0003\u0010\b\u0000kj\u0001\u0000\u0000\u0000lo\u0001\u0000\u0000\u0000"+
		"mk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000ns\u0001\u0000\u0000"+
		"\u0000om\u0001\u0000\u0000\u0000pr\u0003\u000e\u0007\u0000qp\u0001\u0000"+
		"\u0000\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001"+
		"\u0000\u0000\u0000tv\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000"+
		"vw\u0005\u000b\u0000\u0000w\u000f\u0001\u0000\u0000\u0000xy\u0005\f\u0000"+
		"\u0000y{\u0005\u0016\u0000\u0000z|\u0003\u0012\t\u0000{z\u0001\u0000\u0000"+
		"\u0000{|\u0001\u0000\u0000\u0000|\u0011\u0001\u0000\u0000\u0000}~\u0005"+
		"\b\u0000\u0000~\u007f\u0003\u0014\n\u0000\u007f\u0080\u0005\t\u0000\u0000"+
		"\u0080\u0013\u0001\u0000\u0000\u0000\u0081\u0086\u0003\u0016\u000b\u0000"+
		"\u0082\u0083\u0005\u0002\u0000\u0000\u0083\u0085\u0003\u0016\u000b\u0000"+
		"\u0084\u0082\u0001\u0000\u0000\u0000\u0085\u0088\u0001\u0000\u0000\u0000"+
		"\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000"+
		"\u0087\u0015\u0001\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000"+
		"\u0089\u008a\u0005\u0015\u0000\u0000\u008a\u008b\u0005\r\u0000\u0000\u008b"+
		"\u008c\u0003\u0018\f\u0000\u008c\u0017\u0001\u0000\u0000\u0000\u008d\u0092"+
		"\u0003\u001a\r\u0000\u008e\u008f\u0003\u001a\r\u0000\u008f\u0090\u0005"+
		"\u000e\u0000\u0000\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u008d\u0001"+
		"\u0000\u0000\u0000\u0091\u008e\u0001\u0000\u0000\u0000\u0092\u0019\u0001"+
		"\u0000\u0000\u0000\u0093\u0094\u0007\u0000\u0000\u0000\u0094\u001b\u0001"+
		"\u0000\u0000\u0000\u000e\u001f&.7=CIR^ms{\u0086\u0091";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}