const body = document.querySelector("body")
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() { //to hide all slides before displaying the correct/current one
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function changeBackground(num) {// to change the background to a one that suits the selected carousel item
    if(num === 0){
        body.style.background = "rgb(1, 28, 64)"
    }else if (num === 1){
        body.style.background = "rgba(255, 0, 119, 0.6)"
    }else {
        body.style.background = "rgb(52, 148, 93)"
    }
}

function moveToNextSlide() { //a function that checks which carousel item are we on and moves to the next carousel item
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    changeBackground(slidePosition)
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() { //a function that checks which carousel item are we on and moves to the previous carousel item
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    changeBackground(slidePosition)
    slides[slidePosition].classList.add("carousel-item-visible");
}

setInterval(moveToNextSlide, 2500); //To automatically move the carousel items to the next ones after a time interval of 2.5s 