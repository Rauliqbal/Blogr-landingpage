const navbar = document.querySelector(".nav .nav-menu");
const menuBtn = document.querySelector(".fa-bars");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
};
