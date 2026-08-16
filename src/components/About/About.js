export default function About() {
  return `
    <section class="about-page" id="about">
      <div class="about-container">
        <!-- Photo -->
        <div class="about-visual">
          <img src="/images/avatar.jpeg" alt="MLK" class="about-image" />
        </div>

        <!-- Contenu texte -->
        <div class="about-content">
          <span class="about-label">À propos</span>
          <h2 class="about-title">MLK SERVICES</h2>
          <p class="about-subtitle">Création, digital, visibilité, performance.</p>
          <p class="about-text">
            MLK Services est né d'une passion pour le numérique et d'une envie d'aider les autres à réussir en ligne.
            Je conçois des solutions web et des stratégies social media adaptées à chaque profil : entrepreneurs, étudiants, particuliers.
          </p>
          <p class="about-text">
            Mon approche est simple : comprendre vos objectifs, proposer une solution claire, et vous accompagner jusqu'au résultat.
            Chaque projet est unique, et mérite une attention personnalisée.
          </p>
          <ul class="about-values">
            <li><i class="fa-solid fa-check"></i> Écoute et transparence</li>
            <li><i class="fa-solid fa-check"></i> Solutions sur mesure</li>
            <li><i class="fa-solid fa-check"></i> Accompagnement continu</li>
            <li><i class="fa-solid fa-check"></i> Résultats mesurables</li>
          </ul>
          <a href="#contact" class="about-link">Discutons de votre projet <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

export function initAboutAnimations() {
  const aboutSection = document.querySelector('.about-page');
  if (!aboutSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });

  observer.observe(aboutSection);
}