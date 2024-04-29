console.clear();

const form = document.querySelector('[data-js="form"]');

const badness = form.querySelector('[data-js="badness"]');
const age = form.querySelector('[data-js="age"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);
  console.log(data);

  event.target.reset();
  event.target.elements.focus(firstname);

  console.log(event.target);
});
