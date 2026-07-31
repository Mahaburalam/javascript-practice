let numOne = 10;
let numTwo = 20;

function addNumbers() { // this function it self a closures bcz it use parents property
    let sum = numOne + numTwo;
    return sum;
}

console.log(`The sum of ${numOne} and ${numTwo} is: ${addNumbers()}`); // Output: The sum of 10 and 20 is: 30

// another way to solve this problem
function addNumbersWithParams(a, b) {
    let sum = a + b;
    return sum;
}

console.log(addNumbersWithParams(3, 6))
