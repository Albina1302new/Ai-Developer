const burger = document.getElementById("burgerBtn");
const closeBtn = document.getElementById("closeMenu");
const nav = document.querySelector(".nav");
const body = document.body;

burger.addEventListener("click", () => {
  nav.classList.add("open");
  body.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  body.classList.remove("menu-open");
});

/* закриття по кліку на пункт */
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    body.classList.remove("menu-open");
  });
});
