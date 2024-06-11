// The contents of this notepad are lost when you refresh the page. Make it persistent by saving the contents to local storage.

// replace useState import by useLocalStorageState import

// import { useState } from "react";

import useLocalStorageState from "use-local-storage-state";

import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  // replace both `useState` hooks with `useLocalStorageState` hooks

  // const [note, setNote] = useState("");
  // const [font, setFont] = useState("system-ui");

  const [note, setNote] = useLocalStorageState("note", "");
  const [font, setFont] = useLocalStorageState("font", "system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
