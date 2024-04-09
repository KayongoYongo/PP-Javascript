let a =  50;

function doSomething() {
    let x = 20;
    const y = 30;
    var z = 40;

    console.log(x,y,z);
    // 50 will be printed since it is accessible inside the function
    console.log(a)
}

doSomething();

// This line would not work since the variables are not accessible
// console.log(x,y,z);