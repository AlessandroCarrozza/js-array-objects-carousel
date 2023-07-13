
// array di oggetti 
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const thumbsImageDom = document.getElementsByClassName("thumbs-images");
const slidesDom = document.getElementsByClassName("image");
let activeImage = 0;
let isStop = false;
let clock;


generateCarousel();


// function del ciclo per la creazione degli elementi per il DOM
function generateCarousel() {

    let sliderContent = "";
    let thumbsContent = "";
    const sliderDom = document.getElementById("slider");
    const prevDom = document.getElementById("prev");
    const nextDom = document.getElementById("next");
    const stopDom = document.getElementById("stop");
    const thumbsDom = document.getElementById("thumbs");

    for (let i = 0; i < images.length; i++) {

        let carouselImage = images[i];

        let divImage = `<div class="image">
                            <img src="${carouselImage.image}">
                            <div class= "info">
                               <h1>${carouselImage.title}</h1>
                               <h3>${carouselImage.text}</h3></div>
                            </div>`;

        let divThumbs = `<div class="thumbs-images brightness">
                            <img class="thumbs-img" src="${carouselImage.image}">
                         </div>`;


        sliderContent += divImage;
        thumbsContent += divThumbs;

    }

    sliderDom.innerHTML = sliderContent;
    thumbsDom.innerHTML = thumbsContent;

    currentImage();

    function currentImage() {
        slidesDom[activeImage].classList.add("show");
        thumbsImageDom[activeImage].classList.remove("brightness");
        thumbsImageDom[activeImage].classList.add("activeThumbs");
    }

    autoplay();

    btnDirection(nextDom, prevDom, stopDom);


}

// function per le direzioni dei btn
function btnDirection(nextDom, prevDom, stopDom) {

    nextDom.addEventListener("click",
        function () {

            goDown();

        });


    prevDom.addEventListener("click",
        function () {

            goUp();

        });

    // button per stoppare l'autoscorrimento delle slide
    stopDom.addEventListener("click", function () {
        isStop = !isStop;
        const pauseItemDom = document.getElementById("pause-item");
        const playItemDom = document.getElementById("play-item");
        if (isStop) {
            clearInterval(clock);
            pauseItemDom.classList.add("d-none");
            playItemDom.classList.remove("d-none");
        } else {
            autoplay();
            pauseItemDom.classList.remove("d-none");
            playItemDom.classList.add("d-none");
        }
    });


}


function goUp() {
    slidesDom[activeImage].classList.remove('show');
    thumbsImageDom[activeImage].classList.add("brightness");
    thumbsImageDom[activeImage].classList.remove('activeThumbs');

    if (activeImage == 0) {
        activeImage = (slidesDom.length - 1);
    } else {
        activeImage--;
    }

    slidesDom[activeImage].classList.add('show');
    thumbsImageDom[activeImage].classList.remove("brightness");
    thumbsImageDom[activeImage].classList.add("activeThumbs");
}


function goDown() {
    slidesDom[activeImage].classList.remove('show');
    thumbsImageDom[activeImage].classList.add("brightness");
    thumbsImageDom[activeImage].classList.remove('activeThumbs');

    if (activeImage == slidesDom.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }

    slidesDom[activeImage].classList.add('show');
    thumbsImageDom[activeImage].classList.remove("brightness");
    thumbsImageDom[activeImage].classList.add("activeThumbs");
}



function autoplay() {
    clock = setInterval(goDown, 3000);
}