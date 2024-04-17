// Event Listener

// element.addEventListener("click", function)

const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
    alert('I hate JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);

// Mouseover event
const newBackgroundColor = document.querySelector('.box-3');

function changeBackgroundColor () {
    newBackgroundColor.style.backgroundColor = 'blue'
}

newBackgroundColor.addEventListener("mouseover", changeBackgroundColor);