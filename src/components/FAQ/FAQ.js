import "./FAQ.css";

const faqs = [

{
question:"💻 Créez-vous des sites web sur mesure ?",
answer:"Oui. Nous développons des sites vitrines, boutiques en ligne, landing pages et applications web entièrement personnalisés selon vos besoins."
},

{
question:"📱 Proposez-vous des services TikTok ?",
answer:"Oui. Nous accompagnons la création de comptes, l'augmentation de la visibilité, la monétisation et les stratégies de croissance."
},

{
question:"⚽ Les pronostics sont-ils publiés chaque jour ?",
answer:"Oui. Nos communautés reçoivent régulièrement des analyses détaillées, des matchs sélectionnés et des conseils."
},

{
question:"🤖 Utilisez-vous l'Intelligence Artificielle ?",
answer:"Oui. Nous intégrons des outils d'IA pour accélérer le développement, améliorer les contenus et proposer des solutions innovantes."
},

{
question:"📞 Comment puis-je vous contacter ?",
answer:"Vous pouvez nous joindre via WhatsApp, Telegram ou directement grâce au formulaire de contact disponible sur le site."
}

];

export default function FAQ(){

return `

<section class="faq" id="faq">

<div class="container">

<div class="section-title">

<span>

FAQ

</span>

<h2>

Questions

<span>fréquentes</span>

</h2>

<p>

Retrouvez rapidement les réponses aux questions les plus posées concernant nos services, nos pronostics et notre accompagnement.

</p>

</div>

<div class="faq-list">

${faqs.map(item=>`

<div class="faq-item">

<button class="faq-question">

<span>

${item.question}

</span>

<i class="fas fa-plus"></i>

</button>

<div class="faq-answer">

<p>

${item.answer}

</p>

</div>

</div>

`).join("")}

</div>

</div>

</section>

`;

}