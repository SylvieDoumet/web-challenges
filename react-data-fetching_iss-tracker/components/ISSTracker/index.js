import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;

  const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls longitude={longitude} latitude={latitude} onRefresh={mutate} />
    </main>
  );
}
