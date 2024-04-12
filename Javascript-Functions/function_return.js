function sum(a, b) {
    return a + b;
}

console.log('First sum')
console.log(sum(5, 6))

/* By setting the parameters to 0, we are providing a place value
just incase the parameter is not provided */
function calc(a=0, b=0) {
    return (2 * (a + b));
}

console.log('second sum')
console.log(calc(3,5))

/* If we do not pass a a parameter value for a function,
the second parameter will be set to undefined by default
*/
console.log('Third sum')
console.log(calc(3))
