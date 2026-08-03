export function cursorAnimation(){

const cursor=document.querySelector(".cursor");
const dot=document.querySelector(".cursor-dot");

if(!cursor || !dot) return;

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.service-card,.portfolio-card").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});

}