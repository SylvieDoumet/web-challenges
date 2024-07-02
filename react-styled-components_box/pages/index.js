import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </FlexContainer>
  );
}
