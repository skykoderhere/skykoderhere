/**
 * Hero Component (TypeScript)
 * Renders the 100dvh full-viewport hero section with status indicator and actions
 */

import { PORTFOLIO_DATA } from '../../data/portfolioData.js';

export function renderHero(): HTMLElement {
  const hero = document.createElement('section');
  hero.id = 'hero';
  hero.className = 'hero';

  const { tagline, headingMain, headingSub, bio } = PORTFOLIO_DATA.profile;

  hero.innerHTML = `
    <div class="hero-content">
        <div class="availability hero-elem">
            <div class="status-dot"></div>
            <span class="mono-text">${tagline}</span>
        </div>
        <h1 class="hero-title hero-elem">
            ${headingMain.replace('clean code', '<span class="text-glow">clean code</span>')}<br>
            ${headingSub}
        </h1>
        <p class="hero-subtitle hero-elem">
            ${bio}
        </p>
        <div class="hero-actions hero-elem">
            <a href="#projects" class="btn btn-primary magnetic" data-strength="25">
                explore projects <i class="fas fa-arrow-down"></i>
            </a>
            <a href="#contact" class="btn btn-secondary magnetic" data-strength="25">
                <i class="fas fa-envelope"></i> get in touch
            </a>
        </div>
    </div>
  `;

  return hero;
}
