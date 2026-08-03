import "./Orbit.css";

import web from "../../../assets/images/services/code.jpeg";
import ia from "../../../assets/images/services/ia.jpeg";
import tiktok from "../../../assets/images/services/tiktok2.jpeg";
import football from "../../../assets/images/services/foot.jpeg";

const cards = [

    {
        image: web,
        title: "Web"
    },

    {
        image: ia,
        title: "IA"
    },

    {
        image: tiktok,
        title: "TikTok"
    },

    {
        image: football,
        title: "Pronostics"
    }

];

export default function Orbit(){

    return `

    <div class="services-orbit">

        ${cards.map(card => `

            <div class="orbit-item">

                <img
                    src="${card.image}"
                    alt="${card.title}"
                >

                <h3>${card.title}</h3>

            </div>

        `).join("")}

    </div>

    `;

}