function foo() {
    console.log("Inside foo");
    bar(); // Call bar within foo
}

foo();

function bar() {
    console.log("Inside bar");
    // Some code that relies on foo
}