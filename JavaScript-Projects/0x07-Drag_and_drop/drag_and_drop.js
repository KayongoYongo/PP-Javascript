// Select all elements with the class 'list' and store them in the 'lists' variable
let lists = document.getElementsByClassName('list');

// Select the element with the id 'right' and store it in the 'rightBox' variable
let rightBox = document.getElementById('right');

// Select the element with the id 'left' and store it in the 'leftBox' variable
let leftBox = document.getElementById('left');

// A function that will drag the elements from the left side or the right side
for(list of lists){
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        // Add drag event to the right box
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        // Add drop event to the right box
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected=null;
        });
        // Add drag event to the left box
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        // Add drop event to the left box
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected=null;
        });
    });
};