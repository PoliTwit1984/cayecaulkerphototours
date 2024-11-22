export const initParallax = () => {
    let ticking = false;
    
    const handleParallax = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const hero = document.querySelector('.hero');
                const scrolled = window.pageYOffset;
                if (hero) {
                    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleParallax);
};
