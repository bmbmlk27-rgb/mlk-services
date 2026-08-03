import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {

    // Sections
    gsap.utils.toArray("section").forEach((section) => {

        gsap.from(section, {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

    });

    // Cartes
    gsap.utils.toArray(
        ".service-card, .why-card, .stat-card, .info-card, .faq-item"
    ).forEach((card) => {

        gsap.from(card, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            }
        });

    });

}