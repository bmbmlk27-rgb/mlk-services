export function initNavbar() {

    /* =========================
       MENU MOBILE
    ========================= */

    const menuButton =
        document.querySelector("#mlk-menu-toggle");

    const mobileMenu =
        document.querySelector("#mlk-mobile-menu");

    const mobileLinks =
        document.querySelectorAll(".mobile-nav-link");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       THÈME LIGHT / DARK
    ========================= */

    const themeButton =
        document.querySelector("#theme-toggle");

    const themeKnob =
        document.querySelector(".liquid-knob");

    const themeLabel =
        document.querySelector(".theme-label");

    if (!themeButton) return;


    /* Récupérer le thème sauvegardé */

    const savedTheme =
        localStorage.getItem("mlk-theme") || "dark";


    applyTheme(savedTheme);


    /* Cliquer sur le bouton */

    themeButton.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.dataset.theme;

        const newTheme =
            currentTheme === "light"
                ? "dark"
                : "light";

        applyTheme(newTheme);

        localStorage.setItem(
            "mlk-theme",
            newTheme
        );

    });


    function applyTheme(theme) {

        document.documentElement.dataset.theme =
            theme;


        if (theme === "light") {

            if (themeKnob) {

                themeKnob.style.transform =
                    "translateX(48px)";

            }

            if (themeLabel) {

                themeLabel.textContent =
                    "Dark";

            }

            themeButton.setAttribute(
                "aria-label",
                "Activer le thème sombre"
            );

        } else {

            if (themeKnob) {

                themeKnob.style.transform =
                    "translateX(0)";

            }

            if (themeLabel) {

                themeLabel.textContent =
                    "Light";

            }

            themeButton.setAttribute(
                "aria-label",
                "Activer le thème clair"
            );

        }

    }

}