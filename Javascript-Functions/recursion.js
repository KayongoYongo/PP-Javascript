/* The function below will run an infinite amount of times until the
call stack is exhausted */
function foo() {
    console.log('foo');
    foo();
}

// foo()

function fetchWater(count) {
    if(count === 0) {
        console.log('No more water left to fetch');
        return;
    }

    console.log('Fetching water...', count);
    fetchWater(count - 1)
}

fetchWater(10);