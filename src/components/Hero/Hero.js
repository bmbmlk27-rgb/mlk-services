import "./Hero.css";
import HeroParticles from "./HeroParticles";
import Orbit from "./Orbit/Orbit";

import avatar from "../../assets/images/avatar/avatar.png";

export default function Hero() {

return `

<section class="hero" id="hero">

    <div class="hero-bg"></div>

    <div class="particles">

        ${HeroParticles()}

    </div>

    <div class="container hero-container">

        <!-- Partie gauche -->

        <div class="hero-content">

            <span class="hero-badge">

                💎 Agence Digitale Premium

            </span>

            <h1>

                Développez votre visibilité.<br>

                <span>Dominez le digital.</span>

            </h1>

            <p>

                Nous créons des sites web modernes,
                développons votre présence sur les réseaux sociaux,
                intégrons des solutions d'Intelligence Artificielle
                et proposons des services numériques performants.

            </p>

            <div class="hero-buttons">

                <a href="#contact" class="btn-primary">

                    Commencer un projet

                </a>

                <a href="#services" class="btn-secondary">

                    Découvrir nos services

                </a>

            </div>

        </div>

        <!-- Partie droite -->

        <div class="hero-visual">

            <div class="identity-card">

                <div class="identity-glow"></div>

                <img
                    src="${avatar}"
                    alt="MLK Services"
                    class="identity-avatar"
                >

                <h2>MLK</h2>

                <span class="identity-job">

                    Créateur de solutions digitales

                </span>

                <div class="tech-stack">

                    <div class="tech html">
                        <i class="fab fa-html5"></i>
                        HTML5
                    </div>

                    <div class="tech css">
                        <i class="fab fa-css3-alt"></i>
                        CSS3
                    </div>

                    <div class="tech js">
                        <i class="fab fa-js"></i>
                        JavaScript
                    </div>

                    <div class="tech vite">
                        ⚡ Vite
                    </div>

                </div>

            </div>

            ${Orbit()}

        </div>

    </div>

</section>

`;

}