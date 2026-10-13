/**
 * Custom Cursor & Ambient Glow Tracking
 * Runs on desktop pointer devices only; automatically guards against touch input
 */

export function initCustomCursor(): void {
  const cursorDot = document.querySelector<HTMLElement>('.cursor-dot');
  const cursorRing = document.querySelector<HTMLElement>('.cursor-ring');
  const ambientGlow = document.getElementById('ambient-glow') as HTMLElement | null;
  const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (!isDesktop || !cursorDot || !cursorRing || !ambientGlow) {
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;
  let isCursorActive = false;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isCursorActive) {
      isCursorActive = true;
      cursorDot.classList.add('cursor-visible');
      cursorRing.classList.add('cursor-visible');
    }

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  document.addEventListener('mouseleave', () => {
    isCursorActive = false;
    cursorDot.classList.remove('cursor-visible');
    cursorRing.classList.remove('cursor-visible');
  });

  function renderAmbientCursor(): void {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    glowX += (mouseX - glowX) * 0.05;
    glowY += (mouseY - glowY) * 0.05;

    cursorRing!.style.left = `${ringX}px`;
    cursorRing!.style.top = `${ringY}px`;

    ambientGlow!.style.left = `${glowX}px`;
    ambientGlow!.style.top = `${glowY}px`;

    requestAnimationFrame(renderAmbientCursor);
  }

  renderAmbientCursor();

  const hoverTargets: NodeListOf<HTMLElement> = document.querySelectorAll(
    'a, button, .project-item, .tag-compact, .compact-card-item, .social-icon-btn'
  );

  hoverTargets.forEach((el: HTMLElement) => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width = '48px';
      cursorRing.style.height = '48px';
      cursorRing.style.backgroundColor = 'rgba(0, 183, 255, 0.08)';
      cursorRing.style.borderColor = 'rgba(0, 183, 255, 0.6)';
    });

    el.addEventListener('mouseleave', () => {
      cursorRing.style.width = '32px';
      cursorRing.style.height = '32px';
      cursorRing.style.backgroundColor = 'transparent';
      cursorRing.style.borderColor = 'rgba(255, 255, 255, 0.25)';
    });
  });

  // Touch guard: hides cursor instantly if touch interaction begins
  window.addEventListener(
    'touchstart',
    () => {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorRing) cursorRing.style.display = 'none';
    },
    { passive: true }
  );
}
