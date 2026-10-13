/**
 * skye | Minimal Devfolio
 * Main TypeScript Entry Point
 */

import { initHaptics } from './haptics.js';
import { initCustomCursor } from './cursor.js';
import { initMagneticElements } from './magnetic.js';
import { initMobileNav } from './navigation.js';
import { initTooltips } from './tooltips.js';
import { initScrollspy } from './scrollspy.js';
import { initTabs } from './tabs.js';
import { initAnimations } from './animations.js';

export function initApp(): void {
  // Ensure landing page starts strictly at the hero top
  if (!window.location.hash && window.scrollY > 10) {
    window.scrollTo(0, 0);
  }

  initHaptics();
  initCustomCursor();
  initMagneticElements();
  initMobileNav();
  initTooltips();
  initScrollspy();
  initTabs();
  initAnimations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
