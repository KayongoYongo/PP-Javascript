function add(a,  b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

if (process.argv.length > 5) {
    console.log('Please provide at most 3 arguments.');
    process.exit(1); // Exit the program with a non-zero exit code indicating failure
  }

// Extract and display the arguments
const args = process.argv.slice(2);

if (args[1] === '+'){
    console.log(add(parseInt(args[0]), parseInt(args[2])));
} else if (args[1] === '-'){
    console.log(sub(parseInt(args[0]), parseInt(args[2])));
} else if (args[1] === '*'){
    console.log(mul(parseInt(args[0]), parseInt(args[2])));
} else {
    console.log(div(parseInt(args[0]), parseInt(args[2])));
}