/******** 
 * This file contains the core functions that are used to create our program representations
 ********/
export function program(statements){
  // our programs in kot are a list of statements
  return { kind: "Program", statements }
}

export function variableDeclaration(variable, initializer){
  // our variable declarations have a variable and an initializer
  return { kind: "VariableDeclaration", variable, initializer }
}

export function variable(name, type){
  // variables in kot have a name & type
  return { kind: "Variable", name, type }
}

export function functionDeclaration(fun, body){
  return { kind: "FunctionDeclaration", fun, body}
}

export function fun(name, params, type){
  return { kind: "Function", name, params, type }
}

export const boolType = { kind: "BoolType", description: "bool" }
export const intType = { kind: "IntType", description: "int" }
export const floatType = { kind: "FloatType", description: "float" }
export const stringType = { kind: "StringType", description: "string" }

export function arrayType(baseType) {
  return { kind: "ArrayType", baseType }
}
export const breakStatement = { kind: "BreakStatement" }

export function whileStatement(test, body){
  return { kind: "WhileStatement", test, body }
}

export function printStatement(expression){
  return { kind: "PrintStatement", expression }
}

export function assignment(variable, expression){
  return { kind: "Assignment", variable, expression }
}

// complex expressions: conditional, or, and, relational operators

export function conditional(test, consequent, alternate, type){
  return { kind: "Conditional", test, consequent, alternate, type }
}

export function binary(op, left, right, type){
  return { kind: "BinaryExpression", op, left, right, type }
}

export function unary(op, operand, type){
  return { kind: "UnaryExpression", op, operand, type }
}

export function call(callee, args, type){
  return { kind: "Call", callee, args, type }
}

export function subscript(array, index){
  return { kind: "Subscript", array, index, type: array.type.baseType }
}