import { Logo3D } from '../Logo3D/Logo3D.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <!-- Appel à l'action -->
      <div class="footer__cta">
        <div class="footer__cta-text">
          <span class="footer__eyebrow"><span class="footer__pulse"></span> Disponible pour vos projets</span>
          <h3>Un projet en tête ? Construisons-le ensemble.</h3>
        </div>
        <div class="footer__cta-actions">
          <a href="#contact" class="footer__btn footer__btn--primary">Demander un devis <i class="fa-solid fa-arrow-right"></i></a>
          <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" class="footer__btn"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>

      <div class="footer__container">
        <div class="footer__brand">
          <a href="#hero" class="footer__logo" aria-label="MLK SERVICES, retour en haut">
            ${Logo3D({ depth: 8, className: 'footer__logo3d' })}
          </a>
          <p class="footer__description">
            Solutions digitales modernes pour développer votre présence en ligne, votre visibilité et vos projets.
          </p>
          <div class="footer__social">
            <a href="https://tiktok.com/@mlkservices" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://instagram.com/mlkservices" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://t.me/MLKprono225" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
            <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <div class="footer__column">
          <h4>Navigation</h4>
          <ul class="footer__links">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#pronostics">Pronostics</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h4>Services</h4>
          <ul class="footer__links">
            <li><a href="#service-web">Création web</a></li>
            <li><a href="#service-social">TikTok &amp; Réseaux sociaux</a></li>
            <li><a href="#service-custom">Sur mesure</a></li>
            <li><a href="#pronostics">Pronostics</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h4>Contact</h4>
          <ul class="footer__links footer__links--contact">
            <li><a href="mailto:bmbmlk27@gmail.com"><span class="footer__ico"><i class="fa-regular fa-envelope"></i></span> bmbmlk27@gmail.com</a></li>
            <li><a href="tel:+2250787913032"><span class="footer__ico"><i class="fa-solid fa-phone"></i></span> +225 07 87 91 30 32</a></li>
            <li><span class="footer__ico"><i class="fa-solid fa-location-dot"></i></span> Abidjan, Côte d'Ivoire</li>
          </ul>
        </div>
      </div>

      <!-- Grand nom en filigrane -->
      <div class="footer__wordmark" aria-hidden="true">MLK SERVICES</div>

      <div class="footer__bottom">
        <span>&copy; ${year} MLK SERVICES. Tous droits réservés.</span>
        <a href="#hero" class="footer__top">Retour en haut <i class="fa-solid fa-arrow-up"></i></a>
      </div>
    </footer>
  `;
}
