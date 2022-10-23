const nav = document.querySelector("#nav");
const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const navMenu = document.querySelector(".nav-menu");



window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-active", scrollY > 0);
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {

        navMenu.classList.remove("nav-menu-active");
        hamburgerMenuBtn.classList.remove("hamburger-menu-btn-active");
    }
});

hamburgerMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-active");
    hamburgerMenuBtn.classList.toggle("hamburger-menu-btn-active");
});