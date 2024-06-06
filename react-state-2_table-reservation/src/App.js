import React from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  const handleAdd1 = () => setPeople(people + 1);
  const handleSubstract1 = () => setPeople(people - 1);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd1={handleAdd1} onSubstract1={handleSubstract1} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
