const images = document.querySelectorAll(".hero-img");

if (images.length > 0) {
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000);
}
const scrollBtn = document.querySelector("#scrollDown");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    const intro = document.querySelector("#intro");

    if (intro) {
      intro.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}
