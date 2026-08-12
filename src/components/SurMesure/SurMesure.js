export function createSurMesureSection() {
  const surMesureHTML = `
    <div class="service-section" id="sur-mesure">
      <div class="service-text">
        <div class="service-heading">
          <span class="service-giant-number">03</span>
          <div class="service-heading-text">
            <h2 class="service-main-title">SUR MESURE</h2>
            <p class="service-subtitle">Votre projet, notre expertise</p>
          </div>
        </div>
        <p class="service-intro">
          Un besoin spécifique ? MLK SERVICES s’adapte à toutes vos demandes : intégrations, automatisations, conseils digitaux.
        </p>
        <ul class="service-checks">
          <li>Applications web et mobiles</li>
          <li>Intégration d’API et automatisation</li>
          <li>Chatbots et assistants intelligents</li>
          <li>Maintenance et support technique</li>
          <li>Formation et coaching digital</li>
        </ul>
        <a href="#contact" class="service-cta">
          Parlons de votre besoin <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="service-visual">
        <div class="mechanic-scene">
          <div class="gear-3d gear1"></div>
          <div class="gear-3d gear2"></div>
          <div class="gear-3d gear3"></div>
          <i class="fa-solid fa-wrench wrench"></i>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('sur-mesure-section');
  if (container) container.innerHTML = surMesureHTML;
}