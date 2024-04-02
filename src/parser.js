import * as fs from 'node:fs';
import * as ohm from 'ohm-js';
/**
 * This parser will receive a grammar, and produces a match object from Ohm dependent on the source code
 * 
 */

const grammar = ohm.grammar(fs.readFileSync('src/kot.ohm'));

// Produce a CST (a match object in Ohm) 
export default function parse(sourceCode) {
  // have grammar to match against sourceCode 
  const match = grammar.match(sourceCode);
  if (!match.succeeded()) throw new Error(match.message);
  return match;
}