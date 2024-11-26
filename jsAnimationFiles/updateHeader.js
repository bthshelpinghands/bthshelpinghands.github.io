const header = document.getElementById("header");
const logoText = document.getElementById("logo-text");
const logoImg = document.getElementById("logo-img");
const navigation = document.getElementById("navigation");
const navBtns = navigation.getElementsByTagName("li");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        
        if (window.matchMedia("(min-width: 800px)").matches) {
            logoText.style.fontSize = "2rem";
            logoImg.style.height = "3.5rem";
        } else {
            logoText.style.fontSize = "1.25rem";
            logoImg.style.height = "2.5rem";
        }

        header.classList.add("changed-header");
        for (const btn of navBtns) {
            btn.classList.add("changed-nav-btn");
        }
    } else {


        if (window.matchMedia("(min-width: 800px)").matches) {
            logoText.style.fontSize = "3rem";
            logoImg.style.height = "4.5rem";
        } else {
            logoText.style.fontSize = "1.5rem";
            logoImg.style.height = "3rem";
        }

        header.classList.remove("changed-header");
        for (const btn of navBtns) {
            btn.classList.remove("changed-nav-btn");
        }
    }
})