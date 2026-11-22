import { Logo3D } from '../Logo3D/Logo3D.js';

const LINKS = [
  { href: '#hero', label: 'Accueil', icon: 'fa-house' },
  { href: '#services', label: 'Services', icon: 'fa-layer-group' },
  { href: '#about', label: 'À propos', icon: 'fa-user' },
  { href: '#pronostics', label: 'Pronos', icon: 'fa-futbol', badge: true },
  { href: '#contact', label: 'Contact', icon: 'fa-paper-plane' },
];

function themeButton(extraClass = '') {
  return `
    <button class="navbar__theme-btn ${extraClass}" type="button" aria-label="Changer le thème">
      <i class="fa-solid fa-moon theme-icon theme-icon--moon"></i>
      <i class="fa-solid fa-sun theme-icon theme-icon--sun"></i>
    </button>
  `;
}

export function createNavbar() {
  const items = LINKS.map((l, i) => `
    <li>
      <a href="${l.href}" class="navbar__link${i === 0 ? ' active' : ''}">
        <span class="navbar__icon">
          <i class="fa-solid ${l.icon}"></i>
          ${l.badge ? '<span class="navbar__badge" aria-hidden="true"></span>' : ''}
        </span>
        <span class="navbar__label">${l.label}</span>
        <span class="navbar__dot" aria-hidden="true"></span>
      </a>
    </li>
  `).join('');

  const navbarHTML = `
    <!-- Barre du haut sur mobile : logo + thème -->
    <div class="mobile-topbar">
      <a href="#hero" class="navbar__brand" aria-label="MLK SERVICES, accueil">
        ${Logo3D({ depth: 6, className: 'navbar__logo3d' })}
      </a>
      ${themeButton('navbar__theme-btn--mobile')}
    </div>

    <nav class="navbar" aria-label="Navigation principale">
      <div class="navbar__capsule">
        <a href="#hero" class="navbar__brand navbar__brand--desktop" aria-label="MLK SERVICES, accueil">
          ${Logo3D({ depth: 6, className: 'navbar__logo3d' })}
        </a>
        <ul class="navbar__links" id="navLinks">
          <li class="navbar__indicator" aria-hidden="true"></li>
          ${items}
        </ul>
        ${themeButton('navbar__theme-btn--desktop')}
      </div>
    </nav>
  `;

  const app = document.getElementById('app');
  if (!app) return;
  app.insertAdjacentHTML('afterbegin', navbarHTML);

  // Boutons de thème (mobile et ordinateur)
  document.querySelectorAll('.navbar__theme-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (typeof window.toggleTheme === 'function') window.toggleTheme();
      btn.classList.remove('is-spinning');
      void btn.offsetWidth; // relance l'animation
      btn.classList.add('is-spinning');
    });
  });

  initIndicator();
}

// Pastille qui glisse sous le lien actif
function initIndicator() {
  const list = document.getElementById('navLinks');
  const indicator = list?.querySelector('.navbar__indicator');
  if (!list || !indicator) return;

  const move = () => {
    const active = list.querySelector('.navbar__link.active');
    if (!active) { indicator.style.opacity = '0'; return; }
    indicator.style.opacity = '1';
    indicator.style.width = `${active.offsetWidth}px`;
    indicator.style.height = `${active.offsetHeight}px`;
    indicator.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
  };

  // Le lien actif change au défilement (scrollspy) ou au clic
  new MutationObserver(move).observe(list, { subtree: true, attributes: true, attributeFilter: ['class'] });
  list.querySelectorAll('.navbar__link').forEach((link) => {
    link.addEventListener('click', () => {
      list.querySelectorAll('.navbar__link').forEach((l) => l.classList.toggle('active', l === link));
    });
  });
  window.addEventListener('resize', move);
  if (document.fonts?.ready) document.fonts.ready.then(move);
  requestAnimationFrame(move);
}
