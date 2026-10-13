/**
 * Scrollspy Engine
 * Synchronizes active link indicators based on viewport scroll position
 */

export function initScrollspy(): void {
  const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-links .nav-item');
  const mobileLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.mobile-nav-link');
  const trackSections: NodeListOf<HTMLElement> = document.querySelectorAll('.site-section');

  function syncActiveSection(): void {
    const scrollPos = window.scrollY + 120;
    let activeId = '';

    trackSections.forEach((section: HTMLElement) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = section.getAttribute('id') || '';
      }
    });

    if (activeId) {
      navLinks.forEach((link: HTMLAnchorElement) => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      mobileLinks.forEach((link: HTMLAnchorElement) => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', syncActiveSection, { passive: true });
  syncActiveSection();
}
