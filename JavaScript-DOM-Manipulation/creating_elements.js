// Select the list
const ul = document.querySelector('ul');

// Creating elements
const li = document.createElement('li');

// Adding elements
ul.append(li);

// Modifying the text
const firstListItem = document.querySelector('.list-items');

li.innerText = 'X-Men';

// Modifying attributes and classes
li.setAttribute('id', 'main-heading');

// Remove attribute
li.removeAttribute('id');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));

// Remove elements
li.remove();