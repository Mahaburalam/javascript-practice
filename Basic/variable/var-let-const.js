// var - function scoped
// let - block scoped
// const - block scoped and cannot be reassigned

if(true) {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";

    console.log(varVariable); // Output: I am a var variable
    console.log(letVariable); // Output: I am a let variable
    console.log(constVariable); // Output: I am a const variable
}

// console.log(varVariable); // Output: I am a var variable
// console.log(letVariable); // ReferenceError: letVariable is not defined
// console.log(constVariable); // ReferenceError: constVariable is not defined