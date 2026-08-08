import "./FAQ.css";


const faqs = [

{
icon:"fas fa-code",
question:"Création de sites web",
answer:
"Nous réalisons des sites vitrines, boutiques en ligne, landing pages et applications web modernes adaptés à votre activité."
},


{
icon:"fab fa-tiktok",
question:"Accompagnement TikTok",
answer:
"Nous aidons à créer, développer et optimiser vos comptes TikTok grâce à des stratégies de visibilité et de croissance."
},


{
icon:"fas fa-futbol",
question:"Pronostics Premium",
answer:
"Notre communauté bénéficie d'analyses sportives, de sélections de matchs et d'un accompagnement Premium."
},


{
icon:"fas fa-robot",
question:"Solutions Intelligence Artificielle",
answer:
"Nous intégrons des outils d'intelligence artificielle pour automatiser certaines tâches et améliorer vos performances digitales."
},


{
icon:"fas fa-headset",
question:"Comment nous contacter ?",
answer:
"Vous pouvez nous contacter via WhatsApp, Telegram ou le formulaire disponible dans la section contact."
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
<span>
fréquentes
</span>

</h2>



<p>

Les réponses aux questions les plus courantes concernant nos services.

</p>


</div>




<div class="faq-list">


${faqs.map(item=>`


<div class="faq-item">



<button 
class="faq-question"
type="button">


<span>


<i class="${item.icon}"></i>

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




<div class="section-cta">


<a href="#contact" class="btn-primary">

Parler de mon projet

</a>


</div>



</div>


</section>


`;

}