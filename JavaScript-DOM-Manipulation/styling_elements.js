// Style the title of the form
const title = document.querySelector('#main-heading');

title.style.color = 'red';

console.log(title);

// Style the font
const listItems = document.querySelectorAll('.list-items');

for( i = 0 ; i < listItems.length ; i++ ) {
    listItems[i].style.fontSize = '5rem';
}

console.log(listItems);