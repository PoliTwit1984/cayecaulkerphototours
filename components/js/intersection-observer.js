export const initIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all feature cards and fade-in elements
    document.querySelectorAll('.feature-card, .fade-in').forEach(element => {
        observer.observe(element);
    });
};
