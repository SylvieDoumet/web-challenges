import React from "react";
import "./styles.css";

// Erster Schritt : Aufruf

// export default function App() {
//   return <h1>Hello World !</h1>;
// }

// Zweiter Schritt : Funktionsauslagerung

function HelloWorld() {
  return <h1>Hello World</h1>;
}

export default function App() {
  return <HelloWorld />;
}
