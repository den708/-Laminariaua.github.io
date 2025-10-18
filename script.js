// --- Підставлення поточного року у футер ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Аккордеони ---
document.querySelectorAll(".acc-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.display === "block";
    panel.style.display = isOpen ? "none" : "block";
  });
});

// --- Інтерактивні списки ---
document.querySelectorAll(".interactive-list").forEach(list => {
  const infoBox = list.nextElementSibling;
  list.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      infoBox.textContent = item.getAttribute("data-info");
      infoBox.style.opacity = 0;
      setTimeout(() => { infoBox.style.opacity = 1; }, 50);
    });
  });
});

// --- Факти ---
const factBtn = document.getElementById("factBtn");
factBtn.addEventListener("click", () => {
  const heroSection = document.querySelector("#hero");
  const factDiv = document.createElement("div");
  factDiv.classList.add("info-display");
  factDiv.textContent = "🎣 Цікавий факт: ламінарія може рости до 50 см на місяць!";
  heroSection.appendChild(factDiv);
  setTimeout(() => factDiv.remove(), 6000);
});

// --- Плавний скролл для меню ---
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// --- Галерея: простий ефект при кліку ---
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    item.style.transform = "scale(1.1)";
    setTimeout(() => { item.style.transform = "scale(1)"; }, 300);
  });
});