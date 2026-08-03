import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        gsap.from(section, {

            y: 80,
            opacity: 0,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 80%",

                toggleActions: "play none none none"

            }

        });

    });

}