import "./style.css";
import "./assets/css/theme.css";
import "./assets/css/marketing.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { initLenis } from "./libs/lenis.js";
import { initAnimations } from "./animations/index.js";

import { initFAQ } from "./assets/js/faq.js";
import { initContact } from "./assets/js/contact.js";
import { initStatsAnimation } from "./assets/js/StatsAnimation.js";

import WhatsApp from "./components/WhatsApp/WhatsApp.js";

import Background from "./components/Background/Background.js";
import Preloader from "./components/Preloader/Preloader.js";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";
import Services from "./components/Services/Services.js";
import Process from "./components/Process/Process.js";
import Pronostics from "./components/Pronostics/Pronostics.js";
import WhyChoose from "./components/WhyChoose/WhyChoose.js";
import FAQ from "./components/FAQ/FAQ.js";
import Stats from "./components/Stats/Stats.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Cursor from "./components/Cursor/Cursor.js";


import { initScrollAnimations } from "./animations/scrollAnimations.js";
import initNavbar from "./assets/js/navbar";

document.querySelector("#app").innerHTML = `
${Preloader()}
${Background()}
${Cursor()}

${Navbar()}
${Hero()}
${About()}
${Services()}
${Process()}
${Pronostics()}
${WhyChoose()}
${FAQ()}
${Stats()}
${Contact()}
${Footer()}

${WhatsApp()}
`;

// =========================
// INITIALISATION
// =========================

initFAQ();

initLenis();

initAnimations();



initScrollAnimations();

initStatsAnimation();

initNavbar();

// =========================
// ATTENDRE LE CHARGEMENT DE reCAPTCHA
// =========================

const waitForRecaptcha = () => {

    if (typeof window.grecaptcha !== "undefined") {

        initContact();

    } else {

        setTimeout(waitForRecaptcha, 300);

    }

};

waitForRecaptcha();
