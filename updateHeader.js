const header = document.getElementById("header");
const logoText = document.getElementById("logo-text");
const logoImg = document.getElementById("logo-img");
const navigation = document.getElementById("navigation");
const navBtns = navigation.getElementsByTagName("li");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        header.classList.add("changed-header");
        logoText.style.fontSize = "2rem";
        logoImg.style.height = "3.5rem";
        for (const btn of navBtns) {
            btn.classList.add("changed-nav-btn");
        }
    } else {
        header.classList.remove("changed-header");
        logoText.style.fontSize = "3rem";
        logoImg.style.height = "4.5rem";
        for (const btn of navBtns) {
            btn.classList.remove("changed-nav-btn");
        }
    }
})