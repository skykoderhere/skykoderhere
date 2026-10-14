/**
 * skye | Minimal Devfolio
 * TypeScript Style Engine
 * Classic Minimalist AMOLED Dark Design (Zero Glassmorphism / Zero Liquid Blurs)
 * Preserves all micro-interactions, magnetic physics, and GSAP animations unchanged
 */

export const GLOBAL_STYLES = `
/* ==========================================================================
   skye | Minimal Devfolio
   Pure AMOLED Black, Minimalist Dark Design, Clean Borders & High Contrast
   ========================================================================== */
:root {
    --bg-main: #000000;
    --bg-subtle: #08080a;
    --bg-panel: #0d0d10;
    --bg-panel-hover: #141419;

    --border-color: #1c1c22;
    --border-subtle: #141418;
    --border-hover: #2e2e38;

    --text-main: #f5f5f7;
    --text-muted: #8a8a95;
    --text-subtle: #52525c;
    --text-dark: #000000;

    --accent-primary: #00b7ff;
    --accent-hover: #38c8ff;
    --accent-glow: rgba(0, 183, 255, 0.12);

    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@media (hover: hover) and (pointer: fine) {
    * {
        cursor: none !important;
    }
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: clamp(65px, 8.5vh, 85px);
    font-family: var(--font-sans);
    background-color: var(--bg-main);
    color: var(--text-main);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
}

body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    min-height: 100dvh;
    background-color: var(--bg-main);
    line-height: 1.6;
    -webkit-tap-highlight-color: transparent;
}

main {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;
}

button {
    font-family: inherit;
    border: none;
    background: none;
}

:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 4px;
}

/* Ambient Subtle Grain & Glow */
.noise {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 90;
    opacity: 0.02;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.ambient-glow {
    position: fixed;
    width: 480px;
    height: 480px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 68%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    transform: translate(-50%, -50%);
    filter: blur(60px);
    opacity: 0.45;
    transition: opacity 0.3s;
}

/* Custom Cursor */
.cursor-dot {
    width: 6px;
    height: 6px;
    background-color: var(--text-main);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.2s;
}

.cursor-ring {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: width 0.25s var(--ease-out), 
                height 0.25s var(--ease-out), 
                background-color 0.25s, 
                border-color 0.25s,
                opacity 0.2s;
}

.cursor-visible {
    opacity: 1 !important;
}

/* Typography & Utilities */
.mono-text {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--text-muted);
}

.accent-color {
    color: var(--accent-primary);
}

.text-glow {
    color: var(--text-main);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

/* Minimalist Dark Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: max(clamp(0.75rem, 1.8vw, 1.15rem), env(safe-area-inset-top));
    padding-bottom: clamp(0.75rem, 1.8vw, 1.15rem);
    padding-left: max(clamp(1.2rem, 5vw, 3.5rem), env(safe-area-inset-left));
    padding-right: max(clamp(1.2rem, 5vw, 3.5rem), env(safe-area-inset-right));
    z-index: 100;
    background: #000000;
    border-bottom: 1px solid var(--border-color);
    transition: padding 0.3s ease;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
}

.logo {
    font-size: 1.12rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    display: flex;
    align-items: center;
    gap: 0.65rem;
    transition: transform 0.2s var(--ease-out);
}

.logo:active {
    transform: scale(0.96);
}

.nav-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1.5px solid var(--accent-primary);
    object-fit: cover;
    display: block;
    transition: transform 0.25s ease, border-color 0.25s ease;
}

.logo:hover .nav-avatar {
    transform: scale(1.08) rotate(4deg);
    border-color: var(--accent-hover);
}

.accent-dot {
    color: var(--accent-primary);
}

.nav-links {
    display: flex;
    gap: 1.8rem;
    align-items: center;
}

.nav-links .nav-item {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    text-transform: lowercase;
    position: relative;
    padding: 0.25rem 0;
    color: var(--text-muted);
    transition: color 0.2s ease;
}

.nav-links .nav-item:hover,
.nav-links .nav-item.active {
    color: var(--text-main);
}

.nav-links .nav-item::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1.5px;
    background-color: var(--accent-primary);
    transition: width 0.25s var(--ease-out);
}

.nav-links .nav-item:hover::after,
.nav-links .nav-item.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 40px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    z-index: 101;
    border-radius: 8px;
    background: #0d0d10;
    border: 1px solid var(--border-color);
    transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
    -webkit-tap-highlight-color: transparent;
}

.menu-toggle:hover {
    background: #141419;
    border-color: var(--border-hover);
}

.menu-toggle:active {
    transform: scale(0.9);
}

.hamburger-bar {
    width: 100%;
    height: 2px;
    background-color: var(--text-main);
    border-radius: 2px;
    transition: transform 0.25s var(--ease-out), opacity 0.25s;
}

.menu-toggle.open .hamburger-bar:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
}

.menu-toggle.open .hamburger-bar:nth-child(2) {
    transform: translateY(-4px) rotate(-45deg);
}

.mobile-menu {
    display: none;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1.2rem max(clamp(1.2rem, 5vw, 3.5rem), env(safe-area-inset-right)) calc(1.8rem + env(safe-area-inset-bottom)) max(clamp(1.2rem, 5vw, 3.5rem), env(safe-area-inset-left));
    background: #08080a;
    border-top: 1px solid var(--border-color);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.9);
    max-height: calc(100vh - 70px);
    overflow-y: auto;
}

.mobile-menu.open {
    display: flex;
}

.mobile-nav-link {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    text-transform: lowercase;
    color: var(--text-muted);
    padding: 0.65rem 0;
    border-bottom: 1px solid var(--border-subtle);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.mobile-nav-link.active {
    color: var(--accent-primary);
    font-weight: 500;
}

.mobile-nav-link:hover,
.mobile-nav-link:active {
    color: var(--text-main);
}

/* ==========================================================================
   Hero Section (Full 100dvh Viewport)
   ========================================================================== */
.hero {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: clamp(90px, 14vh, 130px) clamp(1.2rem, 5vw, 3.5rem) clamp(2.5rem, 5vh, 4rem);
    position: relative;
    z-index: 10;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}

.hero-content {
    width: 100%;
    max-width: 820px;
}

.availability {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.35rem 0.85rem;
    border: 1px solid var(--border-color);
    border-radius: 100px;
    margin-bottom: 1.4rem;
    background: #0a0a0d;
    max-width: 100%;
    box-sizing: border-box;
    transition: border-color 0.25s ease, background 0.25s ease;
}

.availability:hover {
    border-color: var(--border-hover);
    background: #101015;
}

.status-dot {
    width: 8px;
    height: 8px;
    background-color: #00ff88;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 255, 136, 0.5);
    animation: statusPulse 2s infinite ease-in-out;
}

@keyframes statusPulse {
    0%, 100% { transform: scale(0.95); opacity: 0.75; }
    50% { transform: scale(1.15); opacity: 1; }
}

.hero-title {
    font-size: clamp(2.3rem, 5.2vw, 4.2rem);
    font-weight: 500;
    line-height: 1.12;
    letter-spacing: -0.04em;
    margin-bottom: 1.15rem;
}

.hero-subtitle {
    font-size: clamp(0.95rem, 1.5vw, 1.12rem);
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 620px;
}

.hero-actions {
    display: flex;
    gap: 0.95rem;
    flex-wrap: wrap;
}

/* Minimalist Dark Buttons */
.btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 0.75rem 1.6rem;
    border-radius: 100px;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: -0.01em;
    transition: transform 0.22s var(--ease-out), background 0.22s, border-color 0.22s, color 0.22s, box-shadow 0.22s;
    text-decoration: none;
    cursor: pointer;
    min-height: 44px;
    user-select: none;
}

.btn:active {
    transform: scale(0.96) !important;
}

.btn-primary {
    background: #ffffff;
    color: #000000;
    border: 1px solid #ffffff;
}

.btn-primary:hover {
    background: #e6e6e8;
    border-color: #e6e6e8;
    transform: translateY(-2px);
    box-shadow: 0 4px 18px rgba(255, 255, 255, 0.15);
}

.btn-secondary {
    background: #0d0d10;
    color: var(--text-main);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background: #141419;
    border-color: var(--border-hover);
    color: #ffffff;
    transform: translateY(-2px);
}

.btn-large {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
}

/* ==========================================================================
   Clean Flow Layout (Matched Background, No Boxed Cards)
   ========================================================================== */
.content-container {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 0;
    padding-left: max(clamp(1.2rem, 5vw, 3.5rem), env(safe-area-inset-left));
    padding-right: max(clamp(1.2rem, 5vw, 3.5rem), env(safe-area-inset-right));
    padding-bottom: max(6rem, calc(4rem + env(safe-area-inset-bottom)));
    position: relative;
}

.site-section {
    position: relative;
    background: transparent;
    padding: clamp(3rem, 6vh, 4.5rem) 0;
    border-top: 1px solid var(--border-subtle);
}

.section-header {
    margin-bottom: clamp(1.5rem, 3vw, 2.2rem);
}

.section-number {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--accent-primary);
    display: inline-block;
    margin-bottom: 0.35rem;
}

.section-heading {
    font-size: clamp(1.9rem, 3.8vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: var(--text-main);
}

/* Section 01: About Me */
.bio-lead {
    font-size: clamp(1rem, 1.6vw, 1.15rem);
    color: var(--text-main);
    line-height: 1.75;
    margin-bottom: 1.1rem;
    max-width: 820px;
}

.bio-lead strong {
    color: var(--accent-primary);
    font-weight: 600;
}

.bio-quote {
    font-family: var(--font-mono);
    font-size: 0.84rem;
    color: var(--text-muted);
    font-style: italic;
    border-left: 2px solid var(--accent-primary);
    padding-left: 0.85rem;
    margin-bottom: 2rem;
}

/* Minimalist Dark Capabilities & Toolkit Bar */
.compact-toolkit-bar {
    background: #08080a;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: clamp(0.95rem, 2vw, 1.35rem);
    margin-top: 1.5rem;
    transition: border-color 0.25s ease;
}

.compact-toolkit-bar:hover {
    border-color: var(--border-hover);
}

.toolkit-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.95rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-subtle);
}

.toolkit-title {
    font-family: var(--font-mono);
    font-size: 0.76rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.toolkit-title i {
    color: var(--accent-primary);
}

.tab-switcher {
    display: inline-flex;
    background: #0d0d10;
    border: 1px solid var(--border-color);
    border-radius: 100px;
    padding: 0.2rem;
    gap: 0.2rem;
    max-width: 100%;
}

.tab-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    font-family: var(--font-mono);
    font-size: 0.74rem;
    color: var(--text-muted);
    transition: all 0.2s var(--ease-out);
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
    min-height: 32px;
    user-select: none;
    white-space: nowrap;
}

.tab-label-short {
    display: none;
}

@media (max-width: 440px) {
    .tab-label-full {
        display: none;
    }
    .tab-label-short {
        display: inline;
    }
    .tab-btn {
        padding: 0.32rem 0.55rem;
        font-size: 0.72rem;
    }
}

.tab-btn:hover {
    color: var(--text-main);
    background: #141419;
}

.tab-btn:active {
    transform: scale(0.96);
}

.tab-btn.active {
    background: #1c1c24;
    color: #ffffff;
    border-color: var(--border-hover);
}

.tab-panel {
    display: none;
}

.tab-panel.active {
    display: block;
    animation: tabFadeIn 0.2s var(--ease-out);
}

@keyframes tabFadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Minimalist Dark Tags */
.compact-stack-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    padding: 0.2rem 0;
}

.tag-compact {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.35rem 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 100px;
    background: #0b0b0e;
    font-family: var(--font-mono);
    font-size: 0.74rem;
    color: var(--text-muted);
    cursor: pointer;
    user-select: none;
    transition: transform 0.22s var(--ease-out), 
                border-color 0.22s ease, 
                background 0.22s ease, 
                color 0.22s ease;
}

.tag-compact i {
    color: var(--accent-primary);
    font-size: 0.82rem;
    transition: transform 0.22s var(--ease-out), color 0.22s ease;
}

.tag-compact:hover {
    border-color: var(--accent-primary);
    color: var(--text-main);
    background: #121218;
    transform: translateY(-2px);
}

.tag-compact:hover i {
    transform: scale(1.15);
    color: #ffffff;
}

.tag-compact:active {
    transform: translateY(-1px) scale(0.96);
}

/* Minimalist Dark Floating Tooltip */
.tag-compact .tag-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: #121217;
    border: 1px solid var(--border-hover);
    color: #ffffff;
    padding: 0.4rem 0.75rem;
    border-radius: 8px;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 500;
    line-height: 1.35;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s var(--ease-out), 
                transform 0.2s var(--ease-out), 
                visibility 0.2s;
    z-index: 50;
    max-width: min(240px, calc(100vw - 40px));
    white-space: normal;
    text-align: center;
    width: max-content;
}

.tag-compact .tag-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: var(--border-hover) transparent transparent transparent;
}

.tag-compact:hover .tag-tooltip,
.tag-compact:focus-visible .tag-tooltip,
.tag-compact.tooltip-open .tag-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

/* ==========================================================================
   Section 02: Pawjects Ecosystem
   ========================================================================== */
.ecosystem-container {
    background: #08080a;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: clamp(1.5rem, 3vw, 2.2rem);
    position: relative;
    transition: border-color 0.25s ease;
}

.ecosystem-container:hover {
    border-color: var(--border-hover);
}

.ecosystem-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.ecosystem-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.3rem 0.75rem;
    border-radius: 100px;
    background: #0d0d12;
    border: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent-primary);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.ecosystem-badge .live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--accent-primary);
    box-shadow: 0 0 6px var(--accent-primary);
    animation: statusPulse 2s infinite ease-in-out;
}

.ecosystem-icon {
    font-size: 1.5rem;
    color: var(--accent-primary);
}

.ecosystem-name {
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 0.25rem;
}

.ecosystem-role {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--accent-primary);
    margin-bottom: 0.85rem;
    text-transform: uppercase;
}

.ecosystem-desc {
    color: var(--text-muted);
    font-size: clamp(0.92rem, 1.4vw, 1.02rem);
    line-height: 1.65;
    margin-bottom: 1.6rem;
    max-width: 760px;
}

.ecosystem-actions {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
}

.btn-ecosystem {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.65rem 1.4rem;
    border-radius: 100px;
    background: #0d0d12;
    border: 1px solid var(--border-color);
    color: var(--text-main);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    transition: all 0.22s ease;
}

.btn-ecosystem:hover {
    background: var(--accent-primary);
    color: #000000;
    border-color: var(--accent-primary);
    transform: translateY(-2px);
}

.btn-ecosystem:active {
    transform: scale(0.96) !important;
}

/* ==========================================================================
   Section 03: My Projects
   ========================================================================== */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.15rem;
}

.project-item {
    background: #08080a;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: clamp(1.25rem, 2.2vw, 1.6rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: border-color 0.25s, transform 0.25s var(--ease-out), background 0.25s;
}

.project-item:hover {
    border-color: var(--border-hover);
    background: #0d0d10;
    transform: translateY(-3px);
}

.project-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
}

.project-item h3 {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.02em;
    transition: color 0.2s;
}

.project-item:hover h3 {
    color: var(--accent-primary);
}

.project-badge {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border-radius: 100px;
    background: #0e0e13;
    color: var(--accent-primary);
    border: 1px solid var(--border-color);
}

.project-desc {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.55;
    margin-bottom: 1.15rem;
}

.project-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.65rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border-subtle);
}

.project-tags {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
}

.project-tags span {
    background: #0d0d10;
    padding: 0.2rem 0.55rem;
    border-radius: 6px;
    border: 1px solid var(--border-subtle);
    font-size: 0.7rem;
    color: var(--text-muted);
}

.btn-circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: #0d0d12;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-main);
    transition: background 0.25s, transform 0.25s var(--ease-out), border-color 0.25s, color 0.25s;
}

.project-item:hover .btn-circle {
    background: #ffffff;
    color: #000000;
    border-color: #ffffff;
    transform: rotate(-45deg);
}

.btn-circle:active {
    transform: scale(0.92) rotate(-45deg) !important;
}

.btn-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.8rem;
    border-radius: 100px;
    border: 1px solid var(--border-color);
    background: #0d0d12;
    color: var(--text-main);
    font-family: var(--font-mono);
    font-size: 0.72rem;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.btn-pill:hover {
    background: #171720;
    border-color: var(--accent-primary);
    transform: translateY(-2px);
}

.btn-pill:active {
    transform: scale(0.96) !important;
}

/* ==========================================================================
   Section 04: Contact Me & Minimal Socials Dock
   ========================================================================== */
.contact-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
}

.massive-text {
    font-size: clamp(2.4rem, 5.5vw, 4.4rem);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1.05;
    margin: 0.3rem 0 0.8rem;
}

.contact-desc {
    max-width: 520px;
    color: var(--text-muted);
    font-size: clamp(0.92rem, 1.35vw, 1.02rem);
    line-height: 1.65;
    margin-bottom: 1.8rem;
}

.contact-buttons {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
    justify-content: center;
}

/* Minimalist Dark Social Media Dock */
.social-dock {
    margin-top: 2.5rem;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.social-icon-btn {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #0d0d10;
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    transition: all 0.22s var(--ease-out);
    text-decoration: none;
}

.social-icon-btn:hover {
    color: #ffffff;
    border-color: var(--accent-primary);
    background: #14141a;
    transform: translateY(-3px);
}

.social-icon-btn:active {
    transform: scale(0.92) !important;
}

.footer-note {
    margin-top: 2.8rem;
    padding-top: 1.4rem;
    border-top: 1px solid var(--border-subtle);
    width: 100%;
    text-align: center;
}

/* Reveal Animations */
.reveal-up {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.reveal-up.active {
    opacity: 1;
    transform: translateY(0);
}

.hero-elem {
    opacity: 0;
    transform: translateY(20px);
    will-change: opacity, transform, filter;
}

@media (prefers-reduced-motion: reduce) {
    .hero-elem,
    .reveal-up {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
        filter: none !important;
    }
}

/* Responsive Breakpoints & Device Screen Optimizations */
@media (max-width: 820px) {
    .nav-links { display: none; }
    .menu-toggle { display: flex; }
    .projects-grid { grid-template-columns: 1fr; }
    .cursor-dot, .cursor-ring, .ambient-glow { display: none !important; }
    * { cursor: auto !important; }
    .hero {
        min-height: 100vh;
        min-height: 100dvh;
        padding-top: max(85px, calc(70px + env(safe-area-inset-top)));
        padding-bottom: max(2rem, calc(1.5rem + env(safe-area-inset-bottom)));
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .compact-grid-cards {
        grid-template-columns: 1fr;
    }
    .ecosystem-container {
        padding: 1.25rem 1.1rem;
    }
    .toolkit-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.85rem;
    }
    .tab-switcher {
        width: 100%;
    }
    .tab-btn {
        flex: 1;
    }
}

@media (max-width: 480px) {
    .hero {
        padding-left: max(1.1rem, env(safe-area-inset-left));
        padding-right: max(1.1rem, env(safe-area-inset-right));
        min-height: 100vh;
        min-height: 100dvh;
        padding-top: max(80px, calc(65px + env(safe-area-inset-top)));
        padding-bottom: max(2rem, calc(1.5rem + env(safe-area-inset-bottom)));
        justify-content: center;
    }
    .hero-actions .btn { width: 100%; }
    .contact-buttons .btn { width: 100%; }
    .ecosystem-actions .btn-ecosystem { width: 100%; justify-content: center; }
    .site-section { padding: 2.2rem 0; }
    .massive-text {
        font-size: clamp(2.2rem, 11vw, 3.2rem);
    }
    .social-dock {
        gap: 0.55rem;
    }
    .social-icon-btn {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
}

@media (max-width: 360px) {
    .hero-title {
        font-size: 1.95rem;
    }
    .section-heading {
        font-size: 1.65rem;
    }
    .btn {
        padding: 0.7rem 1.1rem;
        font-size: 0.84rem;
    }
    .tag-compact {
        padding: 0.3rem 0.6rem;
        font-size: 0.7rem;
    }
    .tab-btn {
        padding: 0.3rem 0.4rem;
        font-size: 0.68rem;
    }
}

@media (max-height: 520px) and (orientation: landscape) {
    .hero {
        min-height: 100vh;
        min-height: 100dvh;
        padding-top: max(65px, calc(50px + env(safe-area-inset-top)));
        padding-bottom: max(1.5rem, calc(1rem + env(safe-area-inset-bottom)));
        justify-content: center;
    }
    .mobile-menu {
        max-height: 70vh;
    }
}
`;

export function injectStyles(): void {
  const existingStyle = document.getElementById('portfolio-styles');
  if (existingStyle) {
    existingStyle.textContent = GLOBAL_STYLES;
    return;
  }
  const styleEl = document.createElement('style');
  styleEl.id = 'portfolio-styles';
  styleEl.textContent = GLOBAL_STYLES;
  document.head.appendChild(styleEl);
}
