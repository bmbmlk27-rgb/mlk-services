import { createWebSection } from '../Web/Web.js';
import { createTikTokSection } from '../TikTok/TikTok.js';
import { createSurMesureSection } from '../SurMesure/SurMesure.js';

export function createServices() {
  const servicesHTML = `
    <section class="services-page" id="services">
      <div class="services-container">
        <div id="web-section"></div>
        <div id="tiktok-section"></div>
        <div id="sur-mesure-section"></div>
      </div>
    </section>
  `;

  const app = document.getElementById('app');
  if (app) {
    app.insertAdjacentHTML('beforeend', servicesHTML);
    createWebSection();
    createTikTokSection();
    createSurMesureSection();
    initScrollReveal();
  }
}

function initScrollReveal() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, observerOptions);
  document.querySelectorAll('.service-section').forEach(section => {
    observer.observe(section);
  });
}