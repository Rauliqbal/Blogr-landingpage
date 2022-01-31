const navbar = document.querySelector(".nav .nav-menu");
const menuBtn = document.querySelector(".fa-bars");
const btnSubMenu = document.querySelector(".btn-submenu");
const subMenu = document.querySelector(".sub-menu");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

btnSubMenu.onclick = () => {
    subMenu.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
};
