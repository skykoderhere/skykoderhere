document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       1. Custom Cursor & Ambient Glow (Desktop / Fine-pointer only)
       ========================================================================== */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    const ambientGlow = document.getElementById('ambient-glow');
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (isDesktop && cursorDot && cursorRing && ambientGlow) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let glowX = mouseX;
        let glowY = mouseY;
        let isCursorActive = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isCursorActive) {
                isCursorActive = true;
                cursorDot.classList.add('cursor-visible');
                cursorRing.classList.add('cursor-visible');
            }

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        document.addEventListener('mouseleave', () => {
            isCursorActive = false;
            cursorDot.classList.remove('cursor-visible');
            cursorRing.classList.remove('cursor-visible');
        });

        // Smooth Lerp animation loop
        function renderAmbientCursor() {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;

            glowX += (mouseX - glowX) * 0.05;
            glowY += (mouseY - glowY) * 0.05;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            ambientGlow.style.left = `${glowX}px`;
            ambientGlow.style.top = `${glowY}px`;

            requestAnimationFrame(renderAmbientCursor);
        }
        renderAmbientCursor();

        // Interactive hover expansions
        const hoverTargets = document.querySelectorAll('a, button, .bento-card, .project-row, .tag, .interest-item');
        hoverTargets.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '56px';
                cursorRing.style.height = '56px';
                cursorRing.style.backgroundColor = 'rgba(0, 183, 255, 0.08)';
                cursorRing.style.borderColor = 'rgba(0, 183, 255, 0.6)';
                ambientGlow.style.width = '750px';
                ambientGlow.style.height = '750px';
            });

            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.backgroundColor = 'transparent';
                cursorRing.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                ambientGlow.style.width = '600px';
                ambientGlow.style.height = '600px';
            });
        });

        /* ==========================================================================
           2. Magnetic Elements (Buttons & Icons)
           ========================================================================== */
        const magnetics = document.querySelectorAll('.magnetic');
        magnetics.forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const strength = parseFloat(btn.dataset.strength) || 25;

                btn.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
                btn.style.transition = 'transform 0.45s cubic-bezier(0.19, 1, 0.22, 1)';
                setTimeout(() => {
                    btn.style.transition = '';
                }, 450);
            });
        });
    }

    /* ==========================================================================
       3. Mobile Navigation Drawer Toggle
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        });

        // Close on link click
        document.querySelectorAll('.mobile-nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                mobileMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            });
        });
    }

    /* ==========================================================================
       4. Copy Handle to Clipboard with Toast Notification
       ========================================================================== */
    const copyBtn = document.getElementById('copy-handle-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    let toastTimeout = null;

    function showToast(message) {
        if (!toast) return;
        if (toastMessage) toastMessage.textContent = message;
        toast.classList.add('show');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const handle = copyBtn.dataset.handle || 'skykoderhere';
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(handle);
                } else {
                    const tempInput = document.createElement('input');
                    tempInput.value = handle;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }
                showToast(`Copied @${handle} to clipboard! 🐾`);
            } catch (err) {
                showToast(`Handle: @${handle}`);
            }
        });
    }

    /* ==========================================================================
       5. Scroll Reveal Animations (Intersection Observer)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-down');
    const revealOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach((el) => {
        revealObserver.observe(el);
    });

    // Animate navbar immediately
    const navbar = document.getElementById('navbar');
    if (navbar) {
        setTimeout(() => {
            navbar.classList.add('active');
        }, 80);
    }
});
