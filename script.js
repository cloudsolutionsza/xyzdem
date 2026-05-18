const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar__links, .button");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
  });
});