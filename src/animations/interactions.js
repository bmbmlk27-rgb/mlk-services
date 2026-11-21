// ===== ANIMATIONS & INTERACTIONS MODERNES =====
// Légères, sans dépendance, et désactivées si l'utilisateur préfère réduire les animations.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- 1. Apparition au défilement ---------- */
const REVEAL_GROUPS = [
  // [sélecteur, variante, décalage entre éléments (ms)]
  ['.services-intro > *', 'up', 90],
  ['.service-card', 'up', 120],
  ['.service-section .service-content > *', 'up', 60],
  ['.service-section .service-visual', 'zoom', 0],
  ['.services-final > *', 'up', 90],
  ['.about-visual', 'left', 0],
  ['.about-content > *:not(.about-values)', 'up', 70],
  ['.about-values li', 'right', 80],
  ['.contact-info > *:not(.contact-methods)', 'up', 80],
  ['.contact-method', 'up', 80],
  ['.contact-form', 'zoom', 0],
  ['.footer__brand, .footer__column', 'up', 90],
];

function initReveal() {
  const items = [];
  REVEAL_GROUPS.forEach(([selector, variant, step]) => {
    // Le décalage repart de zéro pour chaque parent
    const counters = new Map();
    document.querySelectorAll(selector).forEach((el) => {
      if (el.hasAttribute('data-reveal')) return;
      const i = counters.get(el.parentElement) || 0;
      counters.set(el.parentElement, i + 1);
      el.setAttribute('data-reveal', variant);
      el.style.setProperty('--reveal-delay', `${Math.min(i * step, 600)}ms`);
      items.push(el);
    });
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('reveal-ready');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('is-visible');
        io.unobserve(el);
        // Une fois l'apparition terminée, l'élément retrouve ses propres transitions (survol réactif)
        const delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0;
        setTimeout(() => {
          el.removeAttribute('data-reveal');
          el.style.removeProperty('--reveal-delay');
        }, delay + 900);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
}

/* ---------- 2. Barre de progression + navbar + retour en haut ---------- */
function initScrollUI() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  const toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'Revenir en haut');
  toTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  document.body.appendChild(toTop);

  const navbar = document.querySelector('.navbar');
  const visual = document.querySelector('.hero__visual');
  let ticking = false;

  function update() {
    ticking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    navbar?.classList.toggle('is-scrolled', y > 30);
    toTop.classList.toggle('is-shown', y > window.innerHeight * 0.8);
    // Léger effet de profondeur sur le portrait de l'accueil
    if (visual && !reduceMotion && y < window.innerHeight * 1.2) {
      visual.style.setProperty('--parallax', `${y * 0.08}px`);
    }
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

/* ---------- 3. Lien actif du menu selon la section ---------- */
function initScrollSpy() {
  const links = [...document.querySelectorAll('.navbar__link[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));
}

/* ---------- 4. Halo lumineux qui suit le pointeur ---------- */
const SPOTLIGHT = '.service-card, .pronostics-sport, .pronostics-bots, .contact-form, .contact-method, .growth-chart-wrap';

function initSpotlight() {
  document.querySelectorAll(SPOTLIGHT).forEach((el) => {
    el.classList.add('has-spotlight');
    const glow = document.createElement('span');
    glow.className = 'spotlight';
    glow.setAttribute('aria-hidden', 'true');
    el.prepend(glow);
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- 5. Inclinaison 3D au survol ---------- */
function initTilt() {
  // Réservé au portrait : les cartes utilisent une élévation douce
  document.querySelectorAll('.hero__portrait').forEach((el) => {
    const max = 8;
    el.classList.add('has-tilt');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}

/* ---------- 6. Boutons « aimantés » ---------- */
function initMagnetic() {
  document.querySelectorAll('.btn, .submit-btn, .chip, .navbar__theme-btn, .to-top').forEach((el) => {
    el.classList.add('is-magnetic');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      // Déplacement proportionnel, limité à 8px pour rester subtil
      const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
      el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  });
}

/* ---------- 7. Effet d'onde au clic / toucher ---------- */
function initRipple() {
  document.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.btn, .submit-btn, .chip, .service-card, .contact-method');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 2;
    const wave = document.createElement('span');
    wave.className = 'ripple';
    wave.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    el.classList.add('has-ripple');
    el.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove());
  });
}

/* ---------- 8. Compteurs des chiffres clés ---------- */
function initHeroCounters() {
  const nums = document.querySelectorAll('.hero__stats strong');
  if (!nums.length || reduceMotion) return;
  nums.forEach((el) => {
    const m = el.textContent.trim().match(/^(\+?)(\d+)(K?)$/);
    if (!m) return;
    const [, prefix, value, suffix] = m;
    const target = Number(value);
    const start = performance.now() + 900;
    const duration = 1600;
    el.textContent = `${prefix}0${suffix}`;
    function frame(now) {
      const p = Math.max(0, Math.min((now - start) / duration, 1));
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

export function initInteractions() {
  initScrollUI();
  initScrollSpy();
  initReveal();
  initRipple();
  initHeroCounters();
  if (finePointer && !reduceMotion) {
    initSpotlight();
    initTilt();
    initMagnetic();
  }
}
