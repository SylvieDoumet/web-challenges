import React from "react";
import "./styles.css";

//  1. A Simple Button Component

// function Button({ color, disabled, text }) {
//   return (
//     <button style={{ color: color }} disabled={disabled}>
//       {text}
//     </button>
//   );
// }

// export default function App() {
//   return (
// <>
// <Button color="red" disabled={false} text="Click in case of Danger!" />
// <Button color="green" disabled={false} text="Click in case of Safety!" />
// </>
//   );
// }

//  2. Add a CLick Event

// Add OnClick to function declaration

// function Button({ color, disabled, text, onClick }) {
//   return (
//     <button style={{ color: color }} disabled={disabled} onClick={onClick}>
//       {text}
//     </button>
//   );
// }

// // Update App component to use the Button

// export default function App() {
//   return (
//     <>
//       <Button
//         color="red"
//         disabled={false}
//         text="Click in case of Danger!"
//         onClick={() => console.log("Button Clicked!")}
//       />
//       <Button
//         color="green"
//         disabled={false}
//         text="Click in case of Safety!"
//         onClick={() => console.log("Button Clicked!")}
//       />
//     </>
//   );
// }

// 3. Declare an Event Handler Function

// // Define the Button component

// function Button({ color, disabled, text, onClick }) {

// // Define the handleClick function

// const handleClick = () => {
// if (onClick) {
//   onClick();
// }
// };

// // Adapt the return statement from "(onClick)" to "(handleClick)"

//   return (
//     <button style={{ color: color }} disabled={disabled} onClick={handleClick}>
//       {text}
//     </button>
//   );
// }

// // No changes needed

// export default function App() {
//   return (
//     <>
//       <Button
//         color="red"
//         disabled={false}
//         text="Click in case of Danger!"
//         onClick={() => console.log("Button Clicked!")}
//       />
//       <Button
//         color="green"
//         disabled={false}
//         text="Click in case of Safety!"
//         onClick={() => console.log("Button Clicked!")}
//       />
//     </>
//   );
// }

// 4. Pass a function as prop

// Move the handleClick function from the button component to the App component

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onCLick}>
      {text}
    </button>
  );
}

// in the app component - pass the handleClick function as prop onClick to the Button component.
// Receive the onClick prop as parameter in the Button component.
// Pass the received to the given onCLick prop.

export default function App() {
  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <>
      <Button
        color="red"
        disabled={false}
        text="Click in case of Danger!"
        onClick={() => handleClick("Button Clicked!")}
      />
      <Button
        color="green"
        disabled={false}
        text="Click in case of Safety!"
        onClick={() => handleClick("Button Clicked!")}
      />
    </>
  );
}
