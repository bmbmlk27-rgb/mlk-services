import "./Navbar.css";


export default function Navbar() {

return `

<header class="navbar">


<div class="container navbar-container">


<!-- LOGO -->

<a href="#hero" class="logo">


<div class="logo-icon">

MLK

</div>


<div class="logo-text">

<h2>
MLK Services
</h2>

<span>
Digital Agency
</span>

</div>


</a>



<!-- MENU -->

<nav class="navbar-nav">


<ul class="nav-menu">


<li>
<a href="#hero">
Accueil
</a>
</li>


<li>
<a href="#about">
À propos
</a>
</li>


<li>
<a href="#services">
Services
</a>
</li>


<li>
<a href="#process">
Méthode
</a>
</li>


<li>
<a href="#pronostics">
Pronostics
</a>
</li>


<li>
<a href="#faq">
FAQ
</a>
</li>


<li>
<a href="#contact">
Contact
</a>
</li>


</ul>


</nav>




<!-- ACTIONS -->


<div class="navbar-actions">


<button 
id="theme-toggle"
class="theme-toggle"
aria-label="Changer le thème">

<i class="fas fa-moon"></i>

</button>



<a 
href="#contact"
class="navbar-btn">

Commencer

</a>



<button 
class="mobile-menu"
aria-label="Ouvrir le menu">

<i class="fas fa-bars"></i>

</button>


</div>



</div>


</header>


`;

}