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

// Loader / Intro (première visite)
import { initIntro } from './components/Loader/Loader.js';
import './components/Loader/Loader.css';

// ----- GESTION DU THÈME -----
function initTheme() {
  const saved = localStorage.getItem('mlk-theme');
  document.documentElement.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mlk-theme', next);
}
window.toggleTheme = toggleTheme;

// ----- INITIALISATION -----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Afficher le loader si première visite
  initIntro();
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
  }

  console.log('Site complet affiché');
});

// ----- HMR VITE -----
if (import.meta.hot) {
  import.meta.hot.accept();
}