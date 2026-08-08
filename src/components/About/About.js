import "./About.css";
import avatar from "../../assets/images/avatar/avatar.png";

export default function About() {

return `

<section class="about" id="about">

<div class="container">

<div class="about-grid">

<div class="about-left">

<span class="section-tag">

À PROPOS

</span>

<h2>

Votre partenaire pour développer une

<span>présence digitale performante.</span>

</h2>

<p>

Chez <strong>MLK Services</strong>, nous accompagnons les entrepreneurs, les entreprises et les créateurs de contenu dans leur développement digital grâce à des solutions modernes, innovantes et adaptées à leurs objectifs. Notre mission est de transformer vos idées en projets concrets qui renforcent votre image, développent votre visibilité et vous permettent d'atteindre davantage de clients.

</p>

<p>

Nous ne créons pas simplement des sites internet. Nous construisons une véritable stratégie digitale en combinant développement web, Intelligence Artificielle, réseaux sociaux, marketing digital et accompagnement personnalisé afin de vous aider à faire évoluer durablement votre activité.

</p>

<div class="about-features">

<div class="feature">

<i class="fas fa-globe"></i>

<span>Sites web professionnels & E-commerce</span>

</div>

<div class="feature">

<i class="fas fa-robot"></i>

<span>Solutions basées sur l'Intelligence Artificielle</span>

</div>

<div class="feature">

<i class="fab fa-tiktok"></i>

<span>Développement TikTok & Réseaux sociaux</span>

</div>

<div class="feature">

<i class="fas fa-chart-line"></i>

<span>Marketing Digital & Développement de votre visibilité</span>

</div>

<div class="feature">

<i class="fas fa-handshake"></i>

<span>Accompagnement personnalisé tout au long du projet</span>

</div>

<div class="feature">

<i class="fas fa-futbol"></i>

<span>Communauté Pronostics Premium</span>

</div>

</div>

<a href="#contact" class="about-btn">

Parler de mon projet

</a>

</div>

<div class="about-right">

<div class="about-card">

<img

src="${avatar}"

alt="MLK Services"

>

<h3>MLK Services</h3>

<p>

Développement Web • Intelligence Artificielle • Marketing Digital

</p>

</div>

</div>

</div>

</div>

</section>

`;

}