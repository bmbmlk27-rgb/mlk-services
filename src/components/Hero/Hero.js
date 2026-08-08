import "./Hero.css";
import HeroParticles from "./HeroParticles";
import avatar from "../../assets/images/avatar/avatar.png";

export default function Hero() {
    return `
<section class="hero" id="hero">

    <div class="hero-bg"></div>

    <div class="particles">
        ${HeroParticles()}
    </div>

    <div class="container hero-container">

        <div class="hero-content">

            <span class="hero-badge">
                🚀 Agence digitale • Création Web • IA • Marketing Digital
            </span>

            <h1>
                Développez votre entreprise grâce à une présence digitale professionnelle.<br>
                <span>
                    Attirez plus de clients. Renforcez votre image. Accélérez votre croissance.
                </span>
            </h1>

            <p>
                <strong>MLK Services</strong> accompagne les entrepreneurs,
                les entreprises et les créateurs de contenu dans leur transformation
                digitale grâce à des solutions modernes et performantes.
                Nous créons des sites web professionnels, développons votre visibilité
                sur les réseaux sociaux, intégrons des solutions d'Intelligence
                Artificielle et vous aidons à développer durablement votre activité.
            </p>

            <ul class="hero-services" aria-label="Nos domaines d'expertise">

                <li>
                    <i class="fas fa-check-circle"></i>
                    Sites Web Professionnels
                </li>

                <li>
                    <i class="fas fa-check-circle"></i>
                    E-commerce
                </li>

                <li>
                    <i class="fas fa-check-circle"></i>
                    Développement TikTok
                </li>

                <li>
                    <i class="fas fa-check-circle"></i>
                    Intelligence Artificielle
                </li>

                <li>
                    <i class="fas fa-check-circle"></i>
                    Marketing Digital
                </li>

                <li>
                    <i class="fas fa-check-circle"></i>
                    Pronostics Premium
                </li>

            </ul>

            <div class="hero-buttons">

                <a href="#contact" class="btn-primary">
                    Démarrer mon projet
                </a>

                <a href="#services" class="btn-secondary">
                    Découvrir nos services
                </a>

            </div>

            <div class="hero-trust">

                <div class="trust-item">
                    <i class="fas fa-laptop-code"></i>
                    <span>Sites modernes</span>
                </div>

                <div class="trust-item">
                    <i class="fas fa-mobile-alt"></i>
                    <span>100 % Responsive</span>
                </div>

                <div class="trust-item">
                    <i class="fas fa-headset"></i>
                    <span>Support personnalisé</span>
                </div>

                <div class="trust-item">
                    <i class="fas fa-rocket"></i>
                    <span>Solutions performantes</span>
                </div>

            </div>

        </div>


        <!-- =========================
             VISUEL HERO
        ========================== -->

        <div class="hero-visual">

            <div class="identity-card">

                <div class="identity-glow"></div>

                <img
                    src="${avatar}"
                    alt="MLK Services"
                    class="identity-avatar"
                >

                <h2>
                    MLK Services
                </h2>

                <span class="identity-job">
                    Développement Web • IA • Marketing Digital
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

        </div>

    </div>

</section>
`;
}