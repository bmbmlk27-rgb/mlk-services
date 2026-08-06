import "./WhyChoose.css";
const features = [["fas fa-gem", "Design Premium", "Une image soign?e qui inspire confiance d?s le premier regard."], ["fas fa-code", "D?veloppement moderne", "Des solutions rapides, fiables et pens?es pour ?voluer avec vous."], ["fas fa-mobile-screen-button", "Optimis? Mobile", "Votre site reste efficace sur tous les ?crans, l? o? vos clients vous d?couvrent."], ["fas fa-bolt", "Livraison rapide", "Un processus clair pour avancer vite sans perdre en qualit?."], ["fas fa-headset", "Support d?di?", "Nous restons disponibles avant, pendant et apr?s la livraison."], ["fas fa-sliders", "Solutions personnalis?es", "Chaque projet est construit autour de vos objectifs, de votre audience et de votre budget."]];
export default function WhyChoose() { return `<section class="whychoose" id="whychoose"><div class="container"><div class="section-title"><span>POURQUOI MLK SERVICES</span><h2>Le partenaire pour <span>faire avancer votre projet.</span></h2><p>Vous ne payez pas seulement un design : vous investissez dans une solution claire, performante et adapt?e ? vos r?sultats.</p></div><div class="why-grid">${features.map(([icon, title, text]) => `<article class="why-card"><div class="why-icon"><i class="${icon}"></i></div><h3>${title}</h3><p>${text}</p></article>`).join("")}</div><div class="section-cta"><a href="#contact" class="btn-primary">D?velopper mon activit?</a></div></div></section>`; }
/*
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
*/
