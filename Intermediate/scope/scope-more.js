var x = 20

function outer() {
    // var x = 10; // This x is local to the outer function
    x = 10; // This modifies the global x since we are not using var, let, or const
    console.log(`Outer function x: ${x}`); // Output: Outer function x: 10

    function inner() {
        // var x = 5; // This x is local to the inner function
        x = 5; // This modifies the global x since we are not using var, let, or const
        console.log(`Inner function x: ${x}`); // Output: Inner function x: 5
    }

    inner();
    console.log(`Outer function x after inner call: ${x}`); // Output: Outer function x after inner call: 10
}

outer();
console.log(`Global x: ${x}`); // Output: Global x: 20