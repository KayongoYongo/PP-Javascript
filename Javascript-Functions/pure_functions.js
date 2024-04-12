// This function is a pure function
function sayGreeting(name) {
    console.log(`Hello ${name}`);
}

sayGreeting('Samuel');

// An example of an impure function
let greeting = 'ola'

/* Since the output is outside the control of the
function, the sendGreeting function can be classified
 as an impure function */
function sendGreeting(name) {
    console.log(`${greeting} ${name}`);
} 

sendGreeting('Kayongo');