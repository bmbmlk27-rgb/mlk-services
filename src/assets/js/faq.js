export function initFAQ(){

const items=document.querySelectorAll(".faq-item");

items.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

item.classList.toggle("active");

});

});

}