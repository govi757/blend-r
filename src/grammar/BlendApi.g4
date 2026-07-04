grammar BlendApi;
program: moduleDefinition sectionDefinition*;
sectionDefinition: 'section' CAPITAL_IDENTIFIER '{' apiDefinition* '}';
moduleDefinition: 'module' CAPITAL_IDENTIFIER;
apiDefinition: 'api' IDENTIFIER '(' HTTP_METHOD ')' URL_IDENTIFIER '{' authenticated? inputDefinition? outputDefinition? '}';

authenticated: 'authenticated';
store: 'store';

inputDefinition: 'input(' field (',' field)* ')' store?;
outputDefinition: 'output(' field (',' field)* ')' | 'output(' directOutputDefenition ')';
directOutputDefenition: type;

field: (IDENTIFIER|CAPITAL_IDENTIFIER) ':' type;
type: primitiveType
    | primitiveType '[]'
    | primitiveType '?'
    | CAPITAL_IDENTIFIER '->' CAPITAL_IDENTIFIER
    | CAPITAL_IDENTIFIER '->' CAPITAL_IDENTIFIER '?'
    | CAPITAL_IDENTIFIER '->' CAPITAL_IDENTIFIER '[]';

primitiveType: 'string' | 'number' | 'boolean' | 'any' | 'object';

HTTP_METHOD: 'GET' | 'POST'|'DELETE' | 'PUT';
IDENTIFIER: [a-z_][a-zA-Z0-9_]*;
CAPITAL_IDENTIFIER: [A-Z][a-zA-Z0-9_]*;
URL_IDENTIFIER: '"' [a-zA-Z0-9_/\-]+ '"';


WS: [ \t\r\n]+ -> skip;