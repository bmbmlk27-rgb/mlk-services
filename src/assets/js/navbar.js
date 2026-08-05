export default function initNavbar() {

    const menuBtn = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const themeBtn = document.getElementById("theme-toggle");
    const themeIcon = themeBtn?.querySelector("i");

    // ===========================
    // MENU MOBILE
    // ===========================

    if(menuBtn && nav){

        menuBtn.addEventListener("click", ()=>{

            nav.classList.toggle("active");

            document.body.classList.toggle("menu-open");

            const icon = menuBtn.querySelector("i");

            if(nav.classList.contains("active")){

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            }else{

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    // Fermer après clic

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

            document.body.classList.remove("menu-open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    // ===========================
    // THEME
    // ===========================

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme){

        document.documentElement.setAttribute("data-theme",savedTheme);

        updateIcon(savedTheme);

    }

    themeBtn?.addEventListener("click",()=>{

        const current = document.documentElement.getAttribute("data-theme");

        const next = current === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme",next);

        localStorage.setItem("theme",next);

        updateIcon(next);

    });

    function updateIcon(theme){

        if(!themeIcon) return;

        if(theme==="light"){

            themeIcon.className="fas fa-sun";

        }else{

            themeIcon.className="fas fa-moon";

        }

    }

}