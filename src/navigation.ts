/**
 * Mobile Navigation Drawer
 * Accessible drawer with Escape key support, outside click dismissal, and breakpoint syncing
 */

import { triggerHaptic } from './haptics.js';

export function initMobileNav(): void {
  const menuToggle = document.getElementById('menu-toggle') as HTMLElement | null;
  const mobileMenu = document.getElementById('mobile-menu') as HTMLElement | null;
  const navbar = document.getElementById('navbar') as HTMLElement | null;

  if (!menuToggle || !mobileMenu) {
    return;
  }

  const closeMenu = (): void => {
    menuToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };

  const openMenu = (): void => {
    menuToggle.classList.add('open');
    mobileMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  };

  menuToggle.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation();
    const isOpen = menuToggle.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
    triggerHaptic(12);
  });

  const mobileNavLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as Node | null;
    if (mobileMenu.classList.contains('open') && navbar && target && !navbar.contains(target)) {
      closeMenu();
    }
  });

  // Auto-close on resize exceeding mobile breakpoint
  window.addEventListener(
    'resize',
    () => {
      if (window.innerWidth > 820 && mobileMenu.classList.contains('open')) {
        closeMenu();
      }
    },
    { passive: true }
  );
}
