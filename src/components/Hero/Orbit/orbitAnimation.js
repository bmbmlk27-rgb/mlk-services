import gsap from "gsap";

export function initOrbit() {

    const cards = gsap.utils.toArray(".orbit-item");

    if (!cards.length) return;

    const state = {
        angle: 0
    };

    const radiusX = 220;
    const radiusY = 80;

    function render() {

        cards.forEach((card, index) => {

            const angle =
                state.angle +
                (index * Math.PI * 2) / cards.length;

            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;

            const depth = (Math.sin(angle) + 1) / 2;

            gsap.set(card, {

                x,

                y,

                scale: 0.68 + depth * 0.45,

                opacity: 0.35 + depth * 0.65,

                rotationY: Math.cos(angle) * 22,

                rotationX: -Math.sin(angle) * 10,

                zIndex: Math.round(depth * 100),

                filter: `blur(${(1 - depth) * 2}px)`,

                boxShadow: `0 ${15 + depth * 20}px ${35 + depth * 20}px rgba(0,0,0,.45)`

            });

        });

    }

    render();

    gsap.to(state, {

        angle: Math.PI * 2,

        duration: 18,

        repeat: -1,

        ease: "none",

        onUpdate: render

    });

    // Animation légère au survol
    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {

                scale: "+=0.08",

                duration: 0.35,

                ease: "power2.out"

            });

        });

        card.addEventListener("mouseleave", () => {

            render();

        });

    });

}