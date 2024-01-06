/*
 * Burgermenu
 */
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const active = document.getElementById("active-menu");

  menuIcon.addEventListener("click", function () {
    active.classList.toggle("menu-opened");
  });
});
