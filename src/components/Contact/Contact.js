export function createContact() {
  const contactHTML = `
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <!-- Informations -->
        <div class="contact-info">
          <span class="contact-subtitle">CONTACT</span>
          <h2 class="contact-title">Parlons de votre projet</h2>
          <p class="contact-description">
            Une idée, un projet, une question ? Contactez-moi et je vous répondrai dans les plus brefs délais.
          </p>
          <div class="contact-methods">
            <!-- Email -->
            <a href="mailto:contact@mlkservices.com" class="contact-method" aria-label="Envoyer un email">
              <div class="contact-method-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="contact-method-text">
                <strong>Email</strong>
                <span>contact@mlkservices.com</span>
              </div>
            </a>
            <!-- WhatsApp -->
            <a href="https://wa.me/22500000000" target="_blank" rel="noopener" class="contact-method" aria-label="Discuter sur WhatsApp">
              <div class="contact-method-icon">
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div class="contact-method-text">
                <strong>WhatsApp</strong>
                <span>+225 00 00 00 00</span>
              </div>
            </a>
            <!-- Téléphone -->
            <a href="tel:+22500000000" class="contact-method" aria-label="Appeler">
              <div class="contact-method-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="contact-method-text">
                <strong>Téléphone</strong>
                <span>+225 00 00 00 00</span>
              </div>
            </a>
            <!-- Localisation -->
            <div class="contact-method">
              <div class="contact-method-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="contact-method-text">
                <strong>Localisation</strong>
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire -->
        <form class="contact-form" id="contactForm" novalidate>
          <div class="form-group">
            <label for="name" class="form-label">Nom complet</label>
            <input type="text" id="name" name="name" class="form-input" placeholder="Votre nom" required />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="vous@exemple.com" required />
          </div>
          <div class="form-group">
            <label for="subject" class="form-label">Sujet</label>
            <input type="text" id="subject" name="subject" class="form-input" placeholder="Type de projet" />
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" name="message" class="form-textarea" placeholder="Décrivez votre projet..." required></textarea>
          </div>
          <button type="submit" class="submit-btn">
            <i class="fa-solid fa-paper-plane"></i> Envoyer le message
          </button>
        </form>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', contactHTML);
    initContactReveal();
    initFormHandler();
  }
}

function initContactReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.contact-info, .contact-form').forEach(el => observer.observe(el));
}

function initFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple feedback (à remplacer par un vrai envoi)
    const btn = form.querySelector('.submit-btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Message envoyé !';
    btn.style.background = '#25D366';
    btn.style.color = '#fff';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.pointerEvents = '';
    }, 3000);
    form.reset();
  });
}