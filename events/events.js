let slideInterval
const slideDelay = 4500
let currentSlide = 1

let slideBtnOne = document.getElementById("slide-btn-one")
let slideBtnTwo = document.getElementById("slide-btn-two")
slideBtnOne.style.backgroundColor = "#EEEEEE"
slideBtnTwo.style.backgroundColor = "#282A3A"
slideBtnOne.addEventListener("click", slideOne)
slideBtnTwo.addEventListener("click", slideTwo)

let slideshowContainer = document.getElementById("slideshow-container")
let eventOne = document.getElementById("event-one")
let eventTwo = document.getElementById("event-two")

let bgImageOne = document.getElementById("bg-image-one")
let bgImageTwo = document.getElementById("bg-image-two")

bgImageOne.style.opacity = 0.2
bgImageTwo.style.opacity = 0

startSlideshow()

function autoSlide() {
    if (currentSlide == 1) {
        slideTwo()
        currentSlide = 2
    } else {
        slideOne()
        currentSlide = 1
    }
}

function startSlideshow() {
    if (!slideInterval) {
        slideInterval = setInterval(autoSlide, slideDelay)
    }
}

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval)
        slideInterval = null
    }
}

function slideOne() {
    if (eventOne.style.transform != "translate(0%)") {
        eventOne.style.transform = "translate(0%)"
        eventTwo.style.transform = "translate(100%)"
        bgImageOne.style.opacity = 0.2
        bgImageTwo.style.opacity = 0
    }
    slideBtnOne.style.backgroundColor = "#EEEEEE"
    slideBtnTwo.style.backgroundColor = "#282A3A"

    if (slideInterval) {
        stopSlideshow()
        startSlideshow()
    }
}

function slideTwo() {
    if (eventTwo.style.transform != "translate(0%)") {
        eventOne.style.transform = "translate(-100%)"
        eventTwo.style.transform = "translate(0%)"
        bgImageOne.style.opacity = 0
        bgImageTwo.style.opacity = 0.2
    }
    slideBtnOne.style.backgroundColor = "#282A3A"
    slideBtnTwo.style.backgroundColor = "#EEEEEE"

    if (slideInterval) {
        stopSlideshow()
        startSlideshow()
    }
}

window.addEventListener("resize", function() {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        document.querySelectorAll("img").forEach(img => {
            img.style.width = "80%";
            img.style.transition = "all 0.5s ease";
        });
        slideDelay = 3000;
    } else {
        document.querySelectorAll("img").forEach(img => {
            img.style.width = "34%";
            img.style.transition = "all 0.8s ease";
        });
        slideDelay = 4500;
    }

    if (screenWidth <= 480) {
        slideshowContainer.style.width = "90%";
    } else {
        slideshowContainer.style.width = "100%";
    }
});
