import gsap from "gsap";

export function preloaderAnimation(){

window.addEventListener("load",()=>{

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

});

}