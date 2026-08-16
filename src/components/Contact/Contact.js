// Paramètres EmailJS
const EMAILJS_PUBLIC_KEY = "Jg4ZhfTuanTdO04FP";
const EMAILJS_SERVICE_ID = "service_4lh8o9u";
const EMAILJS_TEMPLATE_ID = "template_dsl4u2i";
const TO_EMAIL = "bmbmlk27@gmail.com";

export default function Contact() {
  return `
    <section class="contact-page" id="contact">
      <div class="contact-container">
        <!-- Colonne gauche : informations -->
        <div class="contact-info">
          <span class="contact-label">Contact</span>
          <h2 class="contact-title">Parlons de votre projet</h2>
          <p class="contact-text">
            Une question, un devis, une collaboration ? Remplissez le formulaire ou contactez-moi directement.
          </p>

          <div class="contact-methods">
            <a href="mailto:${TO_EMAIL}" class="contact-method">
              <i class="fa-solid fa-envelope contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>Email</strong>
                <span>${TO_EMAIL}</span>
              </div>
            </a>
            <a href="tel:+2250787913032" class="contact-method">
              <i class="fa-solid fa-phone contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>Téléphone</strong>
                <span>+225 07 87 91 30 32</span>
              </div>
            </a>
            <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" class="contact-method">
              <i class="fa-brands fa-whatsapp contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>WhatsApp</strong>
                <span>+225 07 87 91 30 32</span>
              </div>
            </a>
            <div class="contact-method">
              <i class="fa-solid fa-location-dot contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>Localisation</strong>
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne droite : formulaire -->
        <div class="contact-form">
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
                <option value="Sur mesure">Sur mesure</option>
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
            <p id="formStatus" class="form-status"></p>
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