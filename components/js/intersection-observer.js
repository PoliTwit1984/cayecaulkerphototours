export const initIntersectionObserver = () => {
    // Create an observer instance with options
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When an element enters the viewport
            if (entry.isIntersecting) {
                // Add a slight delay between elements for a staggered effect
                const delay = Array.from(entry.target.parentElement.children)
                    .indexOf(entry.target) * 150;
                
                // Apply the delay and add the animation class
                entry.target.style.animationDelay = `${delay}ms`;
                entry.target.classList.add('fade-in');
                
                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Start animation when element is 20% visible
        threshold: 0.2,
        // Start animation slightly before element comes into view
        rootMargin: '50px'
    });

    // Observe all stats and testimonial cards
    document.querySelectorAll('.stat-item, .testimonial-card').forEach(element => {
        // Remove any existing animation class
        element.classList.remove('fade-in');
        // Start observing the element
        observer.observe(element);
    });
};
