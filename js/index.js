import "./slider.js";
import "./favorites.js";
import "./users.js";
import "./hero.js";
import "./menu.js";

// ===== SHOW MORE CODE (mobile only, fixed) =====
function initCodeToggle() {
  const wrappers = document.querySelectorAll(".code-wrapper");
  const mq = window.matchMedia("(max-width: 767px)");

  if (!mq.matches) return;

  wrappers.forEach((wrapper) => {
    const pre = wrapper.querySelector("pre");
    if (!pre) return;

    if (wrapper.querySelector(".toggle-btn")) return;

    const btn = document.createElement("button");
    btn.className = "toggle-btn";
    btn.textContent = "se mere";

    wrapper.appendChild(btn);

    let expanded = false;

    btn.addEventListener("click", () => {
      expanded = !expanded;
      pre.classList.toggle("expanded", expanded);
      btn.textContent = expanded ? "luk" : "se mere";
    });
  });
}

// чекаємо DOM
window.addEventListener("DOMContentLoaded", () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(initCodeToggle);
  } else {
    setTimeout(initCodeToggle, 200);
  }
});
