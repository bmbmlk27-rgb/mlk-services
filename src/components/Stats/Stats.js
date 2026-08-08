import "./Stats.css";

export default function Stats() {
    return `

<section class="stats" id="stats">

    <div class="container">

        <!-- =========================
             HEADER
        ========================== -->

        <div class="section-title stats-title">

            <span>NOS RÉSULTATS</span>

            <h2>
                Des résultats qui
                <span>parlent.</span>
            </h2>

            <p>
                Des chiffres concrets pour illustrer l'impact
                de notre accompagnement digital.
            </p>

        </div>


        <!-- =========================
             KPI CARDS
        ========================== -->

        <div class="stats-cards">

            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fas fa-eye"></i>
                </div>

                <div class="stat-content">

                    <strong
                        class="counter"
                        data-target="100000"
                        data-suffix="+"
                    >
                        0
                    </strong>

                    <h3>Vues générées</h3>

                    <p>
                        Une visibilité amplifiée pour les contenus
                        et campagnes accompagnés.
                    </p>

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fas fa-users"></i>
                </div>

                <div class="stat-content">

                    <strong
                        class="counter"
                        data-target="50"
                        data-suffix="+"
                    >
                        0
                    </strong>

                    <h3>Clients accompagnés</h3>

                    <p>
                        Entrepreneurs, créateurs et entreprises
                        suivis dans leur croissance.
                    </p>

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fas fa-laptop-code"></i>
                </div>

                <div class="stat-content">

                    <strong
                        class="counter"
                        data-target="20"
                        data-suffix="+"
                    >
                        0
                    </strong>

                    <h3>Sites réalisés</h3>

                    <p>
                        Des expériences web conçues pour
                        convertir et rassurer.
                    </p>

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    <i class="fas fa-star"></i>
                </div>

                <div class="stat-content">

                    <strong
                        class="counter"
                        data-target="98"
                        data-suffix="%"
                    >
                        0
                    </strong>

                    <h3>Clients satisfaits</h3>

                    <p>
                        Un accompagnement réactif du premier
                        échange à la livraison.
                    </p>

                </div>

            </div>

        </div>


        <!-- =========================
             DASHBOARD
        ========================== -->

        <div class="stats-dashboard">


            <!-- GRAPH -->
            <div class="stats-chart">

                <div class="dashboard-header">

                    <div>

                        <span class="dashboard-label">
                            PERFORMANCE
                        </span>

                        <h3>
                            Évolution de la visibilité
                        </h3>

                    </div>

                    <div class="dashboard-badge">
                        <i class="fas fa-arrow-trend-up"></i>
                        Croissance
                    </div>

                </div>


                <div class="chart-area">

                    <div class="chart-y">

                        <span>100K</span>
                        <span>75K</span>
                        <span>50K</span>
                        <span>25K</span>
                        <span>0</span>

                    </div>


                    <div class="chart">

                        <div class="chart-grid">

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>


                        <svg
                            class="chart-svg"
                            viewBox="0 0 700 260"
                            preserveAspectRatio="none"
                        >

                            <defs>

                                <linearGradient
                                    id="statsGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

                                    <stop
                                        offset="0%"
                                        stop-opacity=".35"
                                    />

                                    <stop
                                        offset="100%"
                                        stop-opacity="0"
                                    />

                                </linearGradient>

                            </defs>


                            <path
                                class="chart-fill"
                                d="
                                M0 220
                                C80 205 100 185 160 190
                                C220 195 250 150 310 160
                                C370 170 390 120 450 125
                                C510 130 540 85 590 90
                                C630 95 660 55 700 40
                                L700 260
                                L0 260
                                Z
                                "
                            ></path>


                            <path
                                class="chart-line"
                                d="
                                M0 220
                                C80 205 100 185 160 190
                                C220 195 250 150 310 160
                                C370 170 390 120 450 125
                                C510 130 540 85 590 90
                                C630 95 660 55 700 40
                                "
                            ></path>


                            <circle
                                cx="700"
                                cy="40"
                                r="7"
                                class="chart-point"
                            ></circle>

                        </svg>


                        <div class="chart-months">

                            <span>Jan</span>
                            <span>Fév</span>
                            <span>Mar</span>
                            <span>Avr</span>
                            <span>Mai</span>
                            <span>Juin</span>
                            <span>Juil</span>

                        </div>

                    </div>

                </div>

            </div>


            <!-- PERFORMANCE -->
            <div class="stats-performance">

                <div class="dashboard-header">

                    <div>

                        <span class="dashboard-label">
                            INDICATEURS
                        </span>

                        <h3>
                            Performance MLK
                        </h3>

                    </div>

                </div>


                <div class="performance-list">


                    <div class="performance-item">

                        <div class="performance-top">

                            <span>
                                Visibilité
                            </span>

                            <strong>92%</strong>

                        </div>

                        <div class="progress">

                            <span
                                data-progress="92"
                            ></span>

                        </div>

                    </div>


                    <div class="performance-item">

                        <div class="performance-top">

                            <span>
                                Satisfaction
                            </span>

                            <strong>98%</strong>

                        </div>

                        <div class="progress">

                            <span
                                data-progress="98"
                            ></span>

                        </div>

                    </div>


                    <div class="performance-item">

                        <div class="performance-top">

                            <span>
                                Projets livrés
                            </span>

                            <strong>90%</strong>

                        </div>

                        <div class="progress">

                            <span
                                data-progress="90"
                            ></span>

                        </div>

                    </div>


                    <div class="performance-item">

                        <div class="performance-top">

                            <span>
                                Accompagnement
                            </span>

                            <strong>95%</strong>

                        </div>

                        <div class="progress">

                            <span
                                data-progress="95"
                            ></span>

                        </div>

                    </div>


                </div>

            </div>

        </div>


        <!-- =========================
             CTA
        ========================== -->

        <div class="stats-cta">

            <div>

                <span>
                    <i class="fas fa-chart-line"></i>
                    Prêt à développer votre visibilité ?
                </span>

                <h3>
                    Transformons vos objectifs
                    en résultats concrets.
                </h3>

            </div>

            <a
                href="#contact"
                class="stats-btn"
            >

                Obtenir des résultats

                <i class="fas fa-arrow-right"></i>

            </a>

        </div>

    </div>

</section>

    `;
}