import "./FAQ.css";

const faqs = [
    {
        question: "💻 Sites web sur mesure",
        answer: "Nous développons des sites vitrines, boutiques en ligne, landing pages et applications web entièrement personnalisés selon vos besoins."
    },
    {
        question: "📱 Accompagnement TikTok",
        answer: "Nous accompagnons la création de comptes, la croissance de la visibilité, la monétisation et les stratégies de contenu."
    },
    {
        question: "⚽ Pronostics Premium",
        answer: "Nos communautés reçoivent régulièrement des analyses détaillées, des matchs sélectionnés et des conseils."
    },
    {
        question: "🤖 Solutions d'Intelligence Artificielle",
        answer: "Nous intégrons des outils d'IA pour accélérer le développement, améliorer les contenus et proposer des solutions innovantes."
    },
    {
        question: "📞 Nous contacter",
        answer: "Contactez MLK SERVICES via WhatsApp, Telegram ou directement avec le formulaire de contact."
    }
];

export default function FAQ() {
    return `
<section class="faq" id="faq">
    <div class="container">
        <div class="section-title">
            <span>FAQ</span>
            <h2>Informations <span>essentielles</span></h2>
            <p>Retrouvez les informations utiles sur nos services, nos pronostics et notre accompagnement.</p>
        </div>
        <div class="faq-list">
            ${faqs.map((item) => `
                <div class="faq-item">
                    <button class="faq-question" type="button">
                        <span>${item.question}</span>
                        <i class="fas fa-plus"></i>
                    </button>
                    <div class="faq-answer"><p>${item.answer}</p></div>
                </div>`).join("")}
        </div>
        <div class="section-cta"><a href="#contact" class="btn-primary">Parler de mon projet</a></div>
    </div>
</section>`;
}