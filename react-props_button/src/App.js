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


4. Pass a function as prop 


function Button({ color, disabled, text, onClick }) {

const handleClick = () => {
if (onClick) {
  onClick();
}
};

// Define a handleClick function 

const handleClick = (message) => {
  console.log(message); 
}

// Change onClick={handleClick} to onClick={() => handleCLick('Button Clicked!')}

  return (
    <Button style={{ color: color }} disabled={disabled} handleCLick('Button Clicked!')}/>
      {text}
    </button>
  );
}

// No changes needed 

export default function App() {
  return (
    <>
      <Button
        color="red"
        disabled={false}
        text="Click in case of Danger!"
        onClick={() => console.log("Button Clicked!")}
      />
      <Button
        color="green"
        disabled={false}
        text="Click in case of Safety!"
        onClick={() => console.log("Button Clicked!")}
      />
    </>
  );
}
