document.addEventListener("DOMContentLoaded", () => {
  // Твій слайдер
  const images = [
    "./images/vogue-1.jpg",
    "./images/vogue-3.webp",
    "./images/vogue-2.jpg",
  ];

  let current = 1;

  const prevImg = document.getElementById("prevImg");
  const mainImg = document.getElementById("mainImg");
  const nextImg = document.getElementById("nextImg");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  const indicators = document.querySelectorAll(".indicator");

  function showMain() {
    const prev = (current - 1 + images.length) % images.length;
    const next = (current + 1) % images.length;

    if (prevImg) prevImg.src = images[prev];
    if (mainImg) mainImg.src = images[current];
    if (nextImg) nextImg.src = images[next];

    indicators.forEach((el, i) => {
      el.className = i === current ? "indicator active" : "indicator";
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showMain();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % images.length;
      showMain();
    });
  }

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
});
