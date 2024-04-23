// Declare variables
const inputBox = document.querySelector('#input-box');

const listContainer = document.querySelector('#list-container');

const btn = document.querySelector('button');


// Function to add elements
var addTaskFunction = function() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Add eventy listener on the button
btn.addEventListener('click', addTaskFunction);

// Function for checking and unchecking list items
var checkAndUncheck = function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
}

// Add event listener
listContainer.addEventListener('click', checkAndUncheck, false);

// Add a function to save the data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display the list whenever the browser is opened again
function showTasks (){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();