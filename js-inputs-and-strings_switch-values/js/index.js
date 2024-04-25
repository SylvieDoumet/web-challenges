/*

EXERCISE 3 SWITCH BUTTON

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/
// const nameInput 
const FirstInput = document.querySelector('[data-js="first-input"]');

// const ageInput 
const SecondInput = document.querySelector('[data-js="second-input"]');


// const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
// const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');


// uppercaseButton.addEventListener("click", () => {
//   firstInput.value = firstInput.value.toUpperCase();
// });

// lowercaseButton.addEventListener("click", () => {
//   firstInput.value = firstInput.value.toLowerCase();
// });


const switchButton = document.querySelector('[data-js="button-switch"]');

switchButton.addEventListener("click", () => {
  const firstInputValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstInputValue; }
