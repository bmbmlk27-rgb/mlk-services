export default function About() {
  return `
    <section class="about-page" id="about">
      <div class="about-container">
        <!-- Photo -->
        <div class="about-visual" data-reveal="left">
          <div class="about-frame">
            <img src="/images/avatar.jpeg" alt="Portrait de MLK, fondateur de MLK Services" class="about-image" />
            <span class="about-badge"><i class="fa-solid fa-location-dot"></i> Abidjan, Côte d'Ivoire</span>
          </div>
        </div>

        <!-- Contenu texte -->
        <div class="about-content" data-reveal-group="110">
          <span class="about-label section-tag" data-reveal>À propos</span>
          <h2 class="about-title" data-reveal data-split>Qui se cache derrière MLK Services ?</h2>
          <p class="about-subtitle" data-reveal>Un étudiant en informatique passionné, qui aide les autres à réussir en ligne.</p>
          <p class="about-text" data-reveal>
            Je m'appelle MLK. Étudiant en informatique, j'ai créé MLK Services en voyant autour de moi des commerçants,
            des entrepreneurs et des étudiants avec de très bonnes idées… mais <strong>invisibles sur Internet</strong>.
          </p>
          <p class="about-text" data-reveal>
            Ma méthode est simple : <strong>je vous écoute</strong>, je vous explique les choses sans jargon technique,
            je vous propose une solution adaptée à votre budget et <strong>je vous accompagne jusqu'au résultat</strong>,
            même après la livraison.
          </p>
          <ul class="about-values" data-reveal>
            <li><i class="fa-solid fa-check"></i> <span><strong>Écoute et transparence</strong> — vous savez toujours où en est votre projet</span></li>
            <li><i class="fa-solid fa-check"></i> <span><strong>Sur mesure</strong> — chaque solution est pensée pour vous, pas copiée-collée</span></li>
            <li><i class="fa-solid fa-check"></i> <span><strong>Accompagnement</strong> — je reste disponible après la mise en ligne</span></li>
            <li><i class="fa-solid fa-check"></i> <span><strong>Résultats concrets</strong> — plus de visibilité, plus de contacts, plus de clients</span></li>
          </ul>
          <a href="#contact" class="about-link" data-reveal>Discutons de votre projet <i class="fa-solid fa-arrow-right"></i></a>
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