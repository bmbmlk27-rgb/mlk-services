export function initIntro() {
  // Vérifier si l'intro a déjà été vue
  if (localStorage.getItem('mlk-intro-seen') === 'true') {
    return; // Ne rien faire
  }

  // Créer l'overlay
  const overlay = document.createElement('div');
  overlay.className = 'intro-overlay';
  overlay.innerHTML = `
    <div class="spiral-container">
      <div class="spiral"></div>
      <div class="spiral"></div>
      <div class="spiral"></div>
      <div class="spiral"></div>
      <div class="spiral"></div>
    </div>
    <div class="welcome-message" id="welcomeText">BIENVENUE CHEZ MLK SERVICES ✨</div>
    <div class="loader-final" id="loaderFinal">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <button class="skip-intro" id="skipIntro">Passer l'intro</button>
  `;

  document.body.appendChild(overlay);

  const welcomeText = document.getElementById('welcomeText');
  const loaderFinal = document.getElementById('loaderFinal');
  const skipBtn = document.getElementById('skipIntro');

  // Séquençage
  // 1. Après l'animation de la spirale (1.2s), afficher le message
  setTimeout(() => {
    welcomeText.classList.add('visible');
  }, 1200);

  // 2. Après 2s supplémentaires, afficher le loader et masquer le message
  setTimeout(() => {
    welcomeText.classList.remove('visible');
    loaderFinal.classList.add('visible');
  }, 3200);

  // 3. Après encore 2s, masquer tout l'overlay
  const hideOverlay = () => {
    overlay.classList.add('hidden');
    // Sauvegarder dans localStorage
    localStorage.setItem('mlk-intro-seen', 'true');
    // Supprimer l'overlay après la transition
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 600);
  };

  const timeoutHide = setTimeout(hideOverlay, 5200);

  // Skip
  const skipIntro = () => {
    clearTimeout(timeoutHide);
    hideOverlay();
  };

  skipBtn.addEventListener('click', skipIntro);

  // Optionnel : appuyer sur Échap pour passer
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      skipIntro();
      document.removeEventListener('keydown', escHandler);
    }
  });
}