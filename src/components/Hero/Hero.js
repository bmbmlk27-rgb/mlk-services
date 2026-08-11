import "./Hero.css";
import avatar from "../../assets/images/avatar.jpeg";

export default function Hero() {
    return `
    <section class="hero" id="accueil">

        <!-- BACKGROUND -->
        <div class="hero-bg">
            <div class="hero-grid"></div>
            <div class="hero-overlay"></div>
        </div>

        <!-- MAIN -->
        <div class="hero-container">

            <!-- TEXTE -->
            <div class="hero-content">

                <div class="hero-label">
                    <span></span>
                    <p>MLK SERVICES</p>
                </div>

                <h1 class="hero-title">
                    CRÉEZ.
                    <br>
                    <span>DÉVELOPPEZ.</span>
                    <br>
                    DOMINEZ.
                </h1>

                <p class="hero-description">
                    Nous créons des solutions digitales modernes pour
                    développer votre présence en ligne, améliorer votre
                    visibilité et donner vie à vos projets.
                </p>

                <div class="hero-actions">

                    <a href="#services" class="hero-btn hero-btn-main">
                        <span>Découvrir nos services</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>

                    <a href="#contact" class="hero-btn hero-btn-outline">
                        Nous contacter
                    </a>

                </div>

                <!-- TECHNOLOGIES -->
                <div class="hero-tech">

                    <span class="hero-tech-title">
                        TECHNOLOGIES
                    </span>

                    <div class="hero-tech-list">

                        <div class="hero-tech-item html">
                            <i class="fab fa-html5"></i>
                            <span>HTML</span>
                        </div>

                        <div class="hero-tech-item css">
                            <i class="fab fa-css3-alt"></i>
                            <span>CSS</span>
                        </div>

                        <div class="hero-tech-item js">
                            <i class="fab fa-js"></i>
                            <span>JavaScript</span>
                        </div>

                        <div class="hero-tech-item vite">
                            <strong>V</strong>
                            <span>Vite</span>
                        </div>

                        <div class="hero-tech-item gsap">
                            <i class="fas fa-bolt"></i>
                            <span>GSAP</span>
                        </div>

                    </div>

                </div>

            </div>


            <!-- IMAGE -->
            <div class="hero-visual">

                <div class="hero-image">

                    <img
                        src="${avatar}"
                        alt="MLK Services"
                    >

                    <div class="hero-image-gradient"></div>

                    <div class="hero-image-top">
                        <span>01</span>
                    </div>

                    <div class="hero-image-bottom">

                        <span>MLK SERVICES</span>

                        <span>DIGITAL EXPERIENCE</span>

                    </div>

                </div>


                <!-- LOGOS FLOTTANTS -->

                <div class="floating-logo floating-html">
                    <i class="fab fa-html5"></i>
                </div>

                <div class="floating-logo floating-css">
                    <i class="fab fa-css3-alt"></i>
                </div>

                <div class="floating-logo floating-js">
                    <i class="fab fa-js"></i>
                </div>

                <div class="floating-logo floating-vite">
                    V
                </div>

            </div>

        </div>


        <!-- BOTTOM -->

        <div class="hero-bottom">

            <div class="scroll-label">
                <span class="scroll-circle"></span>
                SCROLL TO EXPLORE
            </div>

            <div class="scroll-line">
                <span></span>
            </div>

            <span class="hero-year">
                2026
            </span>

        </div>

    </section>
    `;
}