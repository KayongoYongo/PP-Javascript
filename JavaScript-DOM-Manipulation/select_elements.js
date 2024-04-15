// Selecting element using ID
const title = document.getElementById('main-heading');

console.log(title);

// Selecting element using class name
const listItems = document.getElementsByClassName('list-items');

console.log(listItems);

// Selecting elements using a tag name
const listTag = document.getElementsByTagName('li');

console.log(listTag);

// querySelector()
// The advantage of this method is that it accepts all CSS styles
// It selects the first instance of a method
const container = document.querySelector('div');

console.log(container);

// querySelectorAll()
const listItemsList = document.querySelectorAll('li');

console.log(listItemsList);