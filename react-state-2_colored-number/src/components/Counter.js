import React, { useState } from "react";
import ColoredNumber from "./ColoredNumber";

// Initialize state for count
export default function Counter() {
  const [count, setCount] = useState(0);

  // Function to handle the count +1
  const add1 = () => {
    setCount(count + 1);
  };

  // Function to handle the count -1
  const substract1 = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      {/* Pass count state as value prop */}
      <ColoredNumber value={count} />

      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          // Add onClick handle function for add1
          onClick={add1}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          // Add onClick handle function for substract1
          onClick={substract1}
        >
          -
        </button>
      </div>
    </div>
  );
}
