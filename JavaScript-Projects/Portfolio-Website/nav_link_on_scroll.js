let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

// Function to remove active class from all navbar links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Create an active nav link
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            console.log('Active Section:', id);
            removeActiveClass(); // Remove active class from all navbar links
            document.querySelector('nav a[href="#' + sec.id + '"]').classList.add('active');
        };
    });
};