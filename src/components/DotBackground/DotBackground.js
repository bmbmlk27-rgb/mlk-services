/**
 * Fond animé en pointillés (canvas plein écran, fixé derrière le site).
 * - Une vague lumineuse parcourt la grille de points en continu.
 * - Les points proches du curseur grossissent et prennent la couleur d'accent.
 * - Léger effet de parallaxe au défilement.
 * - S'adapte au thème clair / sombre, se met en pause quand l'onglet est caché,
 *   et reste statique si l'utilisateur a demandé moins d'animations.
 */
export function initDotBackground() {
  const canvas = document.createElement('canvas');
  canvas.className = 'dot-background';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  let width = 0;
  let height = 0;
  let spacing = 28;
  let dpr = 1;
  let dotRGB = '255,255,255';
  let accentRGB = '255,140,0';
  let baseAlpha = 0.16;

  const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
  let scrollY = window.scrollY;
  let rafId = null;
  let running = false;

  function readTheme() {
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    dotRGB = light ? '20,20,20' : '255,255,255';
    baseAlpha = light ? 0.13 : 0.14;
    accentRGB = light ? '230,110,0' : '255,145,30';
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    spacing = width < 640 ? 34 : width < 1024 ? 30 : 28;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!running) draw(0);
  }

  function draw(time) {
    const t = time * 0.001;
    ctx.clearRect(0, 0, width, height);

    // Parallaxe : la grille glisse plus lentement que la page
    const offsetY = -((scrollY * 0.25) % spacing);
    const radius = 150;
    const radius2 = radius * radius;

    for (let y = offsetY; y < height + spacing; y += spacing) {
      for (let x = spacing / 2; x < width + spacing; x += spacing) {
        // Vague diagonale qui traverse l'écran
        const wave = Math.sin(t * 1.1 + x * 0.012 + y * 0.008) * 0.5 + 0.5;
        // Deuxième vague plus lente pour un rendu organique
        const wave2 = Math.sin(t * 0.6 - x * 0.006 + y * 0.011) * 0.5 + 0.5;
        const pulse = wave * 0.65 + wave2 * 0.35;

        let r = 0.8 + pulse * 0.9;
        let alpha = baseAlpha + pulse * 0.16;
        let color = dotRGB;
        let px = x;
        let py = y;

        // Interaction avec le curseur
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < radius2) {
          const d = Math.sqrt(d2);
          const f = 1 - d / radius;
          const ease = f * f;
          r += ease * 2.2;
          alpha = Math.min(1, alpha + ease * 0.75);
          // Les points s'écartent légèrement du curseur
          if (d > 0.01) {
            px += (dx / d) * ease * 10;
            py += (dy / d) * ease * 10;
          }
          if (f > 0.15) color = accentRGB;
        }

        ctx.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function loop(time) {
    // Le point d'influence suit la souris avec douceur
    mouse.x += (mouse.tx - mouse.x) * 0.12;
    mouse.y += (mouse.ty - mouse.y) * 0.12;
    draw(time);
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running || reduceMotion) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  readTheme();
  resize();

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    if (!running) draw(0);
  }, { passive: true });

  if (finePointer) {
    window.addEventListener('pointermove', (e) => {
      if (mouse.x < -1000) { mouse.x = e.clientX; mouse.y = e.clientY; }
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    }, { passive: true });
    document.addEventListener('pointerleave', () => {
      mouse.tx = -9999;
      mouse.ty = -9999;
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  // Mise à jour des couleurs au changement de thème
  new MutationObserver(() => {
    readTheme();
    if (!running) draw(0);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  start();
}
