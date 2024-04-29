console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideSuccess() {
  successMessage.setAttribute("hidden", "");
}

function showSuccess() {       
  successMessage.removeAttribute("hidden");
}

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

hideSuccess();


function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
    else showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    return showTosError();
  }

  alert("Form submitted");
  showSuccess();
});
