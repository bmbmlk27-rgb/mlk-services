export function initIntro() {
  const STORAGE_KEY = 'mlkLoaderSeen';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let alreadySeen = false;
  try { alreadySeen = sessionStorage.getItem(STORAGE_KEY) === '1'; } catch (e) {}

  // Affiché une fois par visite (onglet), pas à chaque rechargement
  if (alreadySeen) return;

  // Créer le loader
  const DEPTH = 14; // nombre de couches pour l'épaisseur 3D du logo
  const layers = Array.from({ length: DEPTH }, (_, i) =>
    `<span class="logo3d__layer" style="--z:${i}"></span>`).join('');

  const loader = document.createElement('div');
  loader.className = 'site-loader';
  loader.id = 'siteLoader';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-label', 'Chargement de MLK Services');
  loader.innerHTML = `
    <div class="loader-glow" aria-hidden="true"></div>
    <div class="loader-floor" aria-hidden="true"></div>
    <div class="loader-content">
      <div class="logo3d-scene" aria-hidden="true">
        <div class="logo3d">
          ${layers}
          <span class="logo3d__face"></span>
          <span class="logo3d__shine"></span>
        </div>
        <div class="logo3d-shadow"></div>
      </div>
      <p class="loader-tagline">
        <span>Création web</span><i></i><span>Visibilité</span><i></i><span>Performance</span>
      </p>
      <div class="loader-progress" aria-hidden="true">
        <div class="loader-progress__bar"></div>
      </div>
      <span class="loader-percent" aria-hidden="true">0%</span>
    </div>
  `;

  document.body.appendChild(loader);

  try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
  document.documentElement.style.overflow = 'hidden';

  if (reduceMotion) loader.classList.add('reduced');

  const totalDelay = reduceMotion ? 650 : 3400;

  // Compteur de pourcentage synchronisé avec la barre
  const percent = loader.querySelector('.loader-percent');
  if (percent && !reduceMotion) {
    const start = performance.now() + 500;
    const duration = totalDelay - 900;
    const tick = (now) => {
      const p = Math.max(0, Math.min((now - start) / duration, 1));
      const eased = 1 - Math.pow(1 - p, 2.2);
      percent.textContent = `${Math.round(eased * 100)}%`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  } else if (percent) {
    percent.textContent = '100%';
  }

  setTimeout(() => {
    loader.classList.add('is-done');
    document.documentElement.style.overflow = '';
    setTimeout(() => loader.remove(), 1000);
  }, totalDelay);
}