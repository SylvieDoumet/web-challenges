import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // Einfügen einer Funktion getISSCoords welche die ISS Koordinaten fetched und den state updatet

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });

      // Einfügen einer Error handling Funktion - Error message
    } catch (error) {
      console.log("Error occured fetching coordinates:", error);
    }
  }

  // Einfügen einer useEffect Funktion zum initialen Fetchen beim Mounting der Seite

  useEffect(() => {
    getISSCoords();

    // Einfügen einer Intervall Funktion die alle 5 Sekunden einen fetch ausführt

    const intervalId = setInterval(getISSCoords, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
