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

  function initToggle() {
    if (!mq.matches) return;

    requestAnimationFrame(() => {
      const fullHeight = pre.scrollHeight;

      if (fullHeight <= 180) return;

      if (wrapper.querySelector(".toggle-btn")) return;

      pre.style.maxHeight = "180px";
      pre.style.overflow = "hidden";
      wrapper.classList.add("collapsed");

      const btn = document.createElement("button");
      btn.className = "toggle-btn";
      btn.textContent = "se mere";

      wrapper.appendChild(btn);

      let expanded = false;

      btn.addEventListener("click", () => {
        expanded = !expanded;

        if (expanded) {
          pre.style.maxHeight = fullHeight + "px";
          btn.textContent = "luk";
          wrapper.classList.remove("collapsed");
        } else {
          pre.style.maxHeight = "180px";
          btn.textContent = "se mere";
          wrapper.classList.add("collapsed");
        }
      });
    });
  }

  initToggle();

  mq.addEventListener("change", () => {
    location.reload();
  });
});
