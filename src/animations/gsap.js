import { gsap } from "gsap";

export function initGSAP(){

const tl = gsap.timeline();

tl

.from(".navbar",{

y:-100,

opacity:0,

duration:1

})

.from(".hero-tag",{

y:40,

opacity:0,

duration:.6

})

.from(".hero-left h1",{

y:50,

opacity:0,

duration:.8

})

.from(".hero-left p",{

y:50,

opacity:0,

duration:.7

})

.from(".hero-buttons a",{

y:30,

opacity:0,

stagger:.2,

duration:.5

})

.from(".stat",{

y:30,

opacity:0,

stagger:.15,

duration:.4

})

.from(".avatar-circle",{

scale:.3,

opacity:0,

duration:1,

ease:"back.out(1.7)"

});

}