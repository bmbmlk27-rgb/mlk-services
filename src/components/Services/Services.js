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