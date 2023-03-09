
// array delle src delle img
const imagesCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const sliderDom = document.getElementById("slider");
const prevDom = document.getElementById("prev");
const nextDom = document.getElementById("next");
const thumbsDom = document.getElementById("thumbs");

let sliderContent = "";
let thumbsContent = "";

for (let i = 0; i < imagesCarousel.length; i++) {
    
    let divImage = `<div class="image">
                        <img src="${imagesCarousel[i]}">
                    </div>`;

    let divThumbs = `<div class="thumbs-images brightness">
                        <img class="thumbs-img" src="${imagesCarousel[i]}">
                     </div>`;                
    
    sliderContent += divImage;
    thumbsContent += divThumbs;

}



sliderDom.innerHTML = sliderContent;
thumbsDom.innerHTML = thumbsContent;

// array con tutte le img
const slidesDom = document.getElementsByClassName("image");
const thumbsImageDom = document.getElementsByClassName("thumbs-images");


let activeImage = 0;
slidesDom[activeImage].classList.add("show");
thumbsImageDom[activeImage].classList.remove("brightness");
thumbsImageDom[activeImage].classList.add("activeThumbs");

nextDom.addEventListener("click" , 

    function () {

        slidesDom[activeImage].classList.remove('show');
        thumbsImageDom[activeImage].classList.add("brightness");
        thumbsImageDom[activeImage].classList.remove('activeThumbs');
     
        if (activeImage == slidesDom.length -1) {
            activeImage = 0;
        } else {
            activeImage++;
        }

        slidesDom[activeImage].classList.add('show');
        thumbsImageDom[activeImage].classList.remove("brightness");
        thumbsImageDom[activeImage].classList.add("activeThumbs");

    });


prevDom.addEventListener("click" , 

    function () {

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
         
    });    


    
