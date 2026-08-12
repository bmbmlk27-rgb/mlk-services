export function createWebSection() {
  const webHTML = `
    <div class="service-section" id="web">
      <div class="service-text">
        <div class="service-heading">
          <span class="service-giant-number">01</span>
          <div class="service-heading-text">
            <h2 class="service-main-title">WEB</h2>
            <p class="service-subtitle">Création digitale</p>
          </div>
        </div>
        <p class="service-intro">
          Nous concevons des sites modernes, rapides et adaptés aux besoins de chaque projet.
        </p>
        <ul class="service-checks">
          <li>Sites vitrines</li>
          <li>E-commerce</li>
          <li>Landing pages</li>
          <li>Refonte</li>
          <li>Solutions personnalisées</li>
        </ul>
        <a href="#contact" class="service-cta">
          Demander un devis <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="service-visual">
        <div class="laptop-scene">
          <div class="laptop-screen">
            <div class="screen-code">
              &lt;html&gt;<br>
              &lt;body&gt;<br>
              &lt;h1&gt;MLK SERVICES&lt;/h1&gt;<br>
              &lt;/body&gt;<br>
              &lt;/html&gt;
            </div>
          </div>
          <div class="laptop-keyboard">
            <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
            <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
            <div class="key"></div><div class="key"></div><div class="key"></div><div class="key"></div>
          </div>
          <div class="laptop-base"></div>
          <i class="fa-brands fa-html5 tech-float html"></i>
          <i class="fa-brands fa-css3-alt tech-float css"></i>
          <i class="fa-brands fa-js tech-float js"></i>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('web-section');
  if (container) container.innerHTML = webHTML;
}