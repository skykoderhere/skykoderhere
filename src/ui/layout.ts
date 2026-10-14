/**
 * App Layout Assembler (TypeScript)
 * Mounts ambient effects, cursor, navbar, and core page sections into the DOM
 */

import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderEcosystem } from './components/ecosystem.js';
import { renderProjects } from './components/projects.js';
import { renderContact } from './components/contact.js';

export function mountApplication(rootId: string = 'app'): void {
  const root = document.getElementById(rootId) || document.body;
  root.innerHTML = '';

  // 1. Ambient Background Effects
  const noise = document.createElement('div');
  noise.className = 'noise';
  noise.setAttribute('aria-hidden', 'true');
  root.appendChild(noise);

  const ambientGlow = document.createElement('div');
  ambientGlow.className = 'ambient-glow';
  ambientGlow.id = 'ambient-glow';
  ambientGlow.setAttribute('aria-hidden', 'true');
  root.appendChild(ambientGlow);

  // 2. Custom Cursor (Desktop Only)
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorDot.setAttribute('aria-hidden', 'true');
  root.appendChild(cursorDot);

  const cursorRing = document.createElement('div');
  cursorRing.className = 'cursor-ring';
  cursorRing.setAttribute('aria-hidden', 'true');
  root.appendChild(cursorRing);

  // 3. Navigation Bar
  root.appendChild(renderNavbar());

  // 4. Main Content Container
  const main = document.createElement('main');

  // Hero Section
  main.appendChild(renderHero());

  // Content Container for 4 Sections
  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container';

  contentContainer.appendChild(renderAbout());
  contentContainer.appendChild(renderEcosystem());
  contentContainer.appendChild(renderProjects());
  contentContainer.appendChild(renderContact());

  main.appendChild(contentContainer);
  root.appendChild(main);
}
