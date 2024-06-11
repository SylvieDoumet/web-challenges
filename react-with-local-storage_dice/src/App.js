// import von useLocalStorageState und .utils einfügen

import useLocalStorageState from "use-local-storage-state";
import { getD6Roll } from "./utlis";

import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  // consts und setRoll einfügen

  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        {/* button adaptieren  */}

        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        {/* history anpassen {} -> {rolls} */}
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
