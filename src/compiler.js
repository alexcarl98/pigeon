import parse from "./parser.js"
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
  // const match = parse(sourceCode);
  // const ir = analyze(match);
  // const optimized = optimize(ir);
  // return generate(optimized);

}