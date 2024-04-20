console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkmodebutton = document.querySelector('[data-js="dark-mode-button"]');

const lightmodebutton = document.querySelector('[data-js="light-mode-button"]');

const togglebutton = document.querySelector('[data-js="toggle-button"]');

console.log(darkmodebutton, lightmodebutton, togglebutton);

darkmodebutton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightmodebutton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

togglebutton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
