/**
 * skye | Minimal Devfolio
 * TypeScript Type Definitions
 */

export interface CursorState {
  mouseX: number;
  mouseY: number;
  ringX: number;
  ringY: number;
  glowX: number;
  glowY: number;
  isActive: boolean;
}

export interface SectionBoundary {
  id: string;
  top: number;
  height: number;
}

declare global {
  interface Window {
    gsap?: {
      set: (targets: unknown, vars: Record<string, unknown>) => void;
      fromTo: (
        targets: unknown,
        fromVars: Record<string, unknown>,
        toVars: Record<string, unknown>
      ) => void;
    };
  }
}
