// Function for entrance animation
document.addEventListener("DOMContentLoaded", function() { 
    // Two animations (Fade-in and Slide-in)
    const fadeElements = document.querySelectorAll('.fade-in, .slide-in');

    fadeElements.forEach((element) => {
        element.style.opacity = '0'; 
        setTimeout(() => {
            element.style.opacity = '1'; 
        }, 10); 
    });
});

// Function to toggle menu in smartphone
function toggleMenu() { 
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open'); 
}
