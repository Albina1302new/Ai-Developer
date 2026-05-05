import "./slider.js";
import "./favorites.js";
import "./users.js";
import "./hero.js";
import "./menu.js";

// ===== SHOW MORE CODE (mobile only, fixed) =====
document.querySelectorAll(".code-wrapper").forEach((wrapper) => {
  const pre = wrapper.querySelector("pre");
  if (!pre) return;

  const mq = window.matchMedia("(max-width: 767px)");

  function init() {
    if (!mq.matches) return;

    if (wrapper.querySelector(".toggle-btn")) return;

    const fullHeight = pre.scrollHeight;

    if (fullHeight <= 180) return;

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
  }

  init();
});
