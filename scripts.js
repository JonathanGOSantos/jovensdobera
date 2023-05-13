const menu = document.querySelector("#menu");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  menu.removeAttribute("style");
  openMenu.style.display = "inline-block"
});
