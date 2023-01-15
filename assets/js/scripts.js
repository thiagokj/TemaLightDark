const toggleSwitch = document.getElementById("theme-toggle");
const h2 = document.getElementById("theme");
const icon = document.getElementById("icon");

// Adiciona um evento de clique ao toggle switch
toggleSwitch.addEventListener("change", function () {
  // Alterna a classe "dark-mode" no body
  document.body.classList.toggle("dark-mode");

  // Verifica se o tema é dark ou light
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
