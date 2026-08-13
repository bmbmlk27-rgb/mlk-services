export function initIntro() {
  // Vérifier si l'intro a déjà été vue
 // Toujours afficher l'intro (décommenter pour tester)
// return;

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

  // Séquence
  setTimeout(() => {
    welcomeText.classList.add('visible');
  }, 1200);

  setTimeout(() => {
    welcomeText.classList.remove('visible');
    loaderFinal.classList.add('visible');
  }, 3200);

  const hideOverlay = () => {
    overlay.classList.add('hidden');
    localStorage.setItem('mlk-intro-seen', 'true');
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 600);
  };

  const timeoutHide = setTimeout(hideOverlay, 5200);

  const skipIntro = () => {
    clearTimeout(timeoutHide);
    hideOverlay();
  };

  skipBtn.addEventListener('click', skipIntro);

  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      skipIntro();
      document.removeEventListener('keydown', escHandler);
    }
  });
}