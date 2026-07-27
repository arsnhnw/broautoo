/* ===========================
   BROAUTO JAVASCRIPT
=========================== */



/* ===========================
   DEMO POPUP
=========================== */


const buttons = document.querySelectorAll(
    "button"
);



buttons.forEach(button => {


    button.addEventListener(
        "click",
        () => {


            createPopup();


        }
    );


});



function createPopup(){


    const popup = document.createElement(
        "div"
    );


    popup.className = "popup";


    popup.innerHTML = `

        <div class="popup-box">

            <h3>
                ДЕМО-ВЕРСИЯ
            </h3>

            <p>
                Демо-версия — свяжитесь
                с разработчиком для запуска.
            </p>

            <button class="close-popup">
                Закрыть
            </button>

        </div>

    `;


    document.body.appendChild(
        popup
    );



    document
    .querySelector(".close-popup")
    .addEventListener(
        "click",
        ()=>{

            popup.remove();

        }
    );


}







/* ===========================
   SCROLL ANIMATION
=========================== */



const animatedElements =
document.querySelectorAll(
    "section, .service-card, .review-card, .stat, .process-card"
);



const observer =
new IntersectionObserver(

(entries)=>{


    entries.forEach(
        entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add(
                    "show"
                );


            }


        }
    );


},

{

    threshold:0.15

}

);




animatedElements.forEach(
element=>{


    element.classList.add(
        "hidden"
    );


    observer.observe(
        element
    );


});







/* ===========================
   HEADER EFFECT
=========================== */


const header =
document.querySelector(
    ".header"
);



window.addEventListener(
    "scroll",
    ()=>{


        if(window.scrollY > 50){


            header.style.background =
            "rgba(8,8,8,0.95)";


        }

        else{


            header.style.background =
            "rgba(15,15,15,0.75)";


        }


    }

);








/* ===========================
   COUNTERS
=========================== */



const counters =
document.querySelectorAll(
    ".stat h3"
);



let started = false;



function startCounters(){


    if(started)
    return;



    counters.forEach(
    counter=>{


        const target =
        counter.innerText;



        let number =
        parseInt(
            target
        );



        let current = 0;



        let speed =
        number / 80;



        const update =
        ()=>{


            current += speed;



            if(current < number){


                counter.innerText =
                Math.floor(current) + "+";


                requestAnimationFrame(
                    update
                );


            }

            else{


                counter.innerText =
                target;


            }


        };


        update();


    });


    started = true;


}





window.addEventListener(
    "scroll",
    ()=>{


        const stats =
        document.querySelector(
            ".stats"
        );



        if(!stats)
        return;



        const position =
        stats.getBoundingClientRect()
        .top;



        if(
            position <
            window.innerHeight - 100
        ){

            startCounters();

        }


    }

);








/* ===========================
   SMOOTH SCROLL
=========================== */


const links =
document.querySelectorAll(
    ".nav-links a"
);



links.forEach(
link=>{


    link.addEventListener(
        "click",
        event=>{


            event.preventDefault();



            const section =
            document.querySelector(
                link.getAttribute("href")
            );



            if(section){


                section.scrollIntoView({

                    behavior:"smooth"

                });


            }


        }
    );


});








console.log(
    "BroAuto website activated"
);