import parse from "./parser.js"
import analyze from "./analyzer.js"
/******
 * Allows us to compile our file, but allows us to check in on the different steps involved in compilation 
 * 
 * 
 *****/

// [parser] -> [analyzer] -> [optimizer] -> [generator]
export default function compile(sourceCode, outputType) {
  if (outputType === 'parsed') {
    // will return the match object
    return parse(sourceCode)
  } else if (outputType === 'analyzed') { 
    return analyze(parse(sourceCode))
  } else if (outputType === 'optimized') {
    return optimize(analyze(parse(sourceCode)))
  } else if (outputType === 'js') {
    return generate(optimize(analyze(parse(sourceCode))))
  } else {
    throw new Error(`Unknown output type: ${outputType}`)
  }
  // Alternate sequence we could call, if we simply wanted to compile the code
  // const match = parse(sourceCode);
  // const ir = analyze(match);
  // const optimized = optimize(ir);
  // return generate(optimized);
}