export default function Pronostics() {
  return `
    <section class="pronostics-section" id="pronostics">
      <div class="pronostics-container">
        <!-- En-tête -->
        <div class="pronostics-header">
          <span class="pronostics-label">Pronostics</span>
          <h2 class="pronostics-title">Performances & Analyses</h2>
          <p class="pronostics-intro">
            Des pronostics sportifs fiables et des outils innovants pour maximiser vos chances.
          </p>
        </div>

        <div class="pronostics-grid">
          <!-- Sport & Pronostics -->
          <div class="pronostics-sport">
            <!-- Terrains animés -->
            <div class="sport-arena" aria-hidden="true">
              <div class="arena-tile arena-tile--foot">
                <svg class="arena-lines" viewBox="0 0 200 120" preserveAspectRatio="none" fill="none">
                  <rect x="6" y="6" width="188" height="108" rx="2" />
                  <line x1="100" y1="6" x2="100" y2="114" />
                  <circle cx="100" cy="60" r="16" />
                  <rect x="6" y="34" width="26" height="52" />
                  <rect x="168" y="34" width="26" height="52" />
                  <rect x="6" y="48" width="9" height="24" />
                  <rect x="185" y="48" width="9" height="24" />
                </svg>
                <span class="player player--a1"></span><span class="player player--a2"></span><span class="player player--a3"></span>
                <span class="player player--b1"></span><span class="player player--b2"></span><span class="player player--b3"></span>
                <span class="foot-ball"><i class="fa-solid fa-futbol"></i></span>
                <span class="arena-tag"><i class="fa-solid fa-futbol"></i> Football</span>
              </div>
              <div class="arena-tile arena-tile--basket">
                <svg class="arena-lines" viewBox="0 0 200 120" preserveAspectRatio="none" fill="none">
                  <rect x="6" y="6" width="188" height="108" rx="2" />
                  <line x1="100" y1="6" x2="100" y2="114" />
                  <circle cx="100" cy="60" r="14" />
                  <path d="M194 22 A46 46 0 0 0 194 98" />
                  <rect x="160" y="42" width="34" height="36" />
                  <path d="M6 22 A46 46 0 0 1 6 98" />
                  <rect x="6" y="42" width="34" height="36" />
                </svg>
                <span class="hoop"></span>
                <span class="basket-ball-x"><span class="basket-ball-y"><i class="fa-solid fa-basketball"></i></span></span>
                <span class="arena-tag"><i class="fa-solid fa-basketball"></i> Basketball</span>
              </div>
            </div>

            <span class="sport-live"><span class="sport-live__dot"></span> Analyses quotidiennes</span>
            <h3 class="sport-title">Football &amp; Basket</h3>
            <p>
              Analyses approfondies, statistiques clés et pronostics quotidiens sur les plus grands championnats.
              Profitez de nos conseils pour améliorer vos résultats.
            </p>

            <!-- Défilement des championnats -->
            <div class="league-marquee" aria-label="Championnats suivis">
              <div class="league-track"><span>Premier League</span><span>LaLiga</span><span>Ligue 1</span><span>Serie A</span><span>Bundesliga</span><span>Ligue des champions</span><span>NBA</span><span>EuroLeague</span><span aria-hidden="true">Premier League</span><span aria-hidden="true">LaLiga</span><span aria-hidden="true">Ligue 1</span><span aria-hidden="true">Serie A</span><span aria-hidden="true">Bundesliga</span><span aria-hidden="true">Ligue des champions</span><span aria-hidden="true">NBA</span><span aria-hidden="true">EuroLeague</span></div>
            </div>

            <!-- Types de pronostics -->
            <div class="bet-types">
              <div class="bet-type"><strong>1X2</strong><span>Résultat du match</span></div>
              <div class="bet-type"><strong>+/−</strong><span>Over / Under</span></div>
              <div class="bet-type"><strong><i class="fa-solid fa-futbol"></i></strong><span>Buteur</span></div>
            </div>

            <ul class="sport-list">
              <li><i class="fa-solid fa-chart-line"></i> Analyses vidéo et rapports détaillés</li>
              <li><i class="fa-solid fa-bell"></i> Suivi personnalisé sur Telegram/WhatsApp</li>
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
              <!-- Carte Mines Gems -->
              <div class="bot-card">
                <img src="/icons/mines-gems.jpg" alt="Mines Gems" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Mines Gems</span>
                  <span class="bot-desc">Stratégie anti-bombe</span>
                </div>
              </div>
              <!-- Carte Crash -->
              <div class="bot-card">
                <img src="/icons/crash.jpg" alt="Crash" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Crash</span>
                  <span class="bot-desc">Détection de tendance</span>
                </div>
              </div>
              <!-- Carte Lucky Jet -->
              <div class="bot-card">
                <img src="/icons/lucky-jet.jpg" alt="Lucky Jet" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Lucky Jet</span>
                  <span class="bot-desc">Multiplicateur sécurisé</span>
                </div>
              </div>
              <!-- Carte Rocket Queen -->
              <div class="bot-card">
                <img src="/icons/rocket-queen.jpg" alt="Rocket Queen" class="bot-image" />
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
}

export function initPronosticsAnimations() {
  const section = document.querySelector('.pronostics-section');
  if (!section) return;

  const revealElements = section.querySelectorAll('.pronostics-header, .pronostics-sport, .pronostics-bots, .promo-banner');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // Optionnel : animation des cartes de jeux au survol déjà gérée en CSS.
}