/**
 * Contact & Footer Component (TypeScript)
 * Renders Section 04, contact buttons, minimal social dock, and footer note
 */

import { PORTFOLIO_DATA, SocialLink } from '../../data/portfolioData.js';

function renderSocialDock(socials: SocialLink[]): string {
  return socials
    .map(
      (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn magnetic" data-strength="15" aria-label="${s.ariaLabel}" title="${s.title}">
            <i class="${s.icon}"></i>
        </a>
      `
    )
    .join('');
}

export function renderContact(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'site-section reveal-up';

  const socialDockHtml = renderSocialDock(PORTFOLIO_DATA.socials);

  section.innerHTML = `
    <div class="contact-content">
        <span class="section-number">04 // contact me</span>
        <h2 class="massive-text">let's talk.</h2>
        <p class="contact-desc">
            best place to reach me is telegram. hit me up for open-source collaborations, android mods, or bot ideas.
        </p>
        
        <div class="contact-buttons">
            <a href="https://t.me/skykoderhere" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-large magnetic" data-strength="20">
                <i class="fab fa-telegram"></i> text @skykoderhere
            </a>
            <a href="mailto:skykoderhere@gmail.com" class="btn btn-secondary btn-large magnetic" data-strength="20">
                <i class="fas fa-envelope"></i> email me
            </a>
        </div>
        
        <!-- Clean Social Media Dock -->
        <div class="social-dock" aria-label="Social profiles">
            ${socialDockHtml}
        </div>

        <div class="footer-note">
            <p class="mono-text">© 2026 skye. crafted with clean code.</p>
        </div>
    </div>
  `;

  return section;
}
