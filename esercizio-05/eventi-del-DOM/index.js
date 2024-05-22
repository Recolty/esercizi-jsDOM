const h1 = document.querySelector("h1");
const button = document.querySelector(".btn");
const body = document.querySelector("body");

button.addEventListener("click", (event) => {
  body.classList.toggle("theme");
});
