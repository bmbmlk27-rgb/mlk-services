export function createAbout() {
  const aboutHTML = `
    <section class="about-section" id="about">
      <div class="about-container">
        <!-- Grande photo à gauche -->
        <img src="/src/assets/images/avatar.jpeg" alt="MLK" class="about-image" loading="lazy" />

        <!-- Texte à droite -->
        <div class="about-content">
          <span class="about-subtitle">À PROPOS</span>
          <h2 class="about-title">MLK SERVICES</h2>
          <div class="about-keywords">
            <span>Création</span>
            <span>Digital</span>
            <span>Visibilité</span>
            <span>Performance</span>
          </div>
          <p class="about-description">
            Je suis MLK, développeur web et consultant digital. Passionné par les nouvelles technologies, 
            j’accompagne les entrepreneurs, les marques et les particuliers dans la création et l’optimisation 
            de leur présence en ligne. Mon objectif : vous aider à atteindre vos ambitions grâce à des solutions 
            digitales modernes, performantes et sur mesure.
          </p>
          <p class="about-description">
            Basé en Côte d’Ivoire, je combine expertise technique et vision stratégique pour offrir 
            des services de qualité, adaptés aux réalités du marché africain et international.
          </p>
          <ul class="about-values">
            <li>Approche personnalisée : chaque projet est unique</li>
            <li>Respect des délais et transparence</li>
            <li>Veille technologique permanente</li>
            <li>Accompagnement de A à Z</li>
          </ul>
        </div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', aboutHTML);
    // Animation au scroll
    initAboutReveal();
  }
}

function initAboutReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  const container = document.querySelector('.about-container');
  if (container) observer.observe(container);
}