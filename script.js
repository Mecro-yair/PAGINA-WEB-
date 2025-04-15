document.addEventListener("DOMContentLoaded", () => {

  // Menú responsive con botón
  const menuButton = document.getElementById("menu-button");
  const navLinks = document.getElementById("nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Scroll suave + cerrar menú si está abierto
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Ocultar menú en móvil si está abierto
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  });

  // Cambiar fondo del navbar al hacer scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 100);
    });
  }
});
