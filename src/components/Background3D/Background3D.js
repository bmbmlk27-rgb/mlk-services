import "./Background3D.css";

export default function Background3D() {

    return `

    <div class="background3d">

        <div class="gradient gradient1"></div>
        <div class="gradient gradient2"></div>

        <div class="grid"></div>

        <div class="particles">

            ${Array.from({ length: 40 }, (_, i) => `
                <span class="particle particle-${i}"></span>
            `).join("")}

        </div>

    </div>

    `;

}