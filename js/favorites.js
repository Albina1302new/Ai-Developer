// MIT RESULT

const favBtn = document.querySelector(".favorite-btn");

if (favBtn) {
  favBtn.addEventListener("click", () => {
    favBtn.classList.toggle("active");
  });
}
// AI RESULT
const aiBtn = document.querySelector(".ai-heart-btn");
const aiCount = document.querySelector(".ai-count");

if (aiBtn && aiCount) {
  let aiCounter = 0;

  aiBtn.addEventListener("click", () => {
    aiCounter++;
    aiCount.textContent = aiCounter;
  });
}
