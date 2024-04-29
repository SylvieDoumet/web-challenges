console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const formData = new FormData(event.target);
  const a = Number(formData.get("a"));
  const b = Number(formData.get("b"));
  const operation = formData.get("function");

  if (function === "add") {
    result = add(a, b);
  }

  if (function === "subtract") {
    result = subtract(a, b);
  }

  if (function === "multiply") {
    result = multiply(a, b);
  }

  if (function === "divide") {
    result = divide(a, b);
  }

  resultOutput.number = result;
});
