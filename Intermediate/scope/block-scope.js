// Demonstrating block scope in JavaScript
function outerScope(){
    var outerVar = "I am from the outer scope"; 
    console.log(`Outer variable: ${outerVar}`); // Output: I am from the outer scope

    // inner function demonstrating block scope
    function innerScope() {
        var innerVar = "I am from the inner scope";
        console.log(`Inner variable: ${innerVar}`); // Output: I am from the inner scope
        console.log(`Accessing outer variable inside inner function: ${outerVar}\n`); // Output: I am from the outer scope
    }

    innerScope();
    console.log(`Trying to access inner variable outside inner function: ${innerVar}`); // Output: ReferenceError: innerVar is not defined
}

outerScope();