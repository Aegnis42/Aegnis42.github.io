const bigMenuBurger = document.getElementById("menuBurger");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  bigMenuBurger.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  bigMenuBurger.classList.remove("active");
}