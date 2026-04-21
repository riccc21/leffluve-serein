document.addEventListener('DOMContentLoaded', () => {
    // --- SCROLL ANIMATION (FADE-IN) ---
    const cards = document.querySelectorAll(".product-card");

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before the card is fully in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animating once for better performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach((card, index) => {
        // Set initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        
        /* This line adds a staggered delay based on the card's position (index).
           Card 1 pops up, then Card 2, then Card 3.
        */
        card.style.transition = `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${index * 0.15}s`;
        
        observer.observe(card);
    });
});