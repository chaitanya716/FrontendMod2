
const theme = document.getElementById("theme");

theme.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    theme.textContent = document.body.classList.contains("dark") ? "☾" : "☀";
});
