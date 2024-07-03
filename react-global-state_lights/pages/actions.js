import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ turnAllLightsOn, turnAllLightsOff, lights }) {
  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </>
  );
}
