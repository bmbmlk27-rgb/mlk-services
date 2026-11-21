import emailjs from '@emailjs/browser';
// Paramètres EmailJS
const EMAILJS_PUBLIC_KEY = "Jg4ZhfTuanTdO04FP";
const EMAILJS_SERVICE_ID = "service_4lh8o9u";
const EMAILJS_TEMPLATE_ID = "template_dsl4u2i";
const TO_EMAIL = "bmbmlk27@gmail.com";

export default function Contact() {
  const arrow = '<span class="contact-card__arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>';
  return `
    <section class="contact-page" id="contact">
      <!-- Décor : halo, grand titre en filigrane, lignes -->
      <div class="contact-bg" aria-hidden="true">
        <div class="contact-bg__glow"></div>
        <span class="contact-bg__word">CONTACT</span>
        <svg class="contact-bg__lines contact-bg__lines--left" viewBox="0 0 300 120" fill="none">
          <path d="M0 10 H80 L130 70 H260" />
          <circle cx="260" cy="70" r="4" />
        </svg>
        <svg class="contact-bg__lines contact-bg__lines--right" viewBox="0 0 300 160" fill="none">
          <path d="M300 30 H190 L150 0" />
          <path d="M300 70 H230 L170 10" />
          <path d="M40 40 H180 L300 150" />
          <circle cx="40" cy="40" r="4" />
        </svg>
      </div>

      <div class="contact-container">
        <!-- Colonne gauche : informations -->
        <div class="contact-info">
          <span class="contact-label"><i class="fa-regular fa-comment-dots"></i> Contact</span>
          <h2 class="contact-title">Parlons de votre projet</h2>
          <p class="contact-text">
            Une question, un devis, une collaboration ? Remplissez le formulaire ou contactez-moi directement.
          </p>

          <div class="contact-methods">
            <a href="mailto:${TO_EMAIL}" class="contact-method">
              <span class="contact-method-icon"><i class="fa-regular fa-envelope"></i></span>
              <span class="contact-method-text">
                <strong>Écrivez-moi</strong>
                <span>${TO_EMAIL}</span>
              </span>
              ${arrow}
            </a>
            <a href="tel:+2250787913032" class="contact-method">
              <span class="contact-method-icon"><i class="fa-solid fa-phone-volume"></i></span>
              <span class="contact-method-text">
                <strong>Appelez-moi</strong>
                <span>+225 07 87 91 30 32</span>
              </span>
              ${arrow}
            </a>
            <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" class="contact-method">
              <span class="contact-method-icon"><i class="fa-brands fa-whatsapp"></i></span>
              <span class="contact-method-text">
                <strong>WhatsApp</strong>
                <span>Réponse rapide</span>
              </span>
              ${arrow}
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Abidjan%2C%20C%C3%B4te%20d%27Ivoire" target="_blank" rel="noopener" class="contact-method">
              <span class="contact-method-icon"><i class="fa-solid fa-location-dot"></i></span>
              <span class="contact-method-text">
                <strong>Localisation</strong>
                <span>Abidjan, Côte d'Ivoire</span>
              </span>
              ${arrow}
            </a>
          </div>
        </div>

        <!-- Colonne droite : formulaire -->
        <div class="contact-form">
          <form id="formContact">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Nom complet</label>
                <input type="text" id="name" name="name" class="form-input" required placeholder="Nom complet" autocomplete="name" />
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" required placeholder="Email" autocomplete="email" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone" class="form-label">Téléphone</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="Téléphone (optionnel)" autocomplete="tel" />
              </div>
              <div class="form-group">
                <label for="project" class="form-label">Type de projet</label>
                <select id="project" name="project" class="form-input">
                  <option value="Web">Création de site web</option>
                  <option value="TikTok / Réseaux sociaux">TikTok / Réseaux sociaux</option>
                  <option value="Pronostics / Sport">Pronostics / Sport</option>
                  <option value="Sur mesure">Sur mesure</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>
            </div>
            <div class="form-group form-group--grow">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" name="message" class="form-textarea" required placeholder="Message"></textarea>
            </div>
            <button type="submit" class="submit-btn" id="submitBtn">
              <span>Envoyer le message</span>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
            <p id="formStatus" class="form-status" role="status"></p>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS SDK non chargé. Ajoutez le script EmailJS dans index.html.');
    return;
  }

  emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById('formContact');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (!form || !status || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

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

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Envoi en cours...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      project: project,
      message: message,
      to_email: TO_EMAIL
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      status.textContent = '✅ Message envoyé avec succès ! Je vous répondrai rapidement.';
      status.style.color = '#2ecc71';
      form.reset();
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      let detail = '';
      if (error.text) detail = ' - ' + error.text;
      else if (error.message) detail = ' - ' + error.message;
      status.textContent = '❌ Erreur lors de l\'envoi : ' + error.status + detail;
      status.style.color = '#ff4757';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Envoyer le message</span> <i class="fa-solid fa-paper-plane"></i>';
    }
  });
}