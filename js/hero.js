const images = document.querySelectorAll(".hero-img");
let index = 0;

setInterval(() => {
  images[index].classList.remove("active");

  index = (index + 1) % images.length;

  images[index].classList.add("active");
}, 3000);

const scrollBtn = document.querySelector("#scrollDown");

scrollBtn?.addEventListener("click", () => {
  const intro = document.querySelector("#intro");

  intro?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
