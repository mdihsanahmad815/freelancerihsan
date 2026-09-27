const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☾" : "☼";
});

// Search button demo
document.querySelector(".search-box button").addEventListener("click", () => {
  const q = document.querySelector(".search-box input").value.trim();
  if (q) alert("Search is ready. পরে চাইলে এখানে real search function যোগ করা যাবে: " + q);
});
