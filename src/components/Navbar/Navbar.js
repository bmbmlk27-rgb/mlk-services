export function createNavbar() {
  const navbarHTML = `
    <nav class="navbar" role="navigation" aria-label="Navigation principale">
      <div class="navbar__capsule">
        <!-- Logo -->
        <a href="#hero" class="navbar__logo" aria-label="MLK SERVICES - Accueil">
          <img src="/images/logo1.jpg" alt="MLK SERVICES Logo" />
          <span class="navbar__logo-text">MLK</span>
        </a>

        <!-- Liens de navigation (ancres) -->
        <ul class="navbar__links" id="navLinks">
          <li><a href="#hero" class="navbar__link active"><i class="fa-solid fa-house"></i> Accueil</a></li>
          <li><a href="#services" class="navbar__link"><i class="fa-solid fa-briefcase"></i> Services</a></li>
          <li><a href="#about" class="navbar__link"><i class="fa-solid fa-user"></i> À propos</a></li>
          <li><a href="#pronostics" class="navbar__link"><i class="fa-solid fa-futbol"></i> Pronostics</a></li>
          <li><a href="#contact" class="navbar__link"><i class="fa-solid fa-envelope"></i> Contact</a></li>
        </ul>

        <!-- Bouton thème -->
        <button class="navbar__theme-btn" id="themeToggle" aria-label="Changer le thème clair/sombre">
          <i class="fa-solid fa-moon"></i>
        </button>

        <!-- Hamburger mobile -->
        <button class="navbar__hamburger" id="hamburgerBtn" aria-label="Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;

  const app = document.getElementById('app');
  if (!app) return;
  app.insertAdjacentHTML('afterbegin', navbarHTML);

  // --- Gestion du thème ---
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    updateThemeIcon();
    themeBtn.addEventListener('click', () => {
      window.toggleTheme();
      updateThemeIcon();
    });
  }

  // --- Menu mobile ---
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu au clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // Défilement fluide vers l'ancre
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        // Fermer le menu mobile
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer si clic à l'extérieur
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Mise à jour de l'élément actif au scroll ---
  updateActiveOnScroll();
  window.addEventListener('scroll', updateActiveOnScroll);
}

// Met à jour l'icône du bouton thème
function updateThemeIcon() {
  const icon = document.querySelector('#themeToggle i');
  if (!icon) return;
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// Met à jour le lien actif selon la section visible
function updateActiveOnScroll() {
  const sections = ['hero', 'services', 'about', 'pronostics', 'contact'];
  const links = document.querySelectorAll('.navbar__link');
  let current = 'hero';

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = id;
      }
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}