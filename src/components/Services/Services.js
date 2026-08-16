export default function Services() {
  return `
    <section class="services-page" id="services">
      <div class="services-container">
        <!-- Introduction -->
        <div class="services-intro">
          <span class="services-label">Nos services</span>
          <h2 class="services-title">Des solutions adaptées à vos besoins.</h2>
          <p class="services-description">
            Chaque projet est différent. MLK Services adapte ses prestations à votre demande, vos objectifs et votre budget.
          </p>
        </div>

        <!-- ========== SERVICE 01 : WEB ========== -->
        <div class="service-section">
          <div class="service-content">
            <span class="service-number">01</span>
            <h3 class="service-heading">WEB <span>Création digitale</span></h3>
            <p class="service-text">
              Nous concevons des sites modernes, rapides, responsives et adaptés aux objectifs de chaque projet. De la vitrine professionnelle à la boutique en ligne, chaque réalisation est pensée selon vos besoins.
            </p>
            <ul class="service-list">
              <li>Sites vitrines</li>
              <li>Sites professionnels</li>
              <li>E-commerce</li>
              <li>Landing pages</li>
              <li>Refonte de sites</li>
              <li>Solutions personnalisées</li>
            </ul>
            <p class="service-price">Tarif sur demande</p>
            <a href="#contact" class="service-link">Demander un devis <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="service-visual web-visual">
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
          <div class="service-visual social-visual">
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
          <div class="service-content">
            <span class="service-number">02</span>
            <h3 class="service-heading">TIKTOK & RÉSEAUX SOCIAUX <span>Développez votre visibilité</span></h3>
            <p class="service-text">
              Nous vous accompagnons dans le développement de votre présence sur TikTok et les réseaux sociaux afin d'améliorer votre visibilité et votre présence digitale.
            </p>
            <ul class="service-list">
              <li>Création de comptes</li>
              <li>Développement de visibilité</li>
              <li>TikTok</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Accompagnement personnalisé</li>
            </ul>
            <p class="service-price">Tarif sur demande</p>
            <a href="#contact" class="service-link">Discuter de votre projet <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- ========== SERVICE 03 : SUR MESURE ========== -->
        <div class="service-section">
          <div class="service-content">
            <span class="service-number">03</span>
            <h3 class="service-heading">SUR MESURE <span>Votre projet, notre expertise</span></h3>
            <p class="service-text">
              Vous avez une idée spécifique ? Un besoin particulier ? Nous concevons des solutions adaptées à vos besoins, même lorsqu'elles sortent des prestations classiques.
            </p>
            <ul class="service-list">
              <li>Applications web</li>
              <li>Automatisations</li>
              <li>Intégrations API</li>
              <li>Chatbots</li>
              <li>Outils personnalisés</li>
              <li>Maintenance</li>
              <li>Accompagnement technique</li>
            </ul>
            <p class="service-price">Tarif sur demande</p>
            <a href="#contact" class="service-link">Parlons de votre besoin <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div class="service-visual custom-visual">
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

        <!-- CTA final -->
        <div class="services-final">
          <h3>Un projet en tête ?</h3>
          <p>Parlons-en. Chaque demande est étudiée individuellement.</p>
          <a href="#contact" class="service-link">Demander un devis <i class="fa-solid fa-arrow-right"></i></a>
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