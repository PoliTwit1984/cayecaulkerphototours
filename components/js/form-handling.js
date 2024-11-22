export const initFormHandling = () => {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            try {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    form.reset();
                    alert('Thank you for your interest! We\'ll be in touch soon.');
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                alert('Oops! Something went wrong. Please try again later.');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
};
