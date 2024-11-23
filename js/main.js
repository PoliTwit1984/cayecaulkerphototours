import { initSmoothScroll, initScrollToTop } from '../components/js/scroll-handling.js';
import { initFormHandling } from '../components/js/form-handling.js';

// Performance optimization for background image
const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
};

// Initialize essential features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollToTop();
    initFormHandling();
    preloadImage('/images/caye-caulker-belize-beach-ocean.webp');
});
