export function initFAQ(){

    const faqItems = document.querySelectorAll(".faq-item");


    if(!faqItems.length) return;



    faqItems.forEach(item=>{


        const button =
        item.querySelector(".faq-question");



        if(!button) return;



        button.addEventListener(
            "click",
            ()=>{


                const isActive =
                item.classList.contains("active");



                // fermer les autres

                faqItems.forEach(other=>{

                    other.classList.remove("active");

                });



                // ouvrir celui sélectionné

                if(!isActive){

                    item.classList.add("active");

                }


            }
        );


    });


}