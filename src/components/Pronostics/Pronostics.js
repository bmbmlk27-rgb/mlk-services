export default function Pronostics() {
  return `
    <section class="pronostics-section" id="pronostics">
      <div class="pronostics-container">
        <!-- En-tête -->
        <div class="pronostics-header">
          <span class="pronostics-label section-tag">Pronostics & Jeux</span>
          <h2 class="pronostics-title" data-split>Des analyses sportives pour parier de façon réfléchie.</h2>
          <p class="pronostics-intro">
            Chaque jour, j'étudie les matchs de football et de basket (forme des équipes, statistiques, absences)
            et je partage mes pronostics sur Telegram et WhatsApp. Rejoignez la communauté et pariez avec plus d'informations.
          </p>
        </div>

        <div class="pronostics-grid">
          <!-- Sport & Pronostics -->
          <div class="pronostics-sport" data-spotlight>
            <i class="fa-solid fa-futbol sport-icon-float football"></i>
            <i class="fa-solid fa-basketball sport-icon-float basketball"></i>
            <h3><i class="fa-solid fa-futbol" style="margin-right:0.5rem;"></i> Pronostics Football & Basket</h3>
            <p>
              Des pronostics quotidiens sur les grands championnats (Premier League, Liga, Ligue 1, Ligue des Champions, NBA…),
              chacun accompagné d'une explication : vous comprenez <strong>pourquoi</strong> ce choix, pas seulement le résultat.
            </p>
            <ul class="sport-list">
              <li><i class="fa-solid fa-check"></i> Types de paris : 1X2, plus/moins de buts, buteur, double chance</li>
              <li><i class="fa-solid fa-check"></i> Analyse de la forme, des statistiques et des compositions</li>
              <li><i class="fa-solid fa-check"></i> Pronostics publiés avant les matchs sur Telegram et WhatsApp</li>
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
          <div class="pronostics-bots" data-spotlight>
            <h3><i class="fa-solid fa-robot" style="margin-right:0.5rem;"></i> Bots & Applications de jeux</h3>
            <p class="bots-intro">
              Des bots et applications pour les jeux en ligne populaires : Mines Gems, Crash, Lucky Jet et Rocket Queen.
              Écrivez-moi sur WhatsApp ou Telegram pour savoir quels outils sont disponibles pour votre jeu et comment ils fonctionnent.
            </p>
            <div class="bot-cards">
              <!-- Carte Mines Gems -->
              <div class="bot-card">
                <img src="/icons/mines-gems.jpg" alt="Mines Gems" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Mines Gems</span>
                  <span class="bot-desc">Jeu de grille et de diamants</span>
                </div>
              </div>
              <!-- Carte Crash -->
              <div class="bot-card">
                <img src="/icons/crash.jpg" alt="Crash" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Crash</span>
                  <span class="bot-desc">Jeu de multiplicateur</span>
                </div>
              </div>
              <!-- Carte Lucky Jet -->
              <div class="bot-card">
                <img src="/icons/lucky-jet.jpg" alt="Lucky Jet" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Lucky Jet</span>
                  <span class="bot-desc">Jeu de multiplicateur</span>
                </div>
              </div>
              <!-- Carte Rocket Queen -->
              <div class="bot-card">
                <img src="/icons/rocket-queen.jpg" alt="Rocket Queen" class="bot-image" />
                <div class="bot-overlay">
                  <span class="bot-name">Rocket Queen</span>
                  <span class="bot-desc">Jeu de multiplicateur</span>
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
            <p class="gamble-note">
              <i class="fa-solid fa-circle-info"></i>
              Ces jeux reposent sur le hasard : aucun outil ne peut prédire les résultats ni garantir un gain.
            </p>
          </div>

          <!-- Bannière WinWin -->
          <div class="promo-banner">
            <div class="promo-content">
              <div class="winwin-logo">WINWINBET</div>
              <div class="promo-text">
                <h4>Bonus de bienvenue avec le code MLK225</h4>
                <p>Inscrivez-vous sur WinWinBet, saisissez le code <strong>MLK225</strong> lors de l'inscription et profitez du bonus de bienvenue.</p>
              </div>
            </div>
            <div class="promo-code">
              <span>MLK225</span>
              <button type="button" class="copy-code-btn" data-code="MLK225" title="Copier le code">
                <i class="fa-solid fa-copy"></i> <span>Copier</span>
              </button>
            </div>
            <a href="https://winwinbet.com" target="_blank" rel="noopener" class="btn btn-primary" style="background:white; color:#0f2538; z-index:1;">
              S'inscrire maintenant <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <p class="responsible-note">
            <strong>18+</strong> · Les paris sportifs comportent des risques : endettement, dépendance… Ne misez que ce que vous pouvez vous permettre de perdre.
            Les pronostics sont des avis, pas des certitudes.
          </p>
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

  // Bouton « Copier » du code promo avec retour visuel
  section.querySelectorAll('.copy-code-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const label = btn.querySelector('span');
      try {
        await navigator.clipboard.writeText(btn.dataset.code);
        label.textContent = 'Copié !';
      } catch (e) {
        label.textContent = btn.dataset.code;
      }
      btn.classList.add('copied');
      setTimeout(() => {
        label.textContent = 'Copier';
        btn.classList.remove('copied');
      }, 1800);
    });
  });
}