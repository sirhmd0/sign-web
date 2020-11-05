const body  = document.querySelector("body");
const nav = document.querySelector(".nav");
const btnSwitch = document.querySelector(".btn-switch");

btnSwitch.addEventListener("click", (e) => {
  body.classList.toggle("mode-toggle");
  nav.classList.toggle("mode-toggle");
  if (body.className == "mode-toggle") {
    e.target.innerHTML = "dark  mode";
  } else {
    e.target.innerHTML = "light  mode";
  }
});
