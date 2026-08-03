import { gsap } from "gsap";

function animateValue(selector, end, duration, suffix = "") {
    const element = document.querySelector(selector);

    if (!element) return;

    const obj = { value: 0 };

    gsap.to(obj, {
        value: end,
        duration,
        ease: "power2.out",

        onUpdate() {
            element.textContent = Math.floor(obj.value).toLocaleString() + suffix;
        }
    });
}

export function initCounters() {

    animateValue("#stat1", 500000, 2.5, "+");

    animateValue("#stat2", 100, 2);

    animateValue("#stat3", 98, 2, "%");

}