document.addEventListener('DOMContentLoaded', () => {

    // Mobile navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            navToggle.classList.toggle('open');
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formStatus = document.getElementById('form-status');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.textContent = 'Envoi en cours...';
            
            // Simulate a network request
            setTimeout(() => {
                formStatus.textContent = 'Votre message a bien été envoyé ! Nous vous répondrons bientôt.';
                formStatus.className = 'success';
                contactForm.reset();

                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                }, 5000);
            }, 1000);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        const newsletterStatus = document.getElementById('newsletter-status');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (!emailInput.value) {
                newsletterStatus.textContent = 'Veuillez entrer une adresse email.';
                newsletterStatus.className = 'error';
                return;
            }

            newsletterStatus.textContent = 'Inscription en cours...';
            newsletterStatus.className = '';

             // Simulate a network request
             setTimeout(() => {
                newsletterStatus.textContent = 'Merci pour votre inscription !';
                newsletterStatus.className = 'success';
                newsletterForm.reset();

                setTimeout(() => {
                    newsletterStatus.textContent = '';
                    newsletterStatus.className = '';
                }, 5000);
            }, 1000);
        });
    }
    
    // Intersection Observer for animations
    const animatedSections = document.querySelectorAll('.animated-section');
    
    if (animatedSections.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.15
        });

        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});