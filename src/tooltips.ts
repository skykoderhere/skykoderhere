/**
 * Tooltips Engine
 * Enables touch-friendly tooltip viewing on mobile while preserving hover on desktop
 */

export function initTooltips(): void {
  const techTags: NodeListOf<HTMLElement> = document.querySelectorAll('.tag-compact');

  techTags.forEach((tag: HTMLElement) => {
    tag.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      const wasOpen = tag.classList.contains('tooltip-open');
      techTags.forEach((t: HTMLElement) => t.classList.remove('tooltip-open'));
      if (!wasOpen) {
        tag.classList.add('tooltip-open');
      }
    });
  });

  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target || !target.closest('.tag-compact')) {
      techTags.forEach((t: HTMLElement) => t.classList.remove('tooltip-open'));
    }
  });
}
