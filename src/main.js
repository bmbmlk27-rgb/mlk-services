// ===== STYLES GLOBAUX =====
import './styles/variables.css';
import './styles/reset.css';
import './styles/themes.css';
import './styles/global.css';
import './styles/animations.css';

// ===== COMPOSANTS =====
import { createNavbar } from './components/Navbar/Navbar.js';
import './components/Navbar/Navbar.css';

import { createHero } from './components/Hero/Hero.js';
import './components/Hero/Hero.css';

import Services, { initServicesAnimations } from './components/Services/Services.js';
import './components/Services/Services.css';

import About, { initAboutAnimations } from './components/About/About.js';
import './components/About/About.css';

import Pronostics, { initPronosticsAnimations } from './components/Pronostics/Pronostics.js';
import './components/Pronostics/Pronostics.css';

import Contact, { initContactForm } from './components/Contact/Contact.js';
import './components/Contact/Contact.css';

import Footer from './components/Footer/Footer.js';
import './components/Footer/Footer.css';

// Fond animé en pointillés + animations fluides
import 'lenis/dist/lenis.css';
import { initDotBackground } from './components/DotBackground/DotBackground.js';
import { initMotion } from './animations/motion.js';

// Loader / Intro (première visite)
import { initIntro } from './components/Loader/Loader.js';
import './components/Loader/Loader.css';

// ----- GESTION DU THÈME -----
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('mlk-theme'); } catch (e) {}
  document.documentElement.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  const root = document.documentElement;
  // Bascule instantanée, sans transitions saccadées
  root.classList.add('theme-switching');
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('mlk-theme', next); } catch (e) {}
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
}
window.toggleTheme = toggleTheme;

// ----- INITIALISATION -----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Fond en pointillés animé (derrière tout le site)
  initDotBackground();

  // Afficher le loader si première visite
  initIntro();
  createNavbar();
  createHero();

  const app = document.getElementById('app');
  if (app) {
    // Services
    app.insertAdjacentHTML('beforeend', Services());
    initServicesAnimations();

    // À propos
    app.insertAdjacentHTML('beforeend', About());
    initAboutAnimations();

    // Pronostics
    app.insertAdjacentHTML('beforeend', Pronostics());
    initPronosticsAnimations();

    // Contact
    app.insertAdjacentHTML('beforeend', Contact());
    initContactForm();

    // Footer
    app.insertAdjacentHTML('beforeend', Footer());

    // Séparateurs pointillés animés entre les sections
    app.querySelectorAll('section + section').forEach((section) => {
      section.insertAdjacentHTML('beforebegin', '<div class="dotted-divider" aria-hidden="true"></div>');
    });

    const year = document.getElementById('footerYear');
    if (year) year.textContent = new Date().getFullYear();
  }

  // Apparitions au défilement, défilement doux, barre de progression…
  initMotion();
});

// ----- HMR VITE -----
if (import.meta.hot) {
  import.meta.hot.accept();
}