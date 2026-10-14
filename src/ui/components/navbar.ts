/**
 * Navbar Component (TypeScript)
 * Renders the 4-section navigation bar and mobile drawer
 */

export function renderNavbar(): HTMLElement {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';

  nav.innerHTML = `
    <div class="nav-container">
        <a href="#" class="logo" aria-label="skye homepage">
            <img src="assets/avatar.png" alt="skye logo" class="nav-avatar" width="32" height="32" loading="eager">
            <span>skye</span><span class="accent-dot">.</span>
        </a>
        
        <div class="nav-links" id="nav-links">
            <a href="#about" class="nav-item magnetic" data-strength="15">about</a>
            <a href="#ecosystem" class="nav-item magnetic" data-strength="15">ecosystem</a>
            <a href="#projects" class="nav-item magnetic" data-strength="15">projects</a>
            <a href="#contact" class="nav-item magnetic" data-strength="15">contact</a>
        </div>

        <!-- Mobile Hamburger Toggle -->
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
        </button>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <a href="#about" class="mobile-nav-link">about</a>
        <a href="#ecosystem" class="mobile-nav-link">ecosystem</a>
        <a href="#projects" class="mobile-nav-link">projects</a>
        <a href="#contact" class="mobile-nav-link">contact</a>
    </div>
  `;

  return nav;
}
