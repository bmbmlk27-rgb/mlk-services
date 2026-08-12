export function createPronostics() {
  const pronosticsHTML = `
    <section class="pronostics-section" id="pronostics">
      <div class="pronostics-container">
        <!-- En-tête -->
        <div class="pronostics-header">
          <span class="pronostics-subtitle">PRONOSTICS</span>
          <h2 class="pronostics-title">Performances & Analyses</h2>
          <p class="pronostics-intro">
            Des pronostics sportifs fiables et des outils innovants pour maximiser vos chances.
          </p>
        </div>

        <div class="pronostics-grid">
          <!-- Sports -->
          <div class="pronostics-sport">
            <i class="fa-solid fa-futbol sport-icon-float football"></i>
            <i class="fa-solid fa-basketball sport-icon-float basketball"></i>
            <h3><i class="fa-solid fa-futbol" style="margin-right:0.5rem;"></i> Football & Basket</h3>
            <p>
              Analyses approfondies, statistiques clés et pronostics quotidiens sur les plus grands championnats.
              Profitez de nos conseils pour améliorer vos résultats.
            </p>
            <ul class="sport-list">
              <li><i class="fa-solid fa-check"></i> Pronostics 1X2, Over/Under, Buteur</li>
              <li><i class="fa-solid fa-check"></i> Analyses vidéo et rapports détaillés</li>
              <li><i class="fa-solid fa-check"></i> Suivi personnalisé sur Telegram/WhatsApp</li>
            </ul>
            <div class="channel-buttons">
              <a href="https://t.me/" target="_blank" rel="noopener" class="chip telegram">
                <i class="fa-brands fa-telegram"></i> Canal Telegram
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener" class="chip whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Groupe WhatsApp
              </a>
            </div>
          </div>

          <!-- Bots & Applications -->
          <div class="pronostics-bots">
            <h3><i class="fa-solid fa-robot" style="margin-right:0.5rem;"></i> Bots & Applications</h3>
            <p class="bots-intro">
              Automatisez vos stratégies avec nos bots pour les jeux de casino en ligne. Compatibles avec les principales plateformes.
            </p>
            <div class="bot-cards">
              <!-- Carte 1 : Mines Gems -->
              <div class="bot-card">
                <img src="/src/assets/icons/mines-gems.jpg" alt="Mines Gems" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Mines Gems</span>
                  <span class="bot-desc">Stratégie anti-bombe</span>
                </div>
              </div>
              <!-- Carte 2 : Crash -->
              <div class="bot-card">
                <img src="/src/assets/icons/crash.jpg" alt="Crash" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Crash</span>
                  <span class="bot-desc">Détection de tendance</span>
                </div>
              </div>
              <!-- Carte 3 : Lucky Jet -->
              <div class="bot-card">
                <img src="/src/assets/icons/lucky-jet.jpg" alt="Lucky Jet" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Lucky Jet</span>
                  <span class="bot-desc">Multiplicateur sécurisé</span>
                </div>
              </div>
              <!-- Carte 4 : Rocket Queen -->
              <div class="bot-card">
                <img src="/src/assets/icons/rocket-queen.jpg" alt="Rocket Queen" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Rocket Queen</span>
                  <span class="bot-desc">Gains progressifs</span>
                </div>
              </div>
            </div>
            <div class="channel-buttons">
              <a href="https://wa.me/" target="_blank" rel="noopener" class="chip whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Demander un bot
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener" class="chip telegram">
                <i class="fa-brands fa-telegram"></i> Support Telegram
              </a>
            </div>
          </div>

          <!-- Bannière WinWin -->
          <div class="promo-banner">
            <div class="promo-content">
              <div class="winwin-logo">WINWINBET</div>
              <div class="promo-text">
                <h4>Offre exclusive MLK SERVICES</h4>
                <p>Utilisez le code promo ci-dessous et bénéficiez d’un bonus de bienvenue sur WinWinBet.</p>
              </div>
            </div>
            <div class="promo-code">
              <span>MLK225</span>
              <button onclick="navigator.clipboard.writeText('MLK225')" title="Copier le code">
                <i class="fa-solid fa-copy"></i> Copier
              </button>
            </div>
            <a href="https://winwinbet.com" target="_blank" rel="noopener" class="btn btn-primary" style="background:white; color:#0f2538; z-index:1;">
              S'inscrire <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', pronosticsHTML);
    initPronosticsReveal();
  }
}

function initPronosticsReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.pronostics-header, .pronostics-sport, .pronostics-bots, .promo-banner').forEach(el => {
    observer.observe(el);
  });
}