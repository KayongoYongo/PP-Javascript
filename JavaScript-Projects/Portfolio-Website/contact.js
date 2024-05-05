document.addEventListener("DOMContentLoaded", function() {
    // Find the button element
    var contactButton = document.querySelector('.contact-me-btn');
    
    // Add click event listener to the button
    contactButton.addEventListener('click', function(event) {
      // Prevent default behavior of the button (e.g., submitting a form)
      event.preventDefault();
      
      // Find the contact section by its ID
      var contactSection = document.getElementById('contact');
      
      // Scroll to the contact section smoothly
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });