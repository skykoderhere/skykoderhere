document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. Custom Cursor & Ambient Glow (Desktop Only)
       ========================================================================== */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    const ambientGlow = document.getElementById('ambient-glow');
    
    // Check if device supports hover (desktop)
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (isDesktop) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let glowX = mouseX;
        let glowY = mouseY;

        // Mouse move tracking
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instant dot movement
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Smooth follow animation for Ring and Glow using requestAnimationFrame
        function renderCursor() {
            // Lerp (Linear Interpolation) for smooth trailing
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            glowX += (mouseX - glowX) * 0.05; // Glow follows slower
            glowY += (mouseY - glowY) * 0.05;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            
            ambientGlow.style.left = `${glowX}px`;
            ambientGlow.style.top = `${glowY}px`;

            requestAnimationFrame(renderCursor);
        }
        renderCursor();

        // Hover states for interactive elements
        const interactables = document.querySelectorAll('a, button, .bento-card, .project-row');
        
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '60px';
                cursorRing.style.height = '60px';
                cursorRing.style.backgroundColor = 'rgba(255,255,255,0.05)';
                cursorRing.style.borderColor = 'rgba(255,255,255,0.5)';
                ambientGlow.style.width = '800px'; // Expand glow slightly
                ambientGlow.style.height = '800px';
            });
            
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.backgroundColor = 'transparent';
                cursorRing.style.borderColor = 'rgba(255,255,255,0.2)';
                ambientGlow.style.width = '600px';
                ambientGlow.style.height = '600px';
            });
        });

        /* ==========================================================================
           2. Magnetic Buttons Effect
           ========================================================================== */
        const magnetics = document.querySelectorAll('.magnetic');
        
        magnetics.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const position = btn.getBoundingClientRect();
                const x = e.pageX - position.left - position.width / 2;
                const y = e.pageY - position.top - position.height / 2;
                
                const strength = btn.dataset.strength || 20; // Default strength
                
                btn.style.transform = `translate(${x / position.width * strength}px, ${y / position.height * strength}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
                // Optional: add a spring back transition dynamically
                btn.style.transition = 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)';
                setTimeout(() => {
                    btn.style.transition = 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.3s';
                }, 500);
            });
        });
    }

    /* ==========================================================================
       3. Scroll Reveal Animation (Intersection Observer)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-down');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only reveal once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
    
    // Trigger navbar immediately
    setTimeout(() => {
        document.querySelector('.navbar').classList.add('active');
    }, 100);

});
