function outer(x) {
    function inner (y) {
        return x + y;
    }
    return inner;
}

const outerReturn = outer(10);
console.log(outerReturn)

/* The sum is possible since the variable 10 
is still accessible even after the outer 
function has finished executing */
console.log(outerReturn(2))

console.log(outerReturn(5))