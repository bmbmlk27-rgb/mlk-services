export default function Services() {
  return `
    <section class="services-page" id="services">
      <div class="services-container">
        <!-- Introduction -->
        <div class="services-intro" data-reveal>
          <span class="services-label section-tag">Services</span>
          <h2 class="services-title" data-split>Trois façons de faire grandir votre activité en ligne.</h2>
          <p class="services-description">
            Un site pour être trouvé, des réseaux sociaux pour être suivi, des outils sur mesure pour gagner du temps.
            Choisissez ce dont vous avez besoin : chaque prestation est adaptée à vos objectifs et à votre budget.
          </p>
        </div>

        <!-- ========== SERVICE 01 : WEB ========== -->
        <div class="service-section">
          <div class="service-content" data-reveal="left">
            <span class="service-number">01</span>
            <h3 class="service-heading">CRÉATION DE SITES WEB <span>Un site professionnel qui inspire confiance</span></h3>
            <p class="service-text">
              Aujourd'hui, vos clients vous cherchent sur Internet avant de vous contacter. Je crée des sites
              <strong>rapides</strong>, <strong>beaux sur téléphone comme sur ordinateur</strong> et pensés pour transformer
              les visiteurs en clients : présentation de votre activité, vos prix, vos contacts et un bouton WhatsApp en un clic.
            </p>
            <ul class="service-list">
              <li>Site vitrine pour présenter votre activité</li>
              <li>Boutique en ligne pour vendre vos produits</li>
              <li>Page de vente pour une offre ou un événement</li>
              <li>Portfolio ou CV en ligne</li>
              <li>Refonte d'un site ancien ou lent</li>
              <li>Mise en ligne et nom de domaine</li>
            </ul>
            <p class="service-price"><i class="fa-solid fa-tag"></i> Prix selon le projet — devis avant de commencer</p>
            <a href="#contact" class="service-link" data-magnetic>Demander un devis pour mon site <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="service-visual web-visual" data-reveal="zoom">
            <div class="scene">
              <div class="laptop">
                <div class="laptop__screen">
                  <div class="laptop__cam"></div>
                  <div class="editor">
                    <div class="editor__bar">
                      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                      <span class="editor__file">mlk-service.js</span>
                    </div>
                    <pre class="editor__body"><code id="typedCode"></code><span class="caret">▍</span></pre>
                  </div>
                </div>
                <div class="laptop__base"><div class="laptop__notch"></div></div>
              </div>
              <div class="laptop__glow"></div>
            </div>
          </div>
        </div>

        <!-- ========== SERVICE 02 : TIKTOK & RÉSEAUX SOCIAUX ========== -->
        <div class="service-section reverse">
          <div class="service-visual social-visual" data-reveal="zoom">
            <div class="growth-panel">
              <div class="growth-chart-wrap">
                <svg viewBox="0 0 520 240" class="growth-svg">
                  <defs>
                    <linearGradient id="areaFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="currentColor" stop-opacity="0.22"/>
                      <stop offset="100%" stop-color="currentColor" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path class="growth-area" fill="url(#areaFade)"
                    d="M0,200 C60,190 90,150 140,140 C190,130 210,160 260,120 C310,80 330,100 380,60 C430,20 460,40 520,10 L520,240 L0,240 Z"/>
                  <path class="growth-line" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                    d="M0,200 C60,190 90,150 140,140 C190,130 210,160 260,120 C310,80 330,100 380,60 C430,20 460,40 520,10"/>
                  <circle class="growth-dot" cx="520" cy="10" r="6" fill="currentColor"/>
                </svg>

                <div class="floating-logo logo--tiktok" aria-label="TikTok" title="TikTok">
                  <svg viewBox="0 0 48 48" width="26" height="26"><path d="M29 6c1 4 4 7 8 7.5V19c-3 0-6-1-8-3v13a11 11 0 1 1-11-11c.7 0 1.3 0 2 .2v5.6a5.4 5.4 0 1 0 3.8 5.2V6h5.2z" fill="#fff"/></svg>
                </div>
                <div class="floating-logo logo--ig" aria-label="Instagram" title="Instagram">
                  <svg viewBox="0 0 48 48" width="24" height="24"><rect x="8" y="8" width="32" height="32" rx="10" fill="none" stroke="#fff" stroke-width="3"/><circle cx="24" cy="24" r="8" fill="none" stroke="#fff" stroke-width="3"/><circle cx="33" cy="15" r="2.2" fill="#fff"/></svg>
                </div>
                <div class="floating-logo logo--fb" aria-label="Facebook" title="Facebook">
                  <svg viewBox="0 0 48 48" width="22" height="22"><circle cx="24" cy="24" r="19" fill="none" stroke="#fff" stroke-width="3"/><path d="M28 15h-3.2c-2.6 0-3.3 1.3-3.3 3v3.2h-3v4h3V33h4.3V25.2h3.3l.5-4h-3.8v-2.6c0-1 .3-1.6 1.7-1.6H29v-4z" fill="#fff"/></svg>
                </div>
              </div>

              <div class="growth-stats">
                <div class="stat">
                  <svg class="stat-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
                  <span class="stat-num" data-target="200000">+0</span>
                  <span class="stat-label">Vues générées</span>
                </div>
                <div class="stat">
                  <svg class="stat-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span class="stat-num" data-target="2000">+0</span>
                  <span class="stat-label">Nouveaux abonnés</span>
                </div>
              </div>
            </div>
          </div>
          <div class="service-content" data-reveal="right">
            <span class="service-number">02</span>
            <h3 class="service-heading">TIKTOK & RÉSEAUX SOCIAUX <span>Plus de vues, plus d'abonnés, plus de clients</span></h3>
            <p class="service-text">
              Publier sans stratégie, c'est parler dans le vide. Je vous aide à <strong>créer ou relancer vos comptes</strong>
              TikTok, Instagram et Facebook, à <strong>trouver les bons formats de contenu</strong> et à publier régulièrement
              pour attirer une audience qui s'intéresse vraiment à ce que vous proposez.
            </p>
            <ul class="service-list">
              <li>Création et optimisation de profils</li>
              <li>Idées de vidéos et calendrier de publication</li>
              <li>Croissance TikTok</li>
              <li>Instagram et Facebook</li>
              <li>Conseils pour vendre via les réseaux</li>
              <li>Suivi et conseils personnalisés</li>
            </ul>
            <p class="service-price"><i class="fa-solid fa-tag"></i> Formule adaptée à votre compte — devis avant de commencer</p>
            <a href="#contact" class="service-link" data-magnetic>Booster mes réseaux sociaux <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- ========== SERVICE 03 : SUR MESURE ========== -->
        <div class="service-section">
          <div class="service-content" data-reveal="left">
            <span class="service-number">03</span>
            <h3 class="service-heading">SOLUTIONS SUR MESURE <span>Un outil pensé pour votre problème</span></h3>
            <p class="service-text">
              Vous perdez du temps sur des tâches répétitives ? Vous avez une idée d'application mais ne savez pas par où commencer ?
              Je conçois des <strong>outils digitaux faits pour vous</strong> : ils automatisent ce qui peut l'être et
              simplifient votre quotidien, même si votre besoin ne rentre dans aucune case.
            </p>
            <ul class="service-list">
              <li>Applications web</li>
              <li>Automatisation de tâches</li>
              <li>Connexion entre vos outils (API)</li>
              <li>Chatbots WhatsApp / site web</li>
              <li>Formulaires et tableaux de bord</li>
              <li>Maintenance et dépannage</li>
              <li>Conseils techniques</li>
            </ul>
            <p class="service-price"><i class="fa-solid fa-tag"></i> Prix selon la complexité — devis avant de commencer</p>
            <a href="#contact" class="service-link" data-magnetic>Expliquer mon besoin <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="service-visual custom-visual" data-reveal="zoom">
            <div class="mech-scene" id="mechScene">
              <div class="mech-tools" id="mechTools">
                <div class="wrench">
                  <div class="wrench__head wrench__head--a"></div>
                  <div class="wrench__shaft"></div>
                  <div class="wrench__head wrench__head--b"></div>
                </div>
                <div class="screwdriver">
                  <div class="screwdriver__handle"></div>
                  <div class="screwdriver__shaft"></div>
                  <div class="screwdriver__tip"></div>
                </div>
                <div class="bolt">
                  <div class="bolt__hex"></div>
                  <div class="bolt__socket"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comment ça marche -->
        <div class="process" id="process">
          <div class="process-head" data-reveal>
            <span class="services-label section-tag">Comment ça marche</span>
            <h3 class="process-title" data-split>De votre idée au résultat, en 4 étapes simples.</h3>
          </div>
          <ol class="process-steps" data-reveal-group="120">
            <li class="process-step" data-reveal data-spotlight>
              <span class="process-num">1</span>
              <i class="fa-regular fa-comments process-icon"></i>
              <h4>Vous me décrivez votre besoin</h4>
              <p>Par le formulaire, WhatsApp ou téléphone. Expliquez simplement ce que vous voulez, même si ce n'est pas encore très précis.</p>
            </li>
            <li class="process-step" data-reveal data-spotlight>
              <span class="process-num">2</span>
              <i class="fa-regular fa-file-lines process-icon"></i>
              <h4>Je vous propose une solution</h4>
              <p>Vous recevez une proposition claire : ce qui sera fait, le délai et le prix. Rien ne commence sans votre accord.</p>
            </li>
            <li class="process-step" data-reveal data-spotlight>
              <span class="process-num">3</span>
              <i class="fa-solid fa-code process-icon"></i>
              <h4>Je réalise le projet</h4>
              <p>Je vous montre l'avancement régulièrement et j'ajuste selon vos retours, pour que le résultat vous ressemble.</p>
            </li>
            <li class="process-step" data-reveal data-spotlight>
              <span class="process-num">4</span>
              <i class="fa-solid fa-rocket process-icon"></i>
              <h4>Livraison et suivi</h4>
              <p>Votre projet est mis en ligne et je reste disponible pour les questions, les modifications et la maintenance.</p>
            </li>
          </ol>
        </div>

        <!-- CTA final -->
        <div class="services-final" data-reveal="zoom" data-spotlight>
          <h3>Vous avez un projet ? Parlons-en.</h3>
          <p>Décrivez votre besoin en quelques lignes : je vous réponds avec une proposition adaptée à votre budget.</p>
          <a href="#contact" class="service-link" data-magnetic>Obtenir ma proposition <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

export function initServicesAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== Section 1 : machine à écrire ===== */
  const codeText = "const brand = 'MLK SERVICE';\n\nfunction croissance() {\n  return premium(brand);\n}\n\n// déploiement : live \u2713";
  const typedEl = document.getElementById('typedCode');
  if (typedEl) {
    if (reduceMotion) {
      typedEl.textContent = codeText;
    } else {
      let pos = 0, deleting = false;
      function typeStep() {
        typedEl.textContent = codeText.slice(0, pos);
        if (!deleting) {
          if (pos < codeText.length) {
            pos++;
            setTimeout(typeStep, 32);
          } else {
            deleting = true;
            setTimeout(typeStep, 1700);
          }
        } else {
          if (pos > 0) {
            pos--;
            setTimeout(typeStep, 14);
          } else {
            deleting = false;
            setTimeout(typeStep, 500);
          }
        }
      }
      typeStep();
    }
  }

  /* ===== Section 2 : courbe + compteurs ===== */
  function formatNumber(n) {
    if (n >= 1000) {
      const k = n / 1000;
      return (Number.isInteger(k) ? k : k.toFixed(1)) + 'K';
    }
    return Math.round(n);
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    if (reduceMotion) {
      el.textContent = '+' + formatNumber(target);
      return;
    }
    const duration = 2200, start = performance.now();
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = '+' + formatNumber(target * eased);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = '+' + formatNumber(target);
    }
    requestAnimationFrame(frame);
  }

  const growthPanel = document.querySelector('.growth-panel');
  const statNums = document.querySelectorAll('.stat-num');
  if (growthPanel) {
    const growthObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          statNums.forEach(animateCounter);
          growthObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });
    growthObserver.observe(growthPanel);
  }

  /* ===== Section 3 : entrée mécanique + parallaxe ===== */
  const mechScene = document.getElementById('mechScene');
  const mechTools = document.getElementById('mechTools');
  if (mechScene) {
    const mechObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mechScene.classList.add('in-view');
          mechObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });

    mechObserver.observe(mechScene);

    // Fallback de secours si l'observateur ne se déclenche pas
    setTimeout(() => {
      if (!mechScene.classList.contains('in-view')) {
        mechScene.classList.add('in-view');
      }
    }, 2000);

    if (!reduceMotion && mechTools && window.matchMedia('(pointer: fine)').matches) {
      mechScene.addEventListener('mousemove', (e) => {
        const rect = mechScene.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mechTools.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
      });
      mechScene.addEventListener('mouseleave', () => {
        mechTools.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    }
  }
}