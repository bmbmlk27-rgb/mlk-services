import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "Jg4ZhfTuanTdO04FP";
const EMAILJS_SERVICE_ID = "service_4lh8o9u";
const EMAILJS_TEMPLATE_ID = "template_dsl4u2i";

const RECAPTCHA_SITE_KEY =
    "6LcejXotAAAAAIxOSZ8kCoCWn86LZTDOPhrThHz6";

let recaptchaWidgetId = null;


/* ==================================================
   CHARGER GOOGLE reCAPTCHA
================================================== */

function loadRecaptcha() {

    return new Promise((resolve, reject) => {

        if (typeof grecaptcha !== "undefined") {

            grecaptcha.ready(() => {
                resolve();
            });

            return;
        }

        const existingScript = document.querySelector(
            'script[src*="google.com/recaptcha/api.js"]'
        );

        if (existingScript) {

            const check = setInterval(() => {

                if (typeof grecaptcha !== "undefined") {

                    clearInterval(check);

                    grecaptcha.ready(() => {
                        resolve();
                    });

                }

            }, 100);

            setTimeout(() => {

                clearInterval(check);

                if (typeof grecaptcha === "undefined") {
                    reject(
                        new Error("Impossible de charger reCAPTCHA.")
                    );
                }

            }, 10000);

            return;
        }


        const script = document.createElement("script");

        script.src =
            "https://www.google.com/recaptcha/api.js?render=explicit";

        script.async = true;
        script.defer = true;


        script.onload = () => {

            if (typeof grecaptcha === "undefined") {

                reject(
                    new Error("reCAPTCHA n'est pas disponible.")
                );

                return;
            }

            grecaptcha.ready(() => {
                resolve();
            });

        };


        script.onerror = () => {

            reject(
                new Error("Impossible de charger Google reCAPTCHA.")
            );

        };


        document.head.appendChild(script);

    });

}


/* ==================================================
   INITIALISER reCAPTCHA
================================================== */

async function initRecaptcha() {

    const container =
        document.getElementById("contact-recaptcha");

    if (!container) return false;


    try {

        await loadRecaptcha();


        if (
            typeof grecaptcha === "undefined" ||
            typeof grecaptcha.render !== "function"
        ) {

            throw new Error(
                "Le service reCAPTCHA n'est pas disponible."
            );

        }


        if (container.dataset.initialized === "true") {
            return true;
        }


        recaptchaWidgetId = grecaptcha.render(
            container,
            {
                sitekey: RECAPTCHA_SITE_KEY,
                theme: "dark"
            }
        );


        container.dataset.initialized = "true";


        return true;

    } catch (error) {

        console.error(
            "Erreur reCAPTCHA :",
            error
        );

        return false;

    }

}


/* ==================================================
   INITIALISATION CONTACT
================================================== */

export async function initContact() {

    const form =
        document.getElementById("contact-form");

    if (!form) return;


    const button =
        form.querySelector(".contact-submit");

    const buttonText =
        button?.querySelector("span");

    const status =
        document.getElementById("contact-status");


    /* ==============================
       INITIALISER EMAILJS
    ============================== */

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });


    /* ==============================
       INITIALISER RECAPTCHA
    ============================== */

    await initRecaptcha();


    /* ==============================
       EVITER DOUBLE INITIALISATION
    ============================== */

    if (form.dataset.initialized === "true") {
        return;
    }

    form.dataset.initialized = "true";


    /* ==============================
       SUBMIT
    ============================== */

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            /* ------------------------------
               VERIFIER RECAPTCHA
            ------------------------------ */

            if (
                typeof grecaptcha === "undefined" ||
                recaptchaWidgetId === null
            ) {

                if (status) {

                    status.textContent =
                        "Veuillez patienter pendant le chargement de la sécurité.";

                    status.className =
                        "contact-status error";

                }

                return;
            }


            const captchaResponse =
                grecaptcha.getResponse(
                    recaptchaWidgetId
                );


            if (!captchaResponse) {

                if (status) {

                    status.textContent =
                        "Veuillez confirmer que vous n'êtes pas un robot.";

                    status.className =
                        "contact-status error";

                }

                return;
            }


            /* ------------------------------
               ETAT ENVOI
            ------------------------------ */

            if (button) {
                button.disabled = true;
            }

            if (buttonText) {

                buttonText.textContent =
                    "Envoi en cours...";

            }

            if (status) {

                status.textContent =
                    "";

                status.className =
                    "contact-status";

            }


            /* ------------------------------
               DONNEES
            ------------------------------ */

            const formData = {

                name:
                    form.elements["name"]?.value.trim() || "",

                email:
                    form.elements["email"]?.value.trim() || "",

                subject:
                    form.elements["subject"]?.value.trim() || "",

                message:
                    form.elements["message"]?.value.trim() || "",

                "g-recaptcha-response":
                    captchaResponse

            };


            /* ------------------------------
               ENVOI EMAILJS
            ------------------------------ */

            try {

                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    formData
                );


                /* ------------------------------
                   SUCCES
                ------------------------------ */

                form.reset();


                if (
                    typeof grecaptcha !== "undefined" &&
                    recaptchaWidgetId !== null
                ) {

                    grecaptcha.reset(
                        recaptchaWidgetId
                    );

                }


                if (status) {

                    status.textContent =
                        "✓ Votre message a bien été envoyé. Nous vous répondrons rapidement.";

                    status.className =
                        "contact-status success";

                }


                if (buttonText) {

                    buttonText.textContent =
                        "Message envoyé !";

                }


                /* Retour bouton */

                setTimeout(() => {

                    if (buttonText) {

                        buttonText.textContent =
                            "Envoyer le message";

                    }

                    if (button) {
                        button.disabled = false;
                    }

                    if (status) {

                        status.textContent =
                            "";

                        status.className =
                            "contact-status";

                    }

                }, 4000);


            } catch (error) {

                console.error(
                    "Erreur EmailJS :",
                    error
                );


                /* ------------------------------
                   ERREUR
                ------------------------------ */

                if (status) {

                    status.textContent =
                        "Une erreur est survenue. Vérifiez votre connexion puis réessayez.";

                    status.className =
                        "contact-status error";

                }


                if (buttonText) {

                    buttonText.textContent =
                        "Erreur d'envoi";

                }


                if (
                    typeof grecaptcha !== "undefined" &&
                    recaptchaWidgetId !== null
                ) {

                    grecaptcha.reset(
                        recaptchaWidgetId
                    );

                }


                setTimeout(() => {

                    if (buttonText) {

                        buttonText.textContent =
                            "Envoyer le message";

                    }

                    if (button) {
                        button.disabled = false;
                    }

                }, 3000);

            }

        }
    );

}