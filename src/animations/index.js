import { navbarAnimation } from "./navbar.js";
import { heroAnimation } from "./hero.js";
import { aboutAnimation } from "./about.js";
import { servicesAnimation } from "./services.js";
import { portfolioAnimation } from "./portfolio.js";
import { pronosticsAnimation } from "./pronostics.js";
import { faqAnimation } from "./faq.js";
import { contactAnimation } from "./contact.js";
import { footerAnimation } from "./footer.js";
import { avatarAnimation } from "./avatar.js";
import { preloaderAnimation } from "./preloader.js";
import { cursorAnimation } from "./cursor.js";

import { initScrollAnimations } from "./scroll.js";

export function initAnimations() {

    preloaderAnimation();
    avatarAnimation();
    navbarAnimation();
    heroAnimation();
    aboutAnimation();
    servicesAnimation();
    portfolioAnimation();
    pronosticsAnimation();
    faqAnimation();
    contactAnimation();
    footerAnimation();
    cursorAnimation();

    initScrollAnimations();

}