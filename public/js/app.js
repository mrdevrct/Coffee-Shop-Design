const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
// submenu
const submenuOpen = document.querySelector(".submenu-open-btn")
const submenu = document.querySelector(".submenu")
// nav
const navOpenBtn = document.querySelector(".nav-icon")
const navCloseBtn = document.querySelector(".nav-close")
const nav = document.querySelector(".nav")
// cart 
const cart = document.querySelector(".cart")
const cartCloseBtn = document.querySelector(".cart-close")
const cartOpenBtn = document.querySelector(".cart-icon")


const overlay = document.querySelector(".overlay")

toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

submenuOpen.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300")
  submenu.classList.toggle("submenu--open");
})

navOpenBtn.addEventListener("click", (e) => {
  nav.classList.remove("-right-64")
  nav.classList.add("right-0")
  overlay.classList.add("overlay--visible")
})

navCloseBtn.addEventListener("click", (e) => {
  nav.classList.add("-right-64")
  nav.classList.remove("right-0")
  overlay.classList.remove("overlay--visible")
})

overlay.addEventListener("click", (e) => {
  nav.classList.add("-right-64")
  nav.classList.remove("right-0")
  cart.classList.add("-left-64")
  cart.classList.remove("left-0")
  overlay.classList.remove("overlay--visible")
})

cartOpenBtn.addEventListener("click", (e) => {
  cart.classList.remove("-left-64")
  cart.classList.add("left-0")
  overlay.classList.add("overlay--visible")
})

cartCloseBtn.addEventListener("click", (e) => {
  cart.classList.remove("left-0")
  cart.classList.add("-left-64")
  overlay.classList.remove("overlay--visible")
})