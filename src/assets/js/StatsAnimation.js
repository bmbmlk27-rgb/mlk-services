import gsap from "gsap";

export function initStatsAnimation(){

const section=document.querySelector(".stats");

if(!section) return;

let played=false;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting || played) return;

played=true;

observer.disconnect();

animateGraph();

animateCounters();

animateCircle();

});

},{threshold:.3});

observer.observe(section);

}

/*==========================
      COURBE
==========================*/

function animateGraph(){

const line=document.querySelector(".graph-line");

if(!line) return;

const length=line.getTotalLength();

line.style.strokeDasharray=length;

line.style.strokeDashoffset=length;

gsap.to(line,{

strokeDashoffset:0,

duration:2.5,

ease:"power3.out"

});

}

/*==========================
      COMPTEURS
==========================*/

function animateCounters(){

document.querySelectorAll(".counter").forEach(counter=>{

const target=Number(counter.dataset.target);

const suffix=counter.dataset.suffix||"";

const obj={value:0};

gsap.to(obj,{

value:target,

duration:2,

ease:"power2.out",

onUpdate(){

counter.textContent=Math.floor(obj.value)+suffix;

}

});

});

}

/*==========================
      CERCLE
==========================*/

function animateCircle(){

const circle=document.querySelector(".progress-circle");

if(!circle) return;

const value=Number(circle.dataset.progress);

const text=circle.querySelector(".progress-value");

const obj={progress:0};

gsap.to(obj,{

progress:value,

duration:2,

ease:"power2.out",

onUpdate(){

const deg=obj.progress*3.6;

// Les variables gardent la jauge coherente apres un changement de theme.
circle.style.background=`conic-gradient(var(--primary) ${deg}deg, var(--surface-light) ${deg}deg)`;

text.textContent=Math.floor(obj.progress)+"%";

}

});

}
