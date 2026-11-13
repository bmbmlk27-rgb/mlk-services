export function createHero() {
  const heroHTML = `
    <section class="hero" id="hero">
      <div class="hero__container">
        <!-- Colonne gauche : texte -->
        <div class="hero__content">
          <p class="hero__subtitle section-tag">MLK SERVICES<span class="hero__location">&nbsp;· Abidjan, Côte d'Ivoire</span></p>
          <h1 class="hero__title" data-split>
            <span class="line">Votre activité mérite</span>
            <span class="line text-gradient">d'être vue en ligne.</span>
          </h1>
          <div class="hero__tagline">
            <span><i class="fa-solid fa-laptop-code"></i> Sites web</span>
            <span><i class="fa-brands fa-tiktok"></i> Réseaux sociaux</span>
            <span><i class="fa-solid fa-gears"></i> Outils sur mesure</span>
          </div>
          <p class="hero__description">
            Je crée des <strong>sites web modernes</strong>, je fais <strong>grandir vos comptes TikTok, Instagram et Facebook</strong>
            et je développe des <strong>outils digitaux sur mesure</strong> pour les entrepreneurs, commerçants, étudiants et particuliers.
            Vous m'expliquez votre besoin, je vous propose une solution claire et je vous accompagne jusqu'au résultat.
          </p>
          <div class="hero__actions">
            <a href="#services" class="btn btn-primary" data-magnetic>
              Voir ce que je propose <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" class="btn btn-secondary" data-magnetic>
              <i class="fa-brands fa-whatsapp"></i> Demander un devis
            </a>
          </div>
        </div>

        <!-- Colonne droite : logos flottants -->
        <div class="hero__logos-wrapper">
          <div class="hero__rings" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="logos-orbit">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" class="tech-logo html" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" class="tech-logo css" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="tech-logo js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" class="tech-logo vite" />
            <img src="https://cdn.simpleicons.org/greensock/88CE02" alt="GSAP" class="tech-logo gsap" />
          </div>
        </div>
      </div>

      <a href="#services" class="hero__scroll" aria-label="Descendre vers les services">
        <span class="hero__scroll-mouse"><span></span></span>
        <span class="hero__scroll-text">Découvrir</span>
      </a>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', heroHTML);
  }
}
