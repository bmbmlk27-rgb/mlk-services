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
        <div class="contact-info" data-reveal="left">
          <span class="contact-label section-tag">Contact</span>
          <h2 class="contact-title" data-split>Parlons de votre projet.</h2>
          <p class="contact-text">
            Besoin d'un site, de plus de visibilité sur les réseaux ou d'un outil sur mesure ? Remplissez le formulaire
            en expliquant votre besoin avec vos mots : je vous recontacte pour en discuter et vous proposer une solution.
            Vous préférez aller plus vite ? <strong>Écrivez-moi directement sur WhatsApp.</strong>
          </p>

          <div class="contact-methods" data-reveal-group="80">
            <a href="mailto:${TO_EMAIL}" class="contact-method" data-reveal>
              <i class="fa-solid fa-envelope contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>Email</strong>
                <span>${TO_EMAIL}</span>
              </div>
            </a>
            <a href="tel:+2250787913032" class="contact-method" data-reveal>
              <i class="fa-solid fa-phone contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>Téléphone</strong>
                <span>+225 07 87 91 30 32</span>
              </div>
            </a>
            <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" class="contact-method" data-reveal>
              <i class="fa-brands fa-whatsapp contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>WhatsApp — le plus rapide</strong>
                <span>+225 07 87 91 30 32</span>
              </div>
            </a>
            <div class="contact-method" data-reveal>
              <i class="fa-solid fa-location-dot contact-method-icon"></i>
              <div class="contact-method-text">
                <strong>Localisation</strong>
                <span>Abidjan, Côte d'Ivoire · projets à distance partout</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne droite : formulaire -->
        <div class="contact-form" data-reveal="right" data-spotlight>
          <div class="contact-form-head">
            <h3>Envoyez votre demande</h3>
            <p>Les champs marqués d'une <span class="req">*</span> sont obligatoires.</p>
          </div>
          <form id="formContact">
            <div class="form-group">
              <label for="name" class="form-label">Nom complet <span class="req">*</span></label>
              <input type="text" id="name" name="name" class="form-input" required placeholder="Ex. : Aïcha Koné" />
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Adresse email <span class="req">*</span></label>
              <input type="email" id="email" name="email" class="form-input" required placeholder="vous@exemple.com" />
            </div>
            <div class="form-group">
              <label for="phone" class="form-label">Téléphone / WhatsApp</label>
              <input type="tel" id="phone" name="phone" class="form-input" placeholder="Optionnel — pour vous répondre plus vite" />
            </div>
            <div class="form-group">
              <label for="project" class="form-label">De quoi avez-vous besoin ?</label>
              <select id="project" name="project" class="form-input">
                <option value="Web">Création de site web</option>
                <option value="TikTok / Réseaux sociaux">TikTok / Réseaux sociaux</option>
                <option value="Pronostics / Sport">Pronostics / Bots de jeux</option>
                <option value="Sur mesure">Outil ou application sur mesure</option>
                <option value="Autre">Autre demande</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Votre message <span class="req">*</span></label>
              <textarea id="message" name="message" class="form-textarea" required placeholder="Décrivez votre activité, ce que vous voulez obtenir, votre délai et, si possible, votre budget."></textarea>
            </div>
            <button type="submit" class="submit-btn" id="submitBtn">
              <span>Envoyer ma demande</span>
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
      status.textContent = 'Merci de remplir votre nom, votre email et votre message.';
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
      status.textContent = '✅ Merci ! Votre demande a bien été envoyée. Je vous recontacte très vite.';
      status.style.color = '#2ecc71';
      form.reset();
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      let detail = '';
      if (error.text) detail = ' - ' + error.text;
      else if (error.message) detail = ' - ' + error.message;
      status.textContent = '❌ L\'envoi a échoué (' + error.status + detail + '). Réessayez ou écrivez-moi sur WhatsApp.';
      status.style.color = '#ff4757';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Envoyer ma demande</span> <i class="fa-solid fa-paper-plane"></i>';
    }
  });
}