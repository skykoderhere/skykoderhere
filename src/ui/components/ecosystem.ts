/**
 * Pawjects Ecosystem Component (TypeScript)
 * Renders Section 02 Pawjects Organisation card with minimalist dark design and magnetic links
 */

import { PORTFOLIO_DATA } from '../../data/portfolioData.js';

export function renderEcosystem(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'ecosystem';
  section.className = 'site-section reveal-up';

  const { badge, name, role, description, hubUrl, orgUrl } = PORTFOLIO_DATA.ecosystem;

  section.innerHTML = `
    <div class="section-header">
        <span class="section-number">02 // pawjects ecosystem</span>
        <h2 class="section-heading">pawjects ecosystem.</h2>
    </div>

    <div class="ecosystem-container">
        <div class="ecosystem-meta-row">
            <div class="ecosystem-badge">
                <span class="live-dot"></span> ${badge}
            </div>
            <div class="ecosystem-icon">
                <i class="fas fa-paw"></i>
            </div>
        </div>
        <div class="ecosystem-name">${name}</div>
        <p class="ecosystem-role">${role}</p>
        <p class="ecosystem-desc">
            ${description}
        </p>
        <div class="ecosystem-actions">
            <a href="${hubUrl}" target="_blank" rel="noopener noreferrer" class="btn-ecosystem magnetic" data-strength="15">
                visit hub <i class="fas fa-arrow-up-right-from-square"></i>
            </a>
            <a href="${orgUrl}" target="_blank" rel="noopener noreferrer" class="btn-ecosystem magnetic" data-strength="15">
                <i class="fab fa-github"></i> github org
            </a>
        </div>
    </div>
  `;

  return section;
}
