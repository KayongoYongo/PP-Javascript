let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

// Function to remove active class from all navbar links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.classList.remove('hideOnMobile'); // Remove hideOnMobile class as well
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
            
            // Select all navigation links that match the section id from both lists
            let matchingLinks = document.querySelectorAll('nav a[href="#' + sec.id + '"]');
            matchingLinks.forEach(link => {
                link.classList.add('active');
                link.classList.add('hideOnMobile'); // Add hideOnMobile class
            });
        };
    });
};
