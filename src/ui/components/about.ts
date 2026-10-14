/**
 * About Me Component (TypeScript)
 * Renders Section 01, lead bio, quote, and the compact toolkit tabs with tooltips
 */

import { PORTFOLIO_DATA, TechTag } from '../../data/portfolioData.js';

function renderTagRow(tags: TechTag[]): string {
  return tags
    .map(
      (t) => `
        <span class="tag-compact" tabindex="0" aria-label="${t.name} - ${t.tooltip}">
            <i class="${t.icon}"></i> ${t.name}
            <span class="tag-tooltip">${t.tooltip}</span>
        </span>
      `
    )
    .join('');
}

export function renderAbout(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'site-section reveal-up';

  const { bioLead, quote } = PORTFOLIO_DATA.profile;
  const { stackTags, buildTags, vibeTags } = PORTFOLIO_DATA;

  section.innerHTML = `
    <div class="section-header">
        <span class="section-number">01 // about me</span>
        <h2 class="section-heading">who i am.</h2>
    </div>

    <p class="bio-lead">
        ${bioLead.replace('skye', '<strong>skye</strong>')}
    </p>
    <div class="bio-quote">
        ${quote}
    </div>

    <!-- Capabilities & Toolkit (3 Tabs: Stack, Build, Vibe & Interests) -->
    <div class="compact-toolkit-bar">
        <div class="toolkit-header">
            <div class="toolkit-title">
                <i class="fas fa-sliders-h"></i> capabilities & toolkit
            </div>
            <div class="tab-switcher" role="tablist" aria-label="Capabilities tabs">
                <button class="tab-btn active" data-tab="tab-stack" role="tab" aria-selected="true" aria-controls="tab-stack">
                    <i class="fas fa-code"></i> <span>stack</span>
                </button>
                <button class="tab-btn" data-tab="tab-build" role="tab" aria-selected="false" aria-controls="tab-build">
                    <i class="fas fa-cubes"></i> <span>build</span>
                </button>
                <button class="tab-btn" data-tab="tab-vibe" role="tab" aria-selected="false" aria-controls="tab-vibe">
                    <i class="fas fa-heart"></i> <span class="tab-label-full">vibe & interests</span><span class="tab-label-short">vibe</span>
                </button>
            </div>
        </div>

        <!-- Tab 1: Tech Stack -->
        <div class="tab-panel active" id="tab-stack" role="tabpanel">
            <div class="compact-stack-row">
                ${renderTagRow(stackTags)}
            </div>
        </div>

        <!-- Tab 2: What I Build -->
        <div class="tab-panel" id="tab-build" role="tabpanel">
            <div class="compact-stack-row">
                ${renderTagRow(buildTags)}
            </div>
        </div>

        <!-- Tab 3: Personal Vibe & Interests -->
        <div class="tab-panel" id="tab-vibe" role="tabpanel">
            <div class="compact-stack-row">
                ${renderTagRow(vibeTags)}
            </div>
        </div>
    </div>
  `;

  return section;
}
