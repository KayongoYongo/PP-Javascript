// Traverse the DOM

// Parent node traversal
let ul = document.querySelector('ul');

// To access the parent node:
console.log(ul.parentNode);
console.log(ul.parentElement);

// To access the grand-parent node
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

// Child Node Traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

// Styling a node
// This will not work since we are selecting a text node, not an element
// ul.firstChild.style.backgroundColor = 'blue';

ul.childNodes[1].style.backgroundColor = 'red';


// Sibling node traversal
const div =  document.querySelector('div'); 

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);