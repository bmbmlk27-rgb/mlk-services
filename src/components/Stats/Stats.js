import "./Stats.css";

export default function Stats() {

const stats = [

{
type:"graph",
title:"Projets réalisés",
description:"Sites web, applications et solutions digitales.",
value:120,
suffix:"+"
},

{
type:"circle",
title:"Satisfaction",
description:"Clients satisfaits.",
value:98,
suffix:"%"
},

{
type:"counter",
title:"Communauté",
description:"Clients et membres.",
value:250,
suffix:"+"
},

{
type:"counter",
title:"Disponibilité",
description:"Support technique.",
value:24,
suffix:"/7"
}

];

return `

<section class="stats" id="stats">

<div class="container">

<div class="section-title">

<span>

NOS RÉSULTATS

</span>

<h2>

Des chiffres qui

<span>parlent.</span>

</h2>

<p>

Chaque projet est réalisé avec exigence afin d'offrir des résultats performants.

</p>

</div>

<div class="stats-grid">

${stats.map(stat=>`

<div class="stat-card">

${
stat.type==="graph"

?

`

<div class="graph-box">

<svg
class="graph-svg"
viewBox="0 0 220 120">

<path

class="graph-line"

d="M10 105 L55 82 L95 92 L145 45 L210 15"/>

</svg>

<div

class="counter"

data-target="${stat.value}"

data-suffix="${stat.suffix}">

0

</div>

</div>

`

:

stat.type==="circle"

?

`

<div

class="progress-circle"

data-progress="${stat.value}">

<div class="progress-value">

0%

</div>

</div>

`

:

`

<div

class="counter"

data-target="${stat.value}"

data-suffix="${stat.suffix}">

0

</div>

`

}

<h3>

${stat.title}

</h3>

<p>

${stat.description}

</p>

</div>

`).join("")}

</div>

</div>

</section>

`;

}