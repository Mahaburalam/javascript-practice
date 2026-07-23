// var can be redeclared, reassigned, and has function scope
var x = 10;
console.log(x); // Output: 10
var x = "Hello";
console.log(x); // Output: Hello


// let can be reassigned but not redeclared, and has block scope
let y = 20;
console.log(y);
// let y = "World"; // SyntaxError: Identifier 'y' has already been declared
// console.log(y); // Output: World
y = "World"; // No error, let variables can be reassigned
console.log(y); // Output: World

// const cannot be redeclared or reassigned, and has block scope
const z = 30;
console.log(z); // Output: 30
// const z = "New Value"; // SyntaxError: Identifier 'z' has already been declared
// console.log(z); // Output: New Value
// z = "New Value"; // TypeError: Assignment to constant variable.