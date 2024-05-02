// Declare variables
let menuBar = document.getElementById('showbar');
let hideBar = document.getElementById('hidebar');
let sideBar = document.querySelector('.sidebar');

console.log(menuBar);
console.log(sideBar);
console.log(hideBar);

function showSideBar() {
    sideBar.style.display = 'flex';
};

function hideSideBar() {
    sideBar.style.display = 'none';
};

menuBar.addEventListener('click', showSideBar);
hideBar.addEventListener('click', hideSideBar);