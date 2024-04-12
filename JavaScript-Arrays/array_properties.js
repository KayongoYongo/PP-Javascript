let fruits = [
    "apple",
    "banana",
    "pear",
    "orange",
    "grapes"
];

// to find the length of an array, we use the length method
console.log(fruits.length);

// to find the index of an element, we use the function, index.Of
// Syntax: inxed.Of('Element we are searching for')
console.log(fruits.indexOf("pear"));

// If we try to print an eleemnt which does not exist, we will get -1
console.log(fruits.indexOf("milk"));