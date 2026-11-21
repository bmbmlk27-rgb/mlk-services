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

        <!-- Colonne droite : portrait + badges -->
        <div class="hero__visual">
          <div class="hero__portrait">
            <img src="/images/avatar.jpeg" alt="MLK, fondateur de MLK Services" width="420" height="520" fetchpriority="high" />
            <span class="hero__status"><span class="hero__status-dot"></span>Disponible pour vos projets</span>
          </div>
          <div class="hero__badge hero__badge--web"><i class="fa-solid fa-code"></i> Sites web</div>
          <div class="hero__badge hero__badge--social"><i class="fa-brands fa-tiktok"></i> TikTok &amp; réseaux</div>
          <div class="hero__badge hero__badge--custom"><i class="fa-solid fa-gears"></i> Sur mesure</div>
        </div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', heroHTML);
  }
}