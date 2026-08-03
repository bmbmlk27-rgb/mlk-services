import Lenis from "lenis";

let lenis;

export function initLenis() {

    lenis = new Lenis({

        duration: 1.3,

        smoothWheel: true,

        wheelMultiplier: 1,

        touchMultiplier: 1.5,

        infinite: false

    });

    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

}

export { lenis };