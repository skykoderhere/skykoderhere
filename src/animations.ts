/**
 * Animation Engine
 * Handles GSAP hero entrance timeline and IntersectionObserver section reveals
 */

export function initAnimations(): void {
  // 1. GSAP Hero Staggered Entrance
  if (typeof window !== 'undefined' && window.gsap) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const heroElements: NodeListOf<HTMLElement> = document.querySelectorAll('.hero-elem');

    if (prefersReduced) {
      window.gsap.set(heroElements, { opacity: 1, y: 0, filter: 'none' });
    } else {
      window.gsap.fromTo(
        heroElements,
        {
          opacity: 0,
          y: 24,
          filter: 'blur(6px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.12,
          clearProps: 'filter'
        }
      );
    }
  }

  // 2. IntersectionObserver Scroll Reveal
  const revealElements: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal-up');
  const revealOptions: IntersectionObserverInit = {
    threshold: 0.08,
    rootMargin: '0px 0px -25px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach((el: HTMLElement) => {
    revealObserver.observe(el);
  });
}
