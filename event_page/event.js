let slideInterval
const slideDelay = 4500
let currentSlide = 1

let slideBtnOne = document.getElementById("slide-btn-one")
let slideBtnTwo = document.getElementById("slide-btn-two")
slideBtnOne.addEventListener("click", slideOne)
slideBtnTwo.addEventListener("click", slideTwo)

let slideshowContainer = document.getElementById("slideshow-container")
let eventOne = document.getElementById("event-one")
let eventTwo = document.getElementById("event-two")

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
    }
    slideBtnOne.style.backgroundColor = "#282A3A"
    slideBtnTwo.style.backgroundColor = "#EEEEEE"
 
    if (slideInterval) {
        stopSlideshow()
        startSlideshow()
    }
}