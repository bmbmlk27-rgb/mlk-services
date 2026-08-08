import "./Services.css";

import web from "../../assets/images/services/web.jpeg";
import ia from "../../assets/images/services/ai.jpeg";
import tiktok from "../../assets/images/services/tiktok.jpeg";
import football from "../../assets/images/services/football.jpeg";


const services = [

{
    image:web,
    title:"Sites Web & E-commerce",

    description:
    "Nous créons des sites web professionnels, des sites vitrines modernes et des boutiques en ligne performantes qui renforcent votre crédibilité, présentent votre activité et transforment vos visiteurs en clients potentiels.",

    benefits:[
        "Une présence professionnelle disponible 24h/24",
        "Plus de visibilité, de contacts et d'opportunités",
        "Une expérience rapide et parfaitement adaptée au mobile"
    ],

    proof:
    "Votre site devient un véritable outil de croissance pour développer votre activité."
},


{
    image:ia,
    title:"Applications & Identité digitale",

    description:
    "Nous développons des applications web sur mesure et construisons une identité digitale forte afin de simplifier vos processus, valoriser votre marque et améliorer votre présence en ligne.",

    benefits:[
        "Des outils adaptés à vos besoins",
        "Une image de marque plus professionnelle",
        "Des solutions modernes et évolutives"
    ],

    proof:
    "Chaque solution est pensée autour de vos objectifs, votre audience et votre évolution."
},


{
    image:tiktok,
    title:"Croissance & Monétisation TikTok",

    description:
    "Nous vous accompagnons dans le développement de votre présence TikTok avec une stratégie adaptée pour augmenter votre visibilité, construire une communauté et exploiter votre potentiel de monétisation.",

    benefits:[
        "Plus de visibilité et d'engagement",
        "Une audience mieux ciblée",
        "Une stratégie claire pour développer vos revenus"
    ],

    proof:
    "Votre contenu devient un véritable levier de communication et de croissance."
},


{
    image:football,
    title:"Pronostics Sportifs Premium",

    description:
    "Rejoignez notre communauté Premium et profitez d'analyses sportives, de sélections étudiées et du code promo officiel WinWin MLK225.",

    benefits:[
        "Des analyses et conseils réguliers",
        "Une communauté VIP active",
        "Un accès rapide via WhatsApp et Telegram"
    ],

    proof:
    "Un accompagnement structuré pour suivre vos pronostics dans les meilleures conditions."
}

];


export default function Services(){

return `

<section class="services" id="services">

<div class="container">


<div class="section-title">

<span>NOS SERVICES</span>


<h2>

Des solutions digitales pensées pour

<span>développer votre réussite.</span>

</h2>


<p>

MLK Services transforme vos idées en solutions digitales modernes.
Nous aidons les entrepreneurs, entreprises et créateurs de contenu
à gagner en visibilité, améliorer leur image et développer leur activité.

</p>


</div>



<div class="services-grid">


${services.map(service => `


<article class="service-card">


<div class="service-image">

<img 
src="${service.image}"
alt="${service.title}"
loading="lazy">

</div>



<div class="service-content">


<h3>${service.title}</h3>



<p>

${service.description}

</p>



<ul class="service-benefits">

${service.benefits.map(benefit=>`

<li>

<i class="fas fa-check-circle"></i>

${benefit}

</li>

`).join("")}

</ul>



<p class="service-proof">

${service.proof}

</p>



</div>


</article>


`).join("")}


</div>



<div class="section-cta">

<a href="#contact" class="btn-primary">

Parlons de votre projet

<i class="fas fa-arrow-right"></i>

</a>

</div>



</div>


</section>

`;

}