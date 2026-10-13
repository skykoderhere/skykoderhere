/**
 * Haptic Feedback Engine
 * Leverages the mobile Vibration API for crisp micro-tactile responses
 */

export function triggerHaptic(intensity: number = 8): void {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(intensity);
    } catch {
      // Ignore vibration error on unsupported hardware
    }
  }
}

export function initHaptics(): void {
  const interactiveElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    'a, button, .tag-compact, .tab-btn'
  );

  interactiveElements.forEach((el: HTMLElement) => {
    el.addEventListener('click', () => triggerHaptic(10));
  });
}
