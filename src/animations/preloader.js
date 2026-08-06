import gsap from "gsap";

export function preloaderAnimation(){

const hidePreloader = () => {

const tl=gsap.timeline();

tl.to(".loader-progress",{

width:"100%",

duration:3,

ease:"power2.out"

})

.to("#preloader",{

opacity:0,

duration:1,

delay:.3

})

.to("#preloader",{

display:"none"

});

};

// Le cache peut charger le module apres l'evenement load : dans ce cas,
// on execute l'animation immediatement pour ne jamais bloquer la page.
if (document.readyState === "complete") {
    hidePreloader();
} else {
    window.addEventListener("load", hidePreloader, { once: true });
}

}
