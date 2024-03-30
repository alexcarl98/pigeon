// 
import assert from "node:assert/strict";
import parse from "../src/parser.js";

// create an array of syntax checks (progrmas that should work)
const syntaxChecks = [
  ["the simplest program", `break;`],
  ["hello world", `print("Hello, World!");`],
  ["numbers", `print(8*8.3+8.2e-10 /3e5);`],
  ["variables", `let x = 0;`],
  ["multiple statements", `print(1);\nbreak;\nx=5;`],
  ["variable declarations", `let e= 99*1;\nlet z= 5.2;`],
  ["function with no params", `fun zero() = 0;`],
  ["function with one params", `fun next(x: int) = x + 1;`],
  ["array type for param", "fun f(x: boolean[]) = x[0];"], 
  ["assignments", "abc=9*3; a=1;"],
  ["complex var assignment", "c[3][2] = 100;"], 
  ["while with empty block", "while true {}"],
  ["while with one statement block", "while true { let x = 1; }"],
  ["conditional", "print(x?y:z?y:p);"],
  ["ors can be chained", "print(1 || 2 || 3 || 4 || 5);"],
  ["ands can be chained", "print (1 && 2 && 3 && 4 && 5);"],
  ["relational operators", "print(1<2||1<=2||1==2||1!=2||1>=2||1>2);"]
]

// create an array of syntax error (progrmas that should fail)
const syntaxErrors = [
  ["non-letter in an identifier", `let 8x = 0;`, /Line 1, col 5:/],
  ["missing semicolon", `break`, /Line 1, col 6:/],
  ["a statement starting with expression", "x *5;", /Line 1, col 3:/], 
  ["an illegal statement on line 2", "print (5);\nx * 5;", /Line 2, col 3:/], 
  ["a statement starting with a )", "print (5);\n)", /Line 2, col 1:/], 
  ["negation before exponentiation", "print(-2**2);", /Line 1, col 9:/], 
  ["while without braces", "while true\nprint(1);", /Line 2, col 1/], 
  ["while as identifier", "let while = 3;", /Line 1, col 5:/], 
  ["unbalanced brackets", "fun f(): int[;", /Line 1, col 8:/],
  
]

describe("The parser", () => {
  for (const [scenario, source] of syntaxChecks) {
    it(`properly specifies ${scenario}`, () => {
      assert.ok(parse(source).succeeded())
    })
  }

  for (const [scenario, source, errorMessagePattern] of syntaxErrors) {
    it(`doesn't permit ${scenario}`, () => {
      assert.throws(() => parse(source), errorMessagePattern);
    })
  }
})