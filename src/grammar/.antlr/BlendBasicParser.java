// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-r/src/grammar/BlendBasic.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendBasicParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, IDENTIFIER=7, WS=8;
	public static final int
		RULE_sections = 0, RULE_section = 1, RULE_module = 2, RULE_dataModule = 3, 
		RULE_expressModule = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"sections", "section", "module", "dataModule", "expressModule"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'section'", "'{'", "'}'", "'data-module'", "','", "'api-module'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "IDENTIFIER", "WS"
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
	public String getGrammarFileName() { return "BlendBasic.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendBasicParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SectionsContext extends ParserRuleContext {
		public List<SectionContext> section() {
			return getRuleContexts(SectionContext.class);
		}
		public SectionContext section(int i) {
			return getRuleContext(SectionContext.class,i);
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
			setState(11); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(10);
				section();
				}
				}
				setState(13); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 );
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
	public static class SectionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendBasicParser.IDENTIFIER, 0); }
		public List<ModuleContext> module() {
			return getRuleContexts(ModuleContext.class);
		}
		public ModuleContext module(int i) {
			return getRuleContext(ModuleContext.class,i);
		}
		public SectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_section; }
	}

	public final SectionContext section() throws RecognitionException {
		SectionContext _localctx = new SectionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_section);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(15);
			match(T__0);
			setState(16);
			match(IDENTIFIER);
			setState(17);
			match(T__1);
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3 || _la==T__5) {
				{
				{
				setState(18);
				module();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(24);
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
	public static class ModuleContext extends ParserRuleContext {
		public DataModuleContext dataModule() {
			return getRuleContext(DataModuleContext.class,0);
		}
		public ExpressModuleContext expressModule() {
			return getRuleContext(ExpressModuleContext.class,0);
		}
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
	}

	public final ModuleContext module() throws RecognitionException {
		ModuleContext _localctx = new ModuleContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_module);
		try {
			setState(28);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				dataModule();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(27);
				expressModule();
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
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public DataModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataModule; }
	}

	public final DataModuleContext dataModule() throws RecognitionException {
		DataModuleContext _localctx = new DataModuleContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_dataModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			match(T__3);
			setState(31);
			match(IDENTIFIER);
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(32);
				match(T__4);
				setState(33);
				match(IDENTIFIER);
				}
				}
				setState(38);
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
	public static class ExpressModuleContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public ExpressModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressModule; }
	}

	public final ExpressModuleContext expressModule() throws RecognitionException {
		ExpressModuleContext _localctx = new ExpressModuleContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_expressModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(T__5);
			setState(40);
			match(IDENTIFIER);
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(41);
				match(T__4);
				setState(42);
				match(IDENTIFIER);
				}
				}
				setState(47);
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

	public static final String _serializedATN =
		"\u0004\u0001\b1\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0004\u0000\f\b\u0000\u000b\u0000\f\u0000\r\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0005\u0001\u0014\b\u0001\n\u0001\f\u0001\u0017"+
		"\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0003\u0002\u001d"+
		"\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003#"+
		"\b\u0003\n\u0003\f\u0003&\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0005\u0004,\b\u0004\n\u0004\f\u0004/\t\u0004\u0001\u0004"+
		"\u0000\u0000\u0005\u0000\u0002\u0004\u0006\b\u0000\u00000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0002\u000f\u0001\u0000\u0000\u0000\u0004\u001c"+
		"\u0001\u0000\u0000\u0000\u0006\u001e\u0001\u0000\u0000\u0000\b\'\u0001"+
		"\u0000\u0000\u0000\n\f\u0003\u0002\u0001\u0000\u000b\n\u0001\u0000\u0000"+
		"\u0000\f\r\u0001\u0000\u0000\u0000\r\u000b\u0001\u0000\u0000\u0000\r\u000e"+
		"\u0001\u0000\u0000\u0000\u000e\u0001\u0001\u0000\u0000\u0000\u000f\u0010"+
		"\u0005\u0001\u0000\u0000\u0010\u0011\u0005\u0007\u0000\u0000\u0011\u0015"+
		"\u0005\u0002\u0000\u0000\u0012\u0014\u0003\u0004\u0002\u0000\u0013\u0012"+
		"\u0001\u0000\u0000\u0000\u0014\u0017\u0001\u0000\u0000\u0000\u0015\u0013"+
		"\u0001\u0000\u0000\u0000\u0015\u0016\u0001\u0000\u0000\u0000\u0016\u0018"+
		"\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000\u0000\u0000\u0018\u0019"+
		"\u0005\u0003\u0000\u0000\u0019\u0003\u0001\u0000\u0000\u0000\u001a\u001d"+
		"\u0003\u0006\u0003\u0000\u001b\u001d\u0003\b\u0004\u0000\u001c\u001a\u0001"+
		"\u0000\u0000\u0000\u001c\u001b\u0001\u0000\u0000\u0000\u001d\u0005\u0001"+
		"\u0000\u0000\u0000\u001e\u001f\u0005\u0004\u0000\u0000\u001f$\u0005\u0007"+
		"\u0000\u0000 !\u0005\u0005\u0000\u0000!#\u0005\u0007\u0000\u0000\" \u0001"+
		"\u0000\u0000\u0000#&\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000\u0000"+
		"$%\u0001\u0000\u0000\u0000%\u0007\u0001\u0000\u0000\u0000&$\u0001\u0000"+
		"\u0000\u0000\'(\u0005\u0006\u0000\u0000(-\u0005\u0007\u0000\u0000)*\u0005"+
		"\u0005\u0000\u0000*,\u0005\u0007\u0000\u0000+)\u0001\u0000\u0000\u0000"+
		",/\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000"+
		"\u0000.\t\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000\u0005\r\u0015"+
		"\u001c$-";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}