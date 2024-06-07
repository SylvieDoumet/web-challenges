import { useState } from "react";
import "./styles.css";
import { uid } from "uid";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    const animalWithId = { ...newAnimal, id: uid() };
    setAnimals((prevAnimals) => [...prevAnimals, animalWithId]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
