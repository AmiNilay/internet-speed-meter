// This script handles the smooth fade-in animations on scroll.

document.addEventListener("DOMContentLoaded", () => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in view, add the 'show' class to trigger the animation
                entry.target.classList.add('show');
                // Optional: Unobserve the element after the animation has run once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Select all elements with the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Start observing each of the hidden elements
    hiddenElements.forEach(element => observer.observe(element));
});