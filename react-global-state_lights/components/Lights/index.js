import styled from "styled-components";
import Light from "../Light";
import React from "react";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.name}
            isOn={light.isOn}
            // onToggle={toggleLight(light.id)}
            // This is incorrect because it calls the function immediately.
            // Instead, we need to pass a function that calls the function.
            // This is called a "callback" function:

            onToggle={() => toggleLight(light.id)}
          />
        </li>
      ))}
    </StyledLights>
  );
}
