import "./ModelViewer.css";

export default function ModelViewer(type) {

    const icons = {
        web: "💻",
        tiktok: "📈",
        sport: "🏆",
        avatar: "👤"
    };

    return `
        <div class="model-viewer ${type}">
            <div class="model-glow"></div>
            <div class="model-icon">
                ${icons[type] || "✨"}
            </div>
        </div>
    `;
}