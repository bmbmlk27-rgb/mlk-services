import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis = null;

/* ---------- Défilement doux (Lenis) + liens d'ancre ---------- */
function initSmoothScroll() {
  if (!reduceMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: id === '#hero' ? 0 : -80 });
    else target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', id);
  });
}

/* ---------- Apparition des éléments au défilement ---------- */
function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');

  // Décalage automatique entre éléments d'un même groupe
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    const step = parseFloat(group.dataset.revealGroup) || 90;
    group.querySelectorAll(':scope > [data-reveal]').forEach((el, i) => {
      if (!el.style.getPropertyValue('--reveal-delay')) {
        el.style.setProperty('--reveal-delay', `${i * step}ms`);
      }
    });
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => observer.observe(el));
}

/* ---------- Titres découpés en mots qui montent un par un ---------- */
function initSplitTitles() {
  document.querySelectorAll('[data-split]').forEach((title) => {
    const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    let index = 0;
    nodes.forEach((node) => {
      const parts = node.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }
        const outer = document.createElement('span');
        outer.className = 'split-word';
        const inner = document.createElement('span');
        inner.textContent = part;
        inner.style.setProperty('--word-index', index++);
        outer.appendChild(inner);
        frag.appendChild(outer);
      });
      node.replaceWith(frag);
    });
  });
}

/* ---------- Barre de progression + navbar ---------- */
function initScrollUI() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  const navbar = document.querySelector('.navbar');
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${p})`;
    if (navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 40);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();

  // Lien actif de la navbar selon la section visible
  const links = document.querySelectorAll('.navbar__link');
  const sections = [...links]
    .map((l) => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Halo lumineux qui suit la souris sur les cartes ---------- */
function initSpotlight() {
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- Boutons « magnétiques » ---------- */
function initMagnetic() {
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

export function initMotion() {
  initSplitTitles();
  initReveal();
  initSmoothScroll();
  initScrollUI();
  initSpotlight();
  initMagnetic();
}
