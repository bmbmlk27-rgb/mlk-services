import emailjs from "@emailjs/browser";

emailjs.init("Jg4ZhfTuanTdO04FP");

export function initContact() {

    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const button = form.querySelector("button");
        const span = button.querySelector("span");

        button.disabled = true;
        span.textContent = "Envoi en cours...";

        try {

            const response = await emailjs.send(
                "service_4lh8o9u",
                "template_dsl4u2i",
                {
                    name: form.name.value,
                    email: form.email.value,
                    subject: form.subject.value,
                    message: form.message.value
                }
            );

            console.log("EmailJS :", response);

            form.reset();

            span.textContent = "✓ Message envoyé !";

        } catch (error) {

            console.error("Erreur EmailJS :", error);

            span.textContent = "Erreur d'envoi";

        }

        setTimeout(() => {

            button.disabled = false;
            span.textContent = "Envoyer le message";

        }, 3000);

    });

}