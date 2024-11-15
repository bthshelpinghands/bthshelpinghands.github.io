let slideInterval
let slideDelay = 4500
let currentSlideIndex = 1

let upcomingEventsData = [["/static_assets/placeHolders/tree.jpg", "Slide 1", "Description: Lorem ipsum dolor sit amet"], ["/static_assets/placeHolders/cat2.jpg", "Slide 2", "Description: Lorem ipsum dolor sit amet"]]
let eventContainer = document.getElementById("event-container")
let slideshowContainer = document.getElementById("slideshow-container")
let slideBtnContainer = document.getElementById("slide-buttons")

let bgImages = []
let upcomingEvents = []
let slideBtns = []

createUpcomingEvents()
setSlideAnimation()
startSlideshow()

let pastEventsData = [["Hello", "hello", "/static_assets/placeHolders/tree.jpg"], ["Hello", "hello", "/static_assets/placeHolders/tree.jpg"]]
let pastEventsContainer = document.getElementById("past-event-container")

createPastEvents()

function createElement(type, className, parent) {
    let element = document.createElement(type)
    if (className) element.className = className
    if (parent) parent.appendChild(element)
    return element
}

function createTextElement(type, text, className, parent) {
    let element = createElement(type, className, parent)
    element.innerHTML = text
    return element
}

function createUpcomingEvents() {
    upcomingEventsData.forEach(([imageSrc, title, description], index) => {
        let bgImage = createElement("img", "bg-image", eventContainer)
        bgImage.src = imageSrc
        bgImages.push(bgImage)

        let event = createElement("div", "event", slideshowContainer)
        upcomingEvents.push(event)

        let eventImg = createElement("img", "image-left", event)
        eventImg.src = imageSrc

        let eventInfo = createElement("div", "event-info", event)
        let textContainer = createElement("div", "event-text-container info-left", eventInfo)
        let eventText = createElement("div", "event-text", textContainer)

        createTextElement("h1", title, null, eventText)
        createTextElement("p", description, null, eventText)
        createTextElement("button", "Sign Up", "sign-up sign-up-left", eventInfo)

        let slideBtn = createElement("a", null, slideBtnContainer)
        slideBtns.push(slideBtn)
    })
}

function createPastEvents() {
    pastEventsData.forEach(([title, description, imageSrc]) => {
        let pastEvent = createElement("div", "past-event", pastEventsContainer)

        let topRow = createElement("div", "past-event-row", pastEvent)
        
        let titleContainer = createElement("div", "past-event-title", topRow)
        createTextElement("p", title, null, titleContainer)

        let arrowBtn = createElement("div", "arrow-button", topRow)
        createElement("div", "arrow", arrowBtn)

        let bottomRow = createElement("div", "past-event-row", pastEvent)

        let textContainer = createElement("div", "past-event-text", bottomRow)
        createTextElement("p", description, null, textContainer)

        let imageContainer = createElement("div", "past-event-image-container", bottomRow)
        let image = createElement("img", "past-event-image", imageContainer)
        image.src = imageSrc
    })
}

function setSlideAnimation() {
    slideBtns[1].style.backgroundColor = "#282A3A"
    slideBtns[0].style.backgroundColor = "#EEEEEE"

    slideBtns[0].addEventListener("click", slideOne)
    slideBtns[1].addEventListener("click", slideTwo)


    bgImages[0].style.opacity = 0.2
    bgImages[1].style.opacity = 0
}


function autoSlide() {
    if (currentSlideIndex == 1) {
        slideTwo()
        currentSlideIndex = 2
    } else {
        slideOne()
        currentSlideIndex = 1
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
    if (upcomingEvents[0].style.transform != "translate(0%)") {
        upcomingEvents[0].style.transform = "translate(0%)"
        upcomingEvents[1].style.transform = "translate(100%)"
        bgImages[0].style.opacity = 0.2
        bgImages[1].style.opacity = 0
    }
    slideBtns[0].style.backgroundColor = "#EEEEEE"
    slideBtns[1].style.backgroundColor = "#282A3A"

    if (slideInterval) {
        stopSlideshow()
        startSlideshow()
    }
}

function slideTwo() {
    if (upcomingEvents[1].style.transform != "translate(0%)") {
        upcomingEvents[0].style.transform = "translate(-100%)"
        upcomingEvents[1].style.transform = "translate(0%)"
        bgImages[0].style.opacity = 0
        bgImages[1].style.opacity = 0.2
    }
    slideBtns[0].style.backgroundColor = "#282A3A"
    slideBtns[1].style.backgroundColor = "#EEEEEE"
 
    if (slideInterval) {
        stopSlideshow()
        startSlideshow()
    }
}