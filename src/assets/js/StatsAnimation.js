export function initStatsAnimation() {

    const statsSection = document.querySelector("#stats");

    if (!statsSection) return;

    const counters = statsSection.querySelectorAll(".counter");
    const progressBars = statsSection.querySelectorAll(".progress span");
    const chartLine = statsSection.querySelector(".chart-line");
    const chartFill = statsSection.querySelector(".chart-fill");

    let animated = false;


    /* =========================
       ANIMATION DES COMPTEURS
    ========================== */

    function animateCounters() {

        counters.forEach(counter => {

            const target = Number(
                counter.dataset.target || 0
            );

            const suffix =
                counter.dataset.suffix || "";

            const duration = 1800;

            const startTime = performance.now();

            function update(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(elapsed / duration, 1);

                // Easing
                const eased =
                    1 - Math.pow(1 - progress, 3);

                const value =
                    Math.floor(target * eased);

                counter.textContent =
                    value.toLocaleString("fr-FR") + suffix;

                if (progress < 1) {

                    requestAnimationFrame(update);

                } else {

                    counter.textContent =
                        target.toLocaleString("fr-FR") + suffix;

                }

            }

            requestAnimationFrame(update);

        });

    }


    /* =========================
       BARRES DE PERFORMANCE
    ========================== */

    function animateProgressBars() {

        progressBars.forEach(bar => {

            const value =
                Number(bar.dataset.progress || 0);

            bar.style.width = "0%";

            requestAnimationFrame(() => {

                setTimeout(() => {

                    bar.style.width =
                        `${value}%`;

                }, 150);

            });

        });

    }


    /* =========================
       ANIMATION DU GRAPHIQUE
    ========================== */

    function animateChart() {

        if (chartLine) {

            const length =
                chartLine.getTotalLength();

            chartLine.style.strokeDasharray =
                length;

            chartLine.style.strokeDashoffset =
                length;

            requestAnimationFrame(() => {

                setTimeout(() => {

                    chartLine.style.strokeDashoffset =
                        "0";

                }, 200);

            });

        }


        if (chartFill) {

            chartFill.style.opacity = "0";

            setTimeout(() => {

                chartFill.style.opacity = "1";

            }, 500);

        }

    }


    /* =========================
       DÉCLENCHEMENT AU SCROLL
    ========================== */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !animated
                    ) {

                        animated = true;

                        statsSection.classList.add(
                            "stats-visible"
                        );

                        animateCounters();

                        animateProgressBars();

                        animateChart();

                        observer.unobserve(
                            statsSection
                        );

                    }

                });

            },
            {
                threshold: 0.25
            }
        );


    observer.observe(statsSection);


    /* =========================
       FALLBACK
       Si IntersectionObserver
       n'est pas disponible
    ========================== */

    if (
        !("IntersectionObserver" in window)
    ) {

        animated = true;

        statsSection.classList.add(
            "stats-visible"
        );

        animateCounters();

        animateProgressBars();

        animateChart();

    }

}
