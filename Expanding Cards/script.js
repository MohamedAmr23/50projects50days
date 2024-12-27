<<<<<<< HEAD
const panels = document.querySelectorAll(".panel");
panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
=======
const panels = document.querySelectorAll(".panel");
panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
>>>>>>> 5e563447e2f731631ad400979d48579f7ace4f06
