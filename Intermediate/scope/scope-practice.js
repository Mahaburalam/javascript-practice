// global scope
var globalVar = "I am a global variable";

// functional scope
function functionScope() {
    var localVar = "I am a local variable";
    console.log(`Local variable inside function: ${localVar}`); // Output: I am a local variable
    console.log(`Accessing global variable inside function: ${globalVar}\n`); // Output: I am a global variable
}

console.log(`Global variable: ${globalVar}`); // Output: I am a global variable
console.log(`Trying to access local variable outside function: ${localVar}`); // Output: ReferenceError: localVar is not defined



functionScope();