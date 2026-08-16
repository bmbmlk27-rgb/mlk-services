export function createHero() {
  const heroHTML = `
    <section class="hero" id="hero">
      <div class="hero__container">
        <!-- Colonne gauche : texte -->
        <div class="hero__content">
          <p class="hero__subtitle">MLK SERVICES</p>
          <h1 class="hero__title">
            <span class="line">Étudiant passionné,</span>
            <span class="line">à votre service.</span>
          </h1>
          <div class="hero__tagline">
            <span>CRÉEZ.</span>
            <span>DÉVELOPPEZ.</span>
            <span>DOMINEZ.</span>
          </div>
          <p class="hero__description">
            Je suis étudiant en informatique, passionné par le digital. Je mets mes compétences à la disposition des entrepreneurs, étudiants et particuliers : création de sites web, visibilité sur les réseaux sociaux, services digitaux personnalisés. Ensemble, donnons vie à vos projets.
          </p>
          <div class="hero__actions">
            <a href="#services" class="btn btn-primary">
              Découvrir mes services <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" class="btn btn-secondary">
              Me contacter
            </a>
          </div>
        </div>

        <!-- Colonne droite : logos flottants (sans photo) -->
        <div class="hero__logos-wrapper">
          <div class="logos-orbit">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" class="tech-logo html" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" class="tech-logo css" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="tech-logo js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" class="tech-logo vite" />
            <img src="https://cdn.simpleicons.org/greensock/88CE02" alt="GSAP" class="tech-logo gsap" />
          </div>
        </div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', heroHTML);
  }
}