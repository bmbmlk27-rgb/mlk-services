import "./WhyChoose.css";

const features = [

{
icon:"<i class='fas fa-bolt'></i>",
title:"Rapidité",
text:"Nous livrons des solutions modernes dans les meilleurs délais, sans compromettre la qualité."
},

{
icon:"<i class='fas fa-gem'></i>",
title:"Qualité Premium",
text:"Chaque projet bénéficie d'un design élégant, responsive et optimisé pour une expérience utilisateur exceptionnelle."
},

{
icon:"<i class='fas fa-headset'></i>",
title:"Support Dédié",
text:"Nous vous accompagnons avant, pendant et après votre projet afin de garantir votre satisfaction."
},

{
icon:"<i class='fas fa-chart-line'></i>",
title:"Résultats Concrets",
text:"Nos solutions sont pensées pour améliorer votre visibilité, développer votre activité et atteindre vos objectifs."
}

];

export default function WhyChoose(){

return `

<section class="whychoose" id="whychoose">

<div class="container">

<div class="section-title">

<span>

POURQUOI MLK SERVICES

</span>

<h2>

Pourquoi nous faire

<span>confiance ?</span>

</h2>

<p>

MLK Services combine créativité, développement web, intelligence artificielle
et marketing digital afin de proposer des solutions performantes,
modernes et adaptées à chaque client.

</p>

</div>

<div class="why-grid">

${features.map(item=>`

<div class="why-card">

<div class="why-icon">

${item.icon}

</div>

<h3>

${item.title}

</h3>

<p>

${item.text}

</p>

</div>

`).join("")}

</div>

</div>

</section>

`;

}