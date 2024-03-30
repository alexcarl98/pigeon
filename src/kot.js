import * as fs from 'fs/promises';
import compile from "./compiler.js"

const help = `Kot Compiler

Syntax: node kot.js <filename> <outputType> 
  filename: the path to the file to compile
  outputType: the type of output to generate. One of:
    parsed: to say whether the syntax is correct
    analyzed: to show the internal program representation
    optimized: to show the optimized program
    js: to generate JavaScript code
`
async function compileFromFile(filename, outputType) {
  try {
    const buffer = await fs.readFile(filename)
    const compiled = compile(buffer.toString(), outputType)
    // uncommenting will show the CST
    // console.log(compiled)
    console.log(outputType === 'parsed' ? 'Syntax is correct' : compiled)
  } catch(e) {
    console.error(`\u001b[31m${e.message}\u001b[39m`)
    process.exitCode = 1
  }
}

if (process.argv.length !== 4) {
  console.log(help)
} else {
  compileFromFile(process.argv[2], process.argv[3])
}
