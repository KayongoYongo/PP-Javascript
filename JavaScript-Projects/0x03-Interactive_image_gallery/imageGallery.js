// Get all small images
const smallImages = document.querySelectorAll('.product-small-image img');

// Get the large image
const largeImage = document.getElementById('large-img');

console.log(smallImages)
console.log(largeImage)

// Loop through each small image and add a click event listener
smallImages.forEach(smallImg => {
    smallImg.addEventListener('click', function() {
        // Update the src attribute of the large image with the clicked small image src
        largeImage.src = this.src;
    });
});