export function createFooter() {
  const footerHTML = `
    <footer class="footer">
      <div class="footer__container">
        <!-- Marque -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="/images/logo2.jpg" alt="MLK SERVICES" />
            MLK SERVICES
          </div>
          <p class="footer__description">
            Solutions digitales modernes pour développer votre présence en ligne, votre visibilité et vos projets.
          </p>
          <div class="footer__social">
            <a href="https://tiktok.com/@badjojo1" target="_blank" rel="noopener" aria-label="TikTok">
              <i class="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://instagram.com/mlkservices" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/mlkservices" target="_blank" rel="noopener" aria-label="Telegram">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="https://wa.me/2250787913032" target="_blank" rel="noopener" aria-label="WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="footer__column">
          <h4>Navigation</h4>
          <ul class="footer__links">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pronostics">Pronostics</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer__column">
          <h4>Services</h4>
          <ul class="footer__links">
            <li><a href="#web">Web</a></li>
            <li><a href="#tiktok">TikTok</a></li>
            <li><a href="#sport">Sport</a></li>
            <li><a href="#pronostics">Pronostics</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer__column">
          <h4>Contact</h4>
          <ul class="footer__links">
            <li>
              <a href="mailto:bmbmlk27@gmail.com">
                <i class="fa-solid fa-envelope"></i> bmbmlk27@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/2250787913032">
                <i class="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </li>
            <li>
              <a href="tel:+2250787913032">
                <i class="fa-solid fa-phone"></i> +225 0787913032
              </a>
            </li>
            <li>
              <span style="color: var(--text-muted); font-size: var(--text-sm);">
                <i class="fa-solid fa-location-dot"></i> Abidjan, Côte d'Ivoire
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bas de footer -->
      <div class="footer__bottom">
        <span>&copy; 2026 MLK SERVICES. Tous droits réservés.</span>
        <span>Développé avec ❤️ par MLK</span>
      </div>
    </footer>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', footerHTML);
  }
}