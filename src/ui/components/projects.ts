/**
 * Projects Component (TypeScript)
 * Renders Section 03 My Projects grid with magnetic interactive action buttons
 */

import { PORTFOLIO_DATA, ProjectItem } from '../../data/portfolioData.js';

function renderProjectCard(p: ProjectItem): string {
  const tagsHtml = p.tags.map((t) => `<span>${t}</span>`).join('');

  const actionButtonsHtml =
    p.liveUrl && p.liveLabel
      ? `
        <div style="display: flex; gap: 0.5rem; align-items: center;">
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill magnetic" data-strength="15" title="Launch ${p.title}">
                <i class="${p.icon || 'fas fa-play'}"></i> ${p.liveLabel}
            </a>
            <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-circle magnetic" data-strength="25" aria-label="${p.title} Repo" title="${p.title} on GitHub">
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
      `
      : `
        <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-circle magnetic" data-strength="25" aria-label="${p.title} Repo" title="${p.title} on GitHub">
            <i class="fas fa-arrow-right"></i>
        </a>
      `;

  return `
    <div class="project-item">
        <div>
            <div class="project-top-row">
                <h3>${p.title}</h3>
                <span class="project-badge">${p.badge}</span>
            </div>
            <p class="project-desc">${p.description}</p>
        </div>
        <div class="project-bottom-row">
            <div class="project-tags">
                ${tagsHtml}
            </div>
            ${actionButtonsHtml}
        </div>
    </div>
  `;
}

export function renderProjects(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'site-section reveal-up';

  const cardsHtml = PORTFOLIO_DATA.projects.map((p) => renderProjectCard(p)).join('');

  section.innerHTML = `
    <div class="section-header">
        <span class="section-number">03 // my projects</span>
        <h2 class="section-heading">my projects.</h2>
    </div>

    <div class="projects-grid">
        ${cardsHtml}
    </div>
  `;

  return section;
}
