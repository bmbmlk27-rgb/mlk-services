export function createNavbar() {
  const navbarHTML = `
    <nav class="navbar">
      <div class="navbar__capsule">
        <a href="#hero" class="navbar__logo">
          <img src="/images/logo1.jpg" alt="MLK SERVICES Logo" />
          <span>MLK</span>
        </a>
        <ul class="navbar__links" id="navLinks">
          <li><a href="#hero" class="navbar__link active">Accueil</a></li>
          <li><a href="#services" class="navbar__link">Services</a></li>
          <li><a href="#about" class="navbar__link">À propos</a></li>
          <li><a href="#pronostics" class="navbar__link">Pronostics</a></li>
          <li><a href="#contact" class="navbar__link">Contact</a></li>
        </ul>
        <button class="navbar__theme-btn" id="themeToggle" aria-label="Changer le thème">
          <span id="themeIconText">🌙</span>
        </button>
        <button class="navbar__hamburger" id="hamburgerBtn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;

  const app = document.getElementById('app');
  if (!app) return;
  app.insertAdjacentHTML('afterbegin', navbarHTML);

  // Initialisation de l'icône
  updateThemeIcon();

  // Bouton thème
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      if (typeof window.toggleTheme === 'function') {
        window.toggleTheme();
        updateThemeIcon();
      }
    });
  }

  // Menu mobile
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }
}

function updateThemeIcon() {
  const iconText = document.getElementById('themeIconText');
  if (!iconText) return;
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  iconText.textContent = isLight ? '☀️' : '🌙';
}