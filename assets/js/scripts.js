const toggleSwitch = document.getElementById("theme-toggle");
const h2 = document.getElementById("theme");
const icon = document.getElementById("icon");

toggleSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  h2.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    h2.innerHTML = "Dark Theme";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    h2.innerHTML = "Light Theme";
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});
