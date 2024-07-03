import Link from "../components/Link";

import Lights from "../components/Lights";

export default function HomePage({ lights, toggleLight }) {
  const lightsOnCount = lights.filter((light) => light.isOn).length;

  return (
    <div>
      <h1>Home</h1>
      <p> {lightsOnCount} light(s) are on.</p>
      <Lights lights={lights} toggleLight={toggleLight} />
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
