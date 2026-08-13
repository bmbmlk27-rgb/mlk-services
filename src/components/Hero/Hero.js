export function createHero() {
  const heroHTML = `
    <section class="hero" id="hero">
      <div class="hero__container">
        <!-- Colonne gauche -->
        <div class="hero__content">
          <p class="hero__subtitle">MLK SERVICES</p>
          <h1 class="hero__title">
            <span class="line">CRÉEZ.</span>
            <span class="line">DÉVELOPPEZ.</span>
            <span class="line">DOMINEZ.</span>
          </h1>
          <p class="hero__description">
            Des solutions digitales modernes pour développer votre présence en ligne, votre visibilité et vos projets.
          </p>
          <div class="hero__actions">
            <a href="/services" class="btn btn-primary">
              Découvrir nos services <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/contact" class="btn btn-secondary">
              Nous contacter
            </a>
          </div>
        </div>

        <!-- Colonne droite : photo -->
        <div class="hero__image-wrapper">
          <img src="/images/avatar.jpeg" alt="MLK" class="hero__image" loading="eager" />
          <!-- Logos flottants avec Font Awesome et couleurs officielles -->
          <i class="fa-brands fa-html5 tech-logo html"></i>
          <i class="fa-brands fa-css3-alt tech-logo css"></i>
          <i class="fa-brands fa-js tech-logo js"></i>
          <span class="tech-logo vite">V</span>
        </div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', heroHTML);
  }
}