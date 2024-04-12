// Basic function
function printMe () {
    console.log("Hello");
}
// If we print the function it returns a reference to the function object
printMe()

// Basic function with a parameter
function takeParam(param) {
    console.log(param);
}
// If I try to print it without quotes, it reads the value as a variable by default
// The following line will return an error
// takeParam(cat)
takeParam('World');

// A function with expressions
const count = 100;

const logMessage = function () {
    console.log("Hello world Again!");
}

logMessage()