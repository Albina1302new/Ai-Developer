const images = [
  "./images/vogue-1.jpg",
  "./images/vogue-3.webp",
  "./images/vogue-2.jpg",
];

let current = 1;

function showMain() {
  let prev = (current - 1 + images.length) % images.length;
  let next = (current + 1) % images.length;

  document.getElementById("prevImg").src = images[prev];
  document.getElementById("mainImg").src = images[current];
  document.getElementById("nextImg").src = images[next];

  document.querySelectorAll(".indicator").forEach((el, i) => {
    el.className = i === current ? "indicator active" : "indicator";
  });
}

document.getElementById("prevSlide").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showMain();
});

document.getElementById("nextSlide").addEventListener("click", () => {
  current = (current + 1) % images.length;
  showMain();
});

showMain();

// AI слайдер
const aiSlides = [
  "./images/vogue-1.jpg",
  "./images/vogue-3.webp",
  "./images/vogue-2.jpg",
];

let aiCurrent = 0;
const aiImg = document.querySelector(".ai-image");
const aiPrev = document.querySelector(".ai-slider .prev");
const aiNext = document.querySelector(".ai-slider .next");
const aiDots = document.querySelectorAll(".ai-dot");

function updateAiSlider() {
  if (!aiImg) return;
  aiImg.src = aiSlides[aiCurrent];
  aiDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === aiCurrent);
  });
}

if (aiPrev) {
  aiPrev.addEventListener("click", () => {
    aiCurrent = (aiCurrent - 1 + aiSlides.length) % aiSlides.length;
    updateAiSlider();
  });
}

if (aiNext) {
  aiNext.addEventListener("click", () => {
    aiCurrent = (aiCurrent + 1) % aiSlides.length;
    updateAiSlider();
  });
}

aiDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    aiCurrent = i;
    updateAiSlider();
  });
});

updateAiSlider();
