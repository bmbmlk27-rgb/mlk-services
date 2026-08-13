// Remplacez par votre clé publique EmailJS
const EMAILJS_PUBLIC_KEY = "VOTRE_PUBLIC_KEY_ICI";
const EMAILJS_SERVICE_ID = "service_4lh8o9u";
const EMAILJS_TEMPLATE_ID = "template_dsl4u2i";

export function createContact() {
  const contactHTML = `
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <!-- Colonne gauche : informations -->
        <div class="contact-info">
          <span class="contact-subtitle">CONTACT</span>
          <h2 class="contact-title">Parlons de votre projet</h2>
          <p class="contact-description">
            Une question, un devis, une collaboration ? Remplissez le formulaire ou contactez-moi directement.
          </p>
          <div class="contact-methods">
            <a href="mailto:bmbmlk27@gmail.com" class="contact-method">
              <div class="contact-method-icon"><i class="fa-solid fa-envelope"></i></div>
              <div class="contact-method-text">
                <strong>Email</strong>
                <span>bmbmlk27@gmail.com</span>
              </div>
            </a>
            <a href="tel:+2250787913032" class="contact-method">
              <div class="contact-method-icon"><i class="fa-solid fa-phone"></i></div>
              <div class="contact-method-text">
                <strong>Téléphone</strong>
                <span>+225 07 87 91 30 32</span>
              </div>
            </a>
            <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" class="contact-method">
              <div class="contact-method-icon"><i class="fa-brands fa-whatsapp"></i></div>
              <div class="contact-method-text">
                <strong>WhatsApp</strong>
                <span>+225 07 87 91 30 32</span>
              </div>
            </a>
            <div class="contact-method">
              <div class="contact-method-icon"><i class="fa-solid fa-location-dot"></i></div>
              <div class="contact-method-text">
                <strong>Localisation</strong>
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne droite : formulaire -->
        <div class="contact-form" id="contactForm">
          <form id="formContact">
            <div class="form-group">
              <label for="name" class="form-label">Nom complet</label>
              <input type="text" id="name" name="name" class="form-input" required placeholder="Votre nom" />
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" name="email" class="form-input" required placeholder="Votre email" />
            </div>
            <div class="form-group">
              <label for="phone" class="form-label">Téléphone</label>
              <input type="tel" id="phone" name="phone" class="form-input" placeholder="Votre numéro (optionnel)" />
            </div>
            <div class="form-group">
              <label for="project" class="form-label">Type de projet</label>
              <select id="project" name="project" class="form-input">
                <option value="Web">Création de site web</option>
                <option value="TikTok / Réseaux sociaux">TikTok / Réseaux sociaux</option>
                <option value="Pronostics / Sport">Pronostics / Sport</option>
                <option value="Autre">Autre demande</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" name="message" class="form-textarea" required placeholder="Décrivez votre projet..."></textarea>
            </div>
            <button type="submit" class="submit-btn" id="submitBtn">
              <span>Envoyer le message</span>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
            <p id="formStatus" style="margin-top: 1rem; font-size: var(--text-sm); text-align: center;"></p>
          </form>
        </div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', contactHTML);
    initContactForm();
  }
}

function initContactForm() {
  // Initialiser EmailJS si disponible
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form = document.getElementById('formContact');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Récupérer les champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Veuillez remplir tous les champs obligatoires.';
      status.style.color = '#ff4757';
      return;
    }

    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Envoi en cours...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      project: project,
      message: message,
      to_email: 'bmbmlk27@gmail.com'
    };

    try {
      if (typeof emailjs !== 'undefined') {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      } else {
        throw new Error('EmailJS non chargé');
      }

      status.textContent = '✅ Message envoyé avec succès ! Je vous répondrai rapidement.';
      status.style.color = '#2ecc71';
      form.reset();
    } catch (error) {
      console.error('Erreur envoi:', error);
      status.textContent = '❌ Une erreur est survenue. Veuillez réessayer.';
      status.style.color = '#ff4757';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Envoyer le message</span> <i class="fa-solid fa-paper-plane"></i>';
    }
  });
}