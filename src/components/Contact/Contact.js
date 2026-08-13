// Remplacez par votre clé publique EmailJS
const EMAILJS_PUBLIC_KEY = "Jg4ZhfTuanTdO04FP";
const EMAILJS_SERVICE_ID = "service_4lh8o9u";
const EMAILJS_TEMPLATE_ID = "template_dsl4u2i";

function initContactForm() {
  if (typeof emailjs === 'undefined') {
    console.error('❌ EmailJS SDK non chargé. Vérifiez le script dans index.html.');
    return;
  }

  emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById('formContact');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (!form || !status || !submitBtn) {
    console.error('❌ Éléments du formulaire introuvables');
    return;
  }

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
      to_email: 'bmbmlk27@gmail.com'
    };

    console.log('📤 Envoi EmailJS avec paramètres:', templateParams);

    try {
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      console.log('✅ Réponse EmailJS:', response);
      status.textContent = '✅ Message envoyé avec succès ! Je vous répondrai rapidement.';
      status.style.color = '#2ecc71';
      form.reset();
    } catch (error) {
  console.error('Erreur envoi:', error);
  let detail = '';
  if (error.text) detail = ' - ' + error.text;
  else if (error.message) detail = ' - ' + error.message;
  status.textContent = '❌ Erreur : ' + error.status + detail;
  status.style.color = '#ff4757';
    }
      
     finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Envoyer le message</span> <i class="fa-solid fa-paper-plane"></i>';
    }
  });
}