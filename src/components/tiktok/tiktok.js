export function createTikTokSection() {
  const tiktokHTML = `
    <div class="service-section reverse" id="tiktok">
      <div class="service-visual">
        <div class="social-scene">
          <i class="fa-brands fa-tiktok tiktok-float"></i>
          <i class="fa-brands fa-tiktok tiktok-float"></i>
          <i class="fa-brands fa-tiktok tiktok-float"></i>
          <i class="fa-solid fa-heart heart-float"></i>
          <i class="fa-solid fa-heart heart-float"></i>
          <i class="fa-solid fa-eye eye-float"></i>
          <i class="fa-solid fa-eye eye-float"></i>
          <div class="chart-bars">
            <div class="bar" style="height:30px"></div>
            <div class="bar" style="height:50px"></div>
            <div class="bar" style="height:70px"></div>
            <div class="bar" style="height:60px"></div>
            <div class="bar" style="height:80px"></div>
          </div>
        </div>
      </div>
      <div class="service-text">
        <div class="service-heading">
          <span class="service-giant-number">02</span>
          <div class="service-heading-text">
            <h2 class="service-main-title">RÉSEAUX SOCIAUX</h2>
            <p class="service-subtitle">Développez votre visibilité</p>
          </div>
        </div>
        <p class="service-intro">
          Création et développement de comptes, amélioration de la présence digitale, services TikTok et réseaux sociaux.
        </p>
        <ul class="service-checks">
          <li>Création de comptes</li>
          <li>Développement de visibilité</li>
          <li>Abonnés, likes, vues</li>
        </ul>
        <a href="#contact" class="service-cta">
          Discuter de votre projet <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;

  const container = document.getElementById('tiktok-section');
  if (container) container.innerHTML = tiktokHTML;
}