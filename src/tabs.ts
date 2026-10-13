/**
 * Tabbed Toolkit Switcher
 * Manages tabs for Tech Stack, What I Build, and Personal Vibe
 */

export function initTabs(): void {
  const tabBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.tab-btn');
  const tabPanels: NodeListOf<HTMLElement> = document.querySelectorAll('.tab-panel');
  const techTags: NodeListOf<HTMLElement> = document.querySelectorAll('.tag-compact');

  tabBtns.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      // Dismiss any open tooltip popups on tab switch
      techTags.forEach((t: HTMLElement) => t.classList.remove('tooltip-open'));

      tabBtns.forEach((b: HTMLButtonElement) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach((p: HTMLElement) => {
        p.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}
