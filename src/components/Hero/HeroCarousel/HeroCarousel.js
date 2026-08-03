import "./HeroCarousel.css";

export default function HeroCarousel(){

const cards=[

{
title:"WEB",
image:"/src/assets/images/services/web.png"
},

{
title:"IA",
image:"/src/assets/images/services/ai.png"
},

{
title:"TIKTOK",
image:"/src/assets/images/services/tiktok.png"
},

{
title:"PRONOSTICS",
image:"/src/assets/images/services/football.png"
}

];

return `

<div class="hero-carousel">

${cards.map(card=>`

<div class="orbit-card">

<img src="${card.image}" alt="${card.title}">

<h4>${card.title}</h4>

</div>

`).join("")}

</div>

`;

}