// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-r/src/grammar/BlendRBasic.g4 by ANTLR 4.13.1
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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, PATH_IDENTIFIER=16, 
		IDENTIFIER=17, CAPITAL_IDENTIFIER=18, WS=19;
	public static final int
		RULE_sections = 0, RULE_module = 1, RULE_dataModule = 2, RULE_apiModule = 3, 
		RULE_program = 4, RULE_roleDefenition = 5, RULE_screenDefenition = 6, 
		RULE_componentDefenition = 7, RULE_layoutDefinition = 8, RULE_pageDefinition = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"sections", "module", "dataModule", "apiModule", "program", "roleDefenition", 
			"screenDefenition", "componentDefenition", "layoutDefinition", "pageDefinition"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'data-module'", "','", "'api-module'", "'role'", "'screen'", "'under'", 
			"'component'", "'layout'", "'('", "')'", "'{'", "'}'", "'page'", "'view'", 
			"'authenticated'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "PATH_IDENTIFIER", "IDENTIFIER", "CAPITAL_IDENTIFIER", 
			"WS"
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
	public String getGrammarFileName() { return "BlendRBasic.g4"; }

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
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__2) {
				{
				{
				setState(20);
				module();
				}
				}
				setState(25);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(26);
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
			setState(30);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				dataModule();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(29);
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
			setState(32);
			match(T__0);
			setState(33);
			match(CAPITAL_IDENTIFIER);
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(34);
				match(T__1);
				setState(35);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(40);
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
			setState(41);
			match(T__2);
			setState(42);
			match(CAPITAL_IDENTIFIER);
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(43);
				match(T__1);
				setState(44);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(49);
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
		public List<RoleDefenitionContext> roleDefenition() {
			return getRuleContexts(RoleDefenitionContext.class);
		}
		public RoleDefenitionContext roleDefenition(int i) {
			return getRuleContext(RoleDefenitionContext.class,i);
		}
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
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 432L) != 0)) {
				{
				setState(54);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
					{
					setState(50);
					roleDefenition();
					}
					break;
				case T__6:
					{
					setState(51);
					componentDefenition();
					}
					break;
				case T__4:
					{
					setState(52);
					screenDefenition();
					}
					break;
				case T__7:
					{
					setState(53);
					layoutDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(58);
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
	public static class RoleDefenitionContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
		public RoleDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleDefenition; }
	}

	public final RoleDefenitionContext roleDefenition() throws RecognitionException {
		RoleDefenitionContext _localctx = new RoleDefenitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_roleDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(T__3);
			setState(60);
			match(CAPITAL_IDENTIFIER);
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(61);
				match(T__1);
				setState(62);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(67);
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
		enterRule(_localctx, 12, RULE_screenDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(T__4);
			setState(69);
			match(CAPITAL_IDENTIFIER);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(70);
				match(T__1);
				setState(71);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(77);
			match(T__5);
			setState(78);
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
		enterRule(_localctx, 14, RULE_componentDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(T__6);
			setState(81);
			match(CAPITAL_IDENTIFIER);
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(82);
				match(T__1);
				setState(83);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(89);
			match(T__5);
			setState(90);
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
		enterRule(_localctx, 16, RULE_layoutDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(T__7);
			setState(93);
			match(CAPITAL_IDENTIFIER);
			setState(94);
			match(T__8);
			setState(95);
			match(PATH_IDENTIFIER);
			setState(96);
			match(T__9);
			setState(97);
			match(T__10);
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__12) {
				{
				{
				setState(98);
				pageDefinition();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__7) {
				{
				{
				setState(104);
				layoutDefinition();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
			match(T__11);
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
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRBasicParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRBasicParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRBasicParser.PATH_IDENTIFIER, 0); }
		public PageDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pageDefinition; }
	}

	public final PageDefinitionContext pageDefinition() throws RecognitionException {
		PageDefinitionContext _localctx = new PageDefinitionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_pageDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(T__12);
			setState(113);
			match(CAPITAL_IDENTIFIER);
			setState(114);
			match(T__8);
			setState(115);
			match(PATH_IDENTIFIER);
			setState(116);
			match(T__9);
			setState(117);
			match(T__13);
			setState(118);
			match(T__8);
			setState(119);
			match(CAPITAL_IDENTIFIER);
			setState(120);
			match(T__9);
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(121);
				match(T__14);
				setState(122);
				match(T__8);
				setState(123);
				match(CAPITAL_IDENTIFIER);
				setState(124);
				match(T__9);
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

	public static final String _serializedATN =
		"\u0004\u0001\u0013\u0080\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0005\u0000\u0016\b\u0000"+
		"\n\u0000\f\u0000\u0019\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0003\u0001\u001f\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0005\u0002%\b\u0002\n\u0002\f\u0002(\t\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0005\u0003.\b\u0003\n\u0003\f\u00031\t"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u00047\b"+
		"\u0004\n\u0004\f\u0004:\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0005\u0005@\b\u0005\n\u0005\f\u0005C\t\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0005\u0006I\b\u0006\n\u0006\f\u0006L\t"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0005\u0007U\b\u0007\n\u0007\f\u0007X\t\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0005\bd\b\b\n\b\f\bg\t\b\u0001\b\u0005\bj\b\b\n\b\f"+
		"\bm\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t~\b"+
		"\t\u0001\t\u0000\u0000\n\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0000\u0000\u0083\u0000\u0017\u0001\u0000\u0000\u0000\u0002\u001e\u0001"+
		"\u0000\u0000\u0000\u0004 \u0001\u0000\u0000\u0000\u0006)\u0001\u0000\u0000"+
		"\u0000\b8\u0001\u0000\u0000\u0000\n;\u0001\u0000\u0000\u0000\fD\u0001"+
		"\u0000\u0000\u0000\u000eP\u0001\u0000\u0000\u0000\u0010\\\u0001\u0000"+
		"\u0000\u0000\u0012p\u0001\u0000\u0000\u0000\u0014\u0016\u0003\u0002\u0001"+
		"\u0000\u0015\u0014\u0001\u0000\u0000\u0000\u0016\u0019\u0001\u0000\u0000"+
		"\u0000\u0017\u0015\u0001\u0000\u0000\u0000\u0017\u0018\u0001\u0000\u0000"+
		"\u0000\u0018\u001a\u0001\u0000\u0000\u0000\u0019\u0017\u0001\u0000\u0000"+
		"\u0000\u001a\u001b\u0003\b\u0004\u0000\u001b\u0001\u0001\u0000\u0000\u0000"+
		"\u001c\u001f\u0003\u0004\u0002\u0000\u001d\u001f\u0003\u0006\u0003\u0000"+
		"\u001e\u001c\u0001\u0000\u0000\u0000\u001e\u001d\u0001\u0000\u0000\u0000"+
		"\u001f\u0003\u0001\u0000\u0000\u0000 !\u0005\u0001\u0000\u0000!&\u0005"+
		"\u0012\u0000\u0000\"#\u0005\u0002\u0000\u0000#%\u0005\u0012\u0000\u0000"+
		"$\"\u0001\u0000\u0000\u0000%(\u0001\u0000\u0000\u0000&$\u0001\u0000\u0000"+
		"\u0000&\'\u0001\u0000\u0000\u0000\'\u0005\u0001\u0000\u0000\u0000(&\u0001"+
		"\u0000\u0000\u0000)*\u0005\u0003\u0000\u0000*/\u0005\u0012\u0000\u0000"+
		"+,\u0005\u0002\u0000\u0000,.\u0005\u0012\u0000\u0000-+\u0001\u0000\u0000"+
		"\u0000.1\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000/0\u0001\u0000"+
		"\u0000\u00000\u0007\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u0000"+
		"27\u0003\n\u0005\u000037\u0003\u000e\u0007\u000047\u0003\f\u0006\u0000"+
		"57\u0003\u0010\b\u000062\u0001\u0000\u0000\u000063\u0001\u0000\u0000\u0000"+
		"64\u0001\u0000\u0000\u000065\u0001\u0000\u0000\u00007:\u0001\u0000\u0000"+
		"\u000086\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009\t\u0001\u0000"+
		"\u0000\u0000:8\u0001\u0000\u0000\u0000;<\u0005\u0004\u0000\u0000<A\u0005"+
		"\u0012\u0000\u0000=>\u0005\u0002\u0000\u0000>@\u0005\u0012\u0000\u0000"+
		"?=\u0001\u0000\u0000\u0000@C\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000"+
		"\u0000AB\u0001\u0000\u0000\u0000B\u000b\u0001\u0000\u0000\u0000CA\u0001"+
		"\u0000\u0000\u0000DE\u0005\u0005\u0000\u0000EJ\u0005\u0012\u0000\u0000"+
		"FG\u0005\u0002\u0000\u0000GI\u0005\u0012\u0000\u0000HF\u0001\u0000\u0000"+
		"\u0000IL\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000JK\u0001\u0000"+
		"\u0000\u0000KM\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000MN\u0005"+
		"\u0006\u0000\u0000NO\u0005\u0010\u0000\u0000O\r\u0001\u0000\u0000\u0000"+
		"PQ\u0005\u0007\u0000\u0000QV\u0005\u0012\u0000\u0000RS\u0005\u0002\u0000"+
		"\u0000SU\u0005\u0012\u0000\u0000TR\u0001\u0000\u0000\u0000UX\u0001\u0000"+
		"\u0000\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000WY\u0001"+
		"\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000YZ\u0005\u0006\u0000\u0000"+
		"Z[\u0005\u0010\u0000\u0000[\u000f\u0001\u0000\u0000\u0000\\]\u0005\b\u0000"+
		"\u0000]^\u0005\u0012\u0000\u0000^_\u0005\t\u0000\u0000_`\u0005\u0010\u0000"+
		"\u0000`a\u0005\n\u0000\u0000ae\u0005\u000b\u0000\u0000bd\u0003\u0012\t"+
		"\u0000cb\u0001\u0000\u0000\u0000dg\u0001\u0000\u0000\u0000ec\u0001\u0000"+
		"\u0000\u0000ef\u0001\u0000\u0000\u0000fk\u0001\u0000\u0000\u0000ge\u0001"+
		"\u0000\u0000\u0000hj\u0003\u0010\b\u0000ih\u0001\u0000\u0000\u0000jm\u0001"+
		"\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000"+
		"ln\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000no\u0005\f\u0000\u0000"+
		"o\u0011\u0001\u0000\u0000\u0000pq\u0005\r\u0000\u0000qr\u0005\u0012\u0000"+
		"\u0000rs\u0005\t\u0000\u0000st\u0005\u0010\u0000\u0000tu\u0005\n\u0000"+
		"\u0000uv\u0005\u000e\u0000\u0000vw\u0005\t\u0000\u0000wx\u0005\u0012\u0000"+
		"\u0000x}\u0005\n\u0000\u0000yz\u0005\u000f\u0000\u0000z{\u0005\t\u0000"+
		"\u0000{|\u0005\u0012\u0000\u0000|~\u0005\n\u0000\u0000}y\u0001\u0000\u0000"+
		"\u0000}~\u0001\u0000\u0000\u0000~\u0013\u0001\u0000\u0000\u0000\f\u0017"+
		"\u001e&/68AJVek}";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}