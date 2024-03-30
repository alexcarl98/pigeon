// 
import assert from "node:assert/strict";
import parse from "../src/parser.js";

const syntaxChecks = [
  ["printing hello", `print("hello");`],
  ["numbers", `print(8*8.3+8.2e-10 /3e5);`],
];



const syntaxErrors = [];

describe("The parser", () => {
  for (const [scenario, source] of syntaxChecks) {
    it(`accepts ${scenario}`, () => {
      assert.ok(parse(source));
    });
  }

  it('accepts Hello World', () => {
    assert.ok(parse(`print("Hello, World!");`));
  });

  it('rejects unterminated string', () => {
    assert.throws(() => parse(`print("Hello, World!);`));
  });

  it('rejects nonsense', () => {
    assert.throws(() => parse("()(*&^%$^&*()"));
  });
});