`import gsap from "gsap";

export function initPageAnimations(){

    const tl = gsap.timeline({
        defaults:{
            duration:0.8,
            ease:"power3.out"
        }
    });

    // Badge
    tl.from(".hero-badge",{
        opacity:0,
        y:25
    })

    // Titre
    .from(".hero-content h1",{
        opacity:0,
        y:50
    },"-=0.4")

    // Texte
    .from(".hero-content p",{
        opacity:0,
        y:25
    },"-=0.4")

    // Boutons
    .from(".hero-buttons a",{
        opacity:0,
        y:20,
        stagger:0.15
    },"-=0.3")

    // Carte MLK
    .from(".identity-card",{
        opacity:0,
        scale:0.92,
        y:30
    },"-=0.5")

    // Orbite
    .from(".services-orbit",{
        opacity:0,
        scale:0.85
    },"-=0.3");

}
`