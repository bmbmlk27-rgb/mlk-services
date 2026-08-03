import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {

    gsap.utils.toArray("section").forEach((section) => {

        gsap.from(section, {

            opacity: 0,
            y: 80,
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }

        });

    });

}