/**
 * skye | Minimal Devfolio
 * Main TypeScript Entry Point
 * Rebuilt completely in TypeScript - mounts styling, components, and event engines
 */

import { injectStyles } from './ui/styles.js';
import { mountApplication } from './ui/layout.js';
import { initHaptics } from './haptics.js';
import { initCustomCursor } from './cursor.js';
import { initMagneticElements } from './magnetic.js';
import { initMobileNav } from './navigation.js';
import { initTooltips } from './tooltips.js';
import { initScrollspy } from './scrollspy.js';
import { initTabs } from './tabs.js';
import { initAnimations } from './animations.js';

export function initApp(): void {
  // 1. Inject Minimalist AMOLED Dark Styles from TypeScript
  injectStyles();

  // 2. Mount full DOM architecture from TypeScript components
  mountApplication('app');

  // 3. Ensure landing page starts strictly at the hero top
  if (!window.location.hash && window.scrollY > 10) {
    window.scrollTo(0, 0);
  }

  // 4. Initialize interaction engines
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
