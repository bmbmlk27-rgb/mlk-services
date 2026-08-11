import "./Navbar.css";

export default function Navbar() {

    return `

    <header class="mlk-navbar">

        <a href="#accueil" class="mlk-brand" aria-label="MLK Services">
            <img 
                src="/src/assets/images/logo.png" 
                alt="MLK Services"
            >
        </a>

        <nav class="mlk-nav">

            <a href="#accueil" class="mlk-nav-link active">
                <i class="fa-solid fa-house"></i>
                <span>Accueil</span>
            </a>

            <a href="#about" class="mlk-nav-link">
                <i class="fa-solid fa-user"></i>
                <span>À propos</span>
            </a>

            <a href="#services" class="mlk-nav-link">
                <i class="fa-solid fa-layer-group"></i>
                <span>Services</span>
            </a>

            <a href="#pronostics" class="mlk-nav-link">
                <i class="fa-solid fa-chart-pie"></i>
                <span>Pronostics</span>
            </a>

            <a href="#contact" class="mlk-nav-link">
                <i class="fa-solid fa-envelope"></i>
                <span>Contact</span>
            </a>

        </nav>

        <div class="mlk-navbar-actions">

            <button 
                class="liquid-theme-toggle"
                id="theme-toggle"
                type="button"
                aria-label="Changer le thème"
            >
                <span class="liquid-knob">
                    <i class="fa-solid fa-sun"></i>
                </span>

                <span class="theme-label">Light</span>
            </button>

            <button
                class="mlk-menu-toggle"
                id="mlk-menu-toggle"
                type="button"
                aria-label="Ouvrir le menu"
                aria-expanded="false"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>

    </header>

    <div class="mlk-mobile-menu" id="mlk-mobile-menu">

        <nav>

            <a href="#accueil" class="mobile-nav-link">
                <i class="fa-solid fa-house"></i>
                <span>Accueil</span>
            </a>

            <a href="#about" class="mobile-nav-link">
                <i class="fa-solid fa-user"></i>
                <span>À propos</span>
            </a>

            <a href="#services" class="mobile-nav-link">
                <i class="fa-solid fa-layer-group"></i>
                <span>Services</span>
            </a>

            <a href="#pronostics" class="mobile-nav-link">
                <i class="fa-solid fa-chart-pie"></i>
                <span>Pronostics</span>
            </a>

            <a href="#contact" class="mobile-nav-link">
                <i class="fa-solid fa-envelope"></i>
                <span>Contact</span>
            </a>

        </nav>

    </div>

    `;
}