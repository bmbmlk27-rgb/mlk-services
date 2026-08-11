import "./Preloader.css";

export default function Preloader() {

    setTimeout(() => {

        const preloader = document.getElementById("mlk-preloader");

        if (!preloader) return;

        setTimeout(() => {

            preloader.classList.add("finished");

            setTimeout(() => {

                document.body.classList.add("mlk-site-ready");

                setTimeout(() => {
                    preloader.remove();
                }, 800);

            }, 500);

        }, 7000);

    }, 0);


    return `

        <div class="mlk-preloader" id="mlk-preloader">

            <div class="mlk-intro-scene">

                <!-- SPIRALE -->

                <div class="mlk-spiral">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <!-- EXPLOSION -->

                <div class="mlk-explosion">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <!-- TEXTE BIENVENUE -->

                <div class="mlk-welcome">

                    <span>
                        BIENVENUE CHEZ
                    </span>

                    <strong>
                        MLK SERVICE ✨
                    </strong>

                </div>

            </div>


            <!-- LOADING -->

            <div class="mlk-loading">

                <div class="mlk-loading-text">
                    Chargement
                </div>

                <div class="mlk-loading-line">
                    <span></span>
                </div>

                <div class="mlk-loading-percent">
                    0%
                </div>

            </div>

        </div>

    `;

}