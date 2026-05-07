// MIT RESULT

const favBtn = document.querySelector(".favorite-btn");

favBtn.addEventListener("click", function () {
  favBtn.classList.toggle("active");
});

// AI RESULT
const aiBtn = document.querySelector(".ai-heart-btn");
const aiCount = document.querySelector(".ai-count");

let aiCounter = 0;

aiBtn.onclick = () => {
  aiCounter++;
  aiCount.textContent = aiCounter;
};
