import "./Contact.css";

export default function Contact() {

    return `

    <section class="contact" id="contact">

        <div class="container">

            <div class="section-title contact-title">

                <span>CONTACT</span>

                <h2>
                    Parlons de votre
                    <span>projet</span>
                </h2>

                <p>
                    Une idée, un projet ou une question ?
                    Envoyez-nous un message et l'équipe MLK Services
                    vous répondra rapidement.
                </p>

            </div>

            <div class="contact-wrapper">

                <!-- ========================= -->
                <!-- INFORMATIONS -->
                <!-- ========================= -->

                <div class="contact-info">

                    <div class="contact-intro">

                        <div class="contact-badge">
                            <i class="fas fa-comments"></i>
                            <span>Disponible pour vous</span>
                        </div>

                        <h3>
                            Construisons quelque chose
                            <span>de remarquable.</span>
                        </h3>

                        <p>
                            Que ce soit pour un site web, les réseaux sociaux,
                            les pronostics ou une collaboration, contactez MLK Services.
                        </p>

                    </div>


                    <!-- TELEPHONE -->

                    <a
                        href="tel:+2250787913032"
                        class="info-card"
                    >

                        <div class="info-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>

                        <div class="info-content">

                            <span>Téléphone</span>

                            <strong>
                                +225 07 87 91 30 32
                            </strong>

                            <small>
                                Appel direct
                            </small>

                        </div>

                        <i class="fas fa-arrow-up-right-from-square info-arrow"></i>

                    </a>


                    <!-- WHATSAPP -->

                    <a
                        href="https://wa.me/2250787913032"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="info-card whatsapp-card"
                    >

                        <div class="info-icon">
                            <i class="fab fa-whatsapp"></i>
                        </div>

                        <div class="info-content">

                            <span>WhatsApp</span>

                            <strong>
                                Discussion directe
                            </strong>

                            <small>
                                Réponse rapide
                            </small>

                        </div>

                        <i class="fas fa-arrow-up-right-from-square info-arrow"></i>

                    </a>


                    <!-- EMAIL -->

                    <a
                        href="mailto:bmbmlk27@gmail.com"
                        class="info-card"
                    >

                        <div class="info-icon">
                            <i class="fas fa-envelope"></i>
                        </div>

                        <div class="info-content">

                            <span>Email</span>

                            <strong>
                                bmbmlk27@gmail.com
                            </strong>

                            <small>
                                Pour vos projets professionnels
                            </small>

                        </div>

                        <i class="fas fa-arrow-up-right-from-square info-arrow"></i>

                    </a>


                    <!-- LOCALISATION -->

                    <div class="info-card">

                        <div class="info-icon">
                            <i class="fas fa-location-dot"></i>
                        </div>

                        <div class="info-content">

                            <span>Localisation</span>

                            <strong>
                                Côte d'Ivoire
                            </strong>

                            <small>
                                Abidjan
                            </small>

                        </div>

                    </div>


                    <!-- REPONSE RAPIDE -->

                    <div class="response-box">

                        <div class="response-icon">
                            <i class="fas fa-bolt"></i>
                        </div>

                        <div>

                            <strong>
                                Réponse rapide
                            </strong>

                            <p>
                                Nous essayons de répondre
                                à chaque demande le plus rapidement possible.
                            </p>

                        </div>

                    </div>

                </div>


                <!-- ========================= -->
                <!-- FORMULAIRE -->
                <!-- ========================= -->

                <div class="contact-form-card">

                    <div class="form-header">

                        <div class="form-icon">
                            <i class="fas fa-paper-plane"></i>
                        </div>

                        <div>

                            <span>
                                NOUVEAU MESSAGE
                            </span>

                            <h3>
                                Envoyez-nous un message
                            </h3>

                        </div>

                    </div>


                    <form
                        class="contact-form"
                        id="contact-form"
                    >

                        <!-- NOM -->

                        <div class="form-group">

                            <label for="contact-name">
                                Votre nom
                            </label>

                            <div class="input-wrapper">

                                <i class="fas fa-user"></i>

                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Entrez votre nom"
                                    autocomplete="name"
                                    required
                                >

                            </div>

                        </div>


                        <!-- EMAIL -->

                        <div class="form-group">

                            <label for="contact-email">
                                Votre adresse email
                            </label>

                            <div class="input-wrapper">

                                <i class="fas fa-envelope"></i>

                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="exemple@email.com"
                                    autocomplete="email"
                                    required
                                >

                            </div>

                        </div>


                        <!-- SUJET -->

                        <div class="form-group">

                            <label for="contact-subject">
                                Sujet
                            </label>

                            <div class="input-wrapper">

                                <i class="fas fa-tag"></i>

                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Objet de votre demande"
                                    required
                                >

                            </div>

                        </div>


                        <!-- MESSAGE -->

                        <div class="form-group">

                            <label for="contact-message">
                                Votre message
                            </label>

                            <div class="textarea-wrapper">

                                <i class="fas fa-message"></i>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="6"
                                    placeholder="Décrivez votre projet ou votre demande..."
                                    required
                                ></textarea>

                            </div>

                        </div>


                        <!-- RECAPTCHA -->

                        <div class="captcha-container">

                            <div
                                id="contact-recaptcha"
                                class="g-recaptcha"
                                data-sitekey="6LcejXotAAAAAIxOSZ8kCoCWn86LZTDOPhrThHz6"
                            ></div>

                        </div>


                        <!-- STATUS -->

                        <div
                            id="contact-status"
                            class="contact-status"
                            aria-live="polite"
                        ></div>


                        <!-- BOUTON -->

                        <button
                            type="submit"
                            class="contact-submit"
                        >

                            <span>
                                Envoyer le message
                            </span>

                            <i class="fas fa-paper-plane"></i>

                        </button>


                        <div class="form-security">

                            <i class="fas fa-shield-halved"></i>

                            <span>
                                Formulaire sécurisé • Vos informations restent confidentielles
                            </span>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </section>

    `;

}