export function heroOrbit(){

const cards=[

...document.querySelectorAll(".orbit-card")

];

if(cards.length===0) return;

setInterval(()=>{

cards.forEach(card=>{

if(card.classList.contains("active")){

card.className="orbit-card left";

}

else if(card.classList.contains("left")){

card.className="orbit-card back";

}

else if(card.classList.contains("back")){

card.className="orbit-card right";

}

else if(card.classList.contains("right")){

card.className="orbit-card active";

}

});

},3000);

}