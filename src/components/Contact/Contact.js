import "./Contact.css";

export default function Contact() {



return `

<section class="contact" id="contact">

<div class="container">

<div class="section-title">

<span>CONTACT</span>

<h2>

Parlons de votre

<span>projet</span>

</h2>

<p>

Vous avez un projet, une question ou souhaitez collaborer avec MLK Services ?
Contactez-nous dès aujourd'hui.

</p>

</div>

<div class="contact-wrapper">

<!-- INFORMATIONS -->

<div class="contact-info">

<div class="info-card">

<div class="info-icon">

<i class="fas fa-phone-alt"></i>

</div>

<div>

<h4>Téléphone</h4>

<p>+225 07 87 91 30 32</p>

</div>

</div>

<div class="info-card">

<div class="info-icon whatsapp">

<i class="fab fa-whatsapp"></i>

</div>

<div>

<h4>WhatsApp</h4>

<p>Disponible 24h/24 • 7j/7</p>

</div>

</div>

<div class="info-card">

<div class="info-icon telegram">

<i class="fab fa-telegram-plane"></i>

</div>

<div>

<h4>Telegram</h4>

<p>Communauté Pronostics</p>

</div>

</div>

<div class="info-card">

<div class="info-icon">

<i class="fas fa-envelope"></i>

</div>

<div>

<h4>Email</h4>

<p>bmbmlk27@gmail.com</p>

</div>

</div>

<div class="info-card">

<div class="info-icon">

<i class="fas fa-location-dot"></i>

</div>

<div>

<h4>Localisation</h4>

<p>Côte d'Ivoire</p>

</div>

</div>

<div class="response-box">

<i class="fas fa-bolt"></i>

<div>

<h3>Réponse rapide</h3>

<p>Temps moyen : moins d'une heure.</p>

</div>

</div>

</div>

<!-- FORMULAIRE -->

<form class="contact-form" id="contact-form">

<h3>

Envoyez un message

</h3>

<input
type="text"
name="name"
placeholder="Votre nom"
required>

<input
type="email"
name="email"
placeholder="Votre adresse email"
required>

<input
type="text"
name="subject"
placeholder="Sujet"
required>

<textarea
name="message"
rows="6"
placeholder="Décrivez votre projet..."
required></textarea>

<div
class="g-recaptcha"
data-sitekey="6LcI63EtAAAAACQ7F7eOPF2AzJlLLaQ8I857rE08">
</div>

<button type="submit">

<i class="fas fa-paper-plane"></i>

<span>Envoyer le message</span>

</button>

</form>

</div>

</div>

</section>

`;

}