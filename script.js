const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
let currentLang = "bn";

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☾" : "☼";
});

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "bn" ? "bn" : "en";
  document.querySelectorAll("[data-bn][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(lang === "bn" ? "data-bn" : "data-en");
  });
  langBtn.textContent = lang === "bn" ? "EN" : "বাংলা";
  langBtn.setAttribute("aria-label", lang === "bn" ? "Switch to English" : "Switch to Bangla");
  langBtn.title = lang === "bn" ? "English" : "বাংলা";
  document.querySelector(".search-box input").placeholder = lang === "bn" ? "Search..." : "Search...";
}

langBtn.addEventListener("click", () => {
  setLanguage(currentLang === "bn" ? "en" : "bn");
});

setLanguage("bn");

document.querySelector(".search-box button").addEventListener("click", () => {
  const q = document.querySelector(".search-box input").value.trim();
  if (q) alert(currentLang === "bn" ? "Search is ready. পরে চাইলে এখানে real search function যোগ করা যাবে: " + q : "Search is ready. A real search function can be added here later: " + q);
});

document.querySelector(".search-box input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") document.querySelector(".search-box button").click();
});
