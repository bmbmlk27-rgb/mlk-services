export default function Footer() {
  return `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand">
          <a href="#hero" class="footer__logo">
            <img src="/images/logo1.jpg" alt="MLK SERVICES Logo" />
            <span>MLK SERVICES</span>
          </a>
          <p class="footer__description">
            Solutions digitales modernes pour développer votre présence en ligne, votre visibilité et vos projets.
          </p>
          <div class="footer__social">
            <a href="https://tiktok.com/@mlkservices" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://instagram.com/mlkservices" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://t.me/mlkservices" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
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
            <li><a href="#services">Création web</a></li>
            <li><a href="#services">TikTok & Réseaux sociaux</a></li>
            <li><a href="#pronostics">Pronostics</a></li>
            <li><a href="#contact">Sur mesure</a></li>
          </ul>
        </div>

        <div class="footer__column">
          <h4>Contact</h4>
          <ul class="footer__links">
            <li><a href="mailto:bmbmlk27@gmail.com"><i class="fa-solid fa-envelope"></i> bmbmlk27@gmail.com</a></li>
            <li><a href="tel:+2250787913032"><i class="fa-solid fa-phone"></i> +225 07 87 91 30 32</a></li>
            <li><a href="https://wa.me/2250787913032"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a></li>
            <li><i class="fa-solid fa-location-dot"></i> Abidjan, Côte d'Ivoire</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>&copy; 2026 MLK SERVICES. Tous droits réservés.</span>
        <span>Développé avec <i class="fa-solid fa-heart"></i> par MLK</span>
      </div>
    </footer>
  `;
}