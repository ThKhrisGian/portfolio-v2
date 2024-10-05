const navbar = document.querySelector(".navbar");
const main = document.querySelector(".main");
const menu = document.querySelector(".navbar_item--menu");
const navbarList = document.querySelector(".navbar__list");
const navBarItems = document.querySelectorAll(".navbar__item");
const separator = document.querySelector(".navbar__item--separator");
const body = document.querySelector("body");
const toggleThemeButton = document.querySelector(".navbar__sun");

// Cargar el tema desde el localStorage si existe
const savedTheme = localStorage.getItem("theme");

// Si el tema guardado es "dark", se activa el modo oscuro al cargar la página
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Función para alternar el modo oscuro
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  // Almacenar la preferencia de tema en localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Añadir el event listener para alternar el tema al hacer clic en el botón
toggleThemeButton.addEventListener("click", toggleDarkMode);


menu.addEventListener("click", () => {
  navbar.classList.toggle("navbar--active");
  main.classList.toggle("main--active");
  menu.classList.toggle("navbar_item--menu--active");
  navbarList.classList.toggle("navbar__list--active");
  navBarItems.forEach((item) => {
    item.classList.toggle("navbar__item--active");
  });
  separator.classList.toggle("navbar__item--separator--active");
  body.classList.toggle("no-scroll");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navbar.classList.remove("navbar--active");
    main.classList.remove("main--active");
    menu.classList.remove("navbar_item--menu--active");
    navbarList.classList.remove("navbar__list--active");
    navBarItems.forEach((item) => {
      item.classList.remove("navbar__item--active");
    });
    separator.classList.remove("navbar__item--separator--active");
    body.classList.remove("no-scroll");
  }
});

