import * as fs from 'node:fs';
import * as ohm from 'ohm-js';

const grammar = ohm.grammar(fs.readFileSync('src/pigeon.ohm'));

export default function parse(sourceCode) {
  // have grammar to match against sourceCode 
  const match = grammar.match(sourceCode);
  if (!match.succeeded()) throw new Error(match.message);
  return match;
} 