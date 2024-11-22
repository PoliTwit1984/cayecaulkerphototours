import { initIntersectionObserver } from '../components/js/intersection-observer.js';
import { initSmoothScroll, initScrollToTop } from '../components/js/scroll-handling.js';
import { initFormHandling } from '../components/js/form-handling.js';
import { initParallax } from '../components/js/parallax.js';

// Performance optimization for background image
const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
};

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initIntersectionObserver();
    initSmoothScroll();
    initScrollToTop();
    initFormHandling();
    initParallax();
    preloadImage('/images/caye-caulker-belize-beach-ocean.webp');
});
