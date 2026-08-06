import "./Services.css";
import web from "../../assets/images/services/web.jpeg";
import ia from "../../assets/images/services/ai.jpeg";
import tiktok from "../../assets/images/services/tiktok.jpeg";
import football from "../../assets/images/services/football.jpeg";

const services = [
  { image: web, title: "Sites Web & E-commerce", description: "Nous cr?ons des sites professionnels, vitrines et boutiques en ligne con?us pour rassurer, pr?senter votre offre et recevoir des demandes.", benefits: ["Une pr?sence cr?dible 24h/24", "Plus de contacts et de ventes", "Une exp?rience fluide sur mobile"], proof: "Un site pens? pour transformer chaque visite en opportunit?." },
  { image: ia, title: "Applications & Identit? digitale", description: "Nous d?veloppons des applications web et une identit? digitale qui simplifient vos processus et rendent votre marque m?morable.", benefits: ["Outils adapt?s ? votre activit?", "Une marque plus professionnelle", "Solutions ?volutives et modernes"], proof: "Vous obtenez une solution personnalis?e, pas un mod?le g?n?rique." },
  { image: tiktok, title: "Croissance & Mon?tisation TikTok", description: "Nous cr?ons et g?rons vos comptes TikTok, puis mettons en place une strat?gie pour d?velopper votre audience et vos revenus.", benefits: ["Plus de vues et d'engagement", "Des abonn?s qualifi?s", "Une strat?gie de mon?tisation claire"], proof: "Votre contenu sert un objectif concret : visibilit?, communaut? et revenus." },
  { image: football, title: "Pronostics Sportifs Premium", description: "Acc?dez ? une communaut? Premium, ? des analyses s?lectionn?es et au code promo WinWin officiel MLK225.", benefits: ["Analyses et conseils r?guliers", "Communaut? VIP active", "Acc?s simple via WhatsApp et Telegram"], proof: "Un accompagnement structur? pour mieux suivre vos paris sportifs." }
];

export default function Services() {
  return `
<section class="services" id="services"><div class="container">
  <div class="section-title"><span>NOS SERVICES</span><h2>Des solutions con?ues pour <span>faire grandir votre activit?.</span></h2><p>Choisissez l'accompagnement adapt? ? votre objectif : vendre en ligne, gagner en visibilit?, mon?tiser votre audience ou rejoindre notre communaut? Premium.</p></div>
  <div class="services-grid">${services.map((service) => `<article class="service-card"><div class="service-image"><img src="${service.image}" alt="${service.title}" loading="lazy"></div><div class="service-content"><h3>${service.title}</h3><p>${service.description}</p><ul class="service-benefits">${service.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}</ul><p class="service-proof">${service.proof}</p><a href="#contact" class="service-btn">Discuter de mon projet <i class="fas fa-arrow-right"></i></a></div></article>`).join("")}</div>
  <div class="section-cta"><a href="#contact" class="btn-primary">Commencer maintenant</a></div>
</div></section>`;
}
/*
import "./Services.css";

import web from "../../assets/images/services/web.jpeg";
import ia from "../../assets/images/services/ai.jpeg";
import tiktok from "../../assets/images/services/tiktok.jpeg";
import football from "../../assets/images/services/football.jpeg";

export default function Services() {

    const cards = [

        {
            image: web,
            title: "Création de Sites Web",
            description:
                "Sites vitrines, e-commerce, landing pages et applications web modernes, rapides, sécurisées et entièrement responsives."
        },

        {
            image: ia,
            title: "Intelligence Artificielle",
            description:
                "Intégration d'IA, automatisation, assistants intelligents et solutions innovantes pour développer votre activité."
        },

        {
            image: tiktok,
            title: "TikTok & Réseaux Sociaux",
            description:
                "Création de comptes, développement de la visibilité, abonnés, vues, monétisation et stratégies de croissance."
        },

        {
            image: football,
            title: "Pronostics Sportifs",
            description:
                "Analyses professionnelles, pronostics quotidiens, communauté privée et accompagnement premium."
        }

    ];

    return `

<section class="services" id="services">

    <div class="container">

        <div class="section-title">

            <span>NOS SERVICES</span>

            <h2>

                Des solutions conçues pour

                <span>votre réussite.</span>

            </h2>

            <p>

                MLK Services accompagne les entreprises, créateurs de contenu
                et particuliers avec des solutions digitales modernes,
                performantes et adaptées à leurs objectifs.

            </p>

        </div>

        <div class="services-grid">

            ${cards.map(card => `

                <div class="service-card">

                    <div class="service-image">

                        <img
                            src="${card.image}"
                            alt="${card.title}"
                            loading="lazy"
                        >

                    </div>

                    <div class="service-content">

                        <h3>${card.title}</h3>

                        <p>${card.description}</p>

                        <a href="#contact" class="service-btn">

                            Commencer

                            <i class="fas fa-arrow-right"></i>

                        </a>

                    </div>

                </div>

            `).join("")}

        </div>

    </div>

</section>

`;

}
*/
