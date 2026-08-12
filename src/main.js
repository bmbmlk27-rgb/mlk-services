// ===== STYLES GLOBAUX =====
import './styles/variables.css';
import './styles/reset.css';
import './styles/themes.css';
import './styles/global.css';
import './styles/animations.css';

// ===== COMPOSANTS =====
import { createNavbar } from './components/Navbar/Navbar.js';
import './components/Navbar/Navbar.css';

import { initIntro } from './components/Loader/Loader.js';
import './components/Loader/Loader.css';

import { createHero } from './components/Hero/Hero.js';
import './components/Hero/Hero.css';

import { createServices } from './components/Services/Services.js';
import './components/Services/Services.css';

import { createAbout } from './components/About/About.js';
import './components/About/About.css';

import { createPronostics } from './components/Pronostics/Pronostics.js';
import './components/Pronostics/Pronostics.css';

import { createContact } from './components/Contact/Contact.js';
import './components/Contact/Contact.css';

import { createFooter } from './components/Footer/Footer.js';
import './components/Footer/Footer.css';

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

// ----- INITIALISATION UNIQUE -----
let initialized = false;

document.addEventListener('DOMContentLoaded', () => {
  if (initialized) {
    console.warn('MLK Services déjà initialisé.');
    return;
  }
  initialized = true;

  initTheme();
  createNavbar();
  initIntro();
  createHero();
  createServices();
  createAbout();
  createPronostics();
  createContact();
  createFooter();
});

// ----- HMR VITE -----
if (import.meta.hot) {
  import.meta.hot.accept();
}