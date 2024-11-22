// Enhanced smooth scroll with offset handling
const smoothScroll = (target, offset = 0) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

export const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScroll(target, 60); // Adjust offset as needed
            }
        });
    });
};

export const initScrollToTop = () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    const toggleScrollTopButton = () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    };

    if (scrollTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', toggleScrollTopButton);
        
        // Smooth scroll to top when clicked
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initial check for button visibility
        toggleScrollTopButton();
    }
};
