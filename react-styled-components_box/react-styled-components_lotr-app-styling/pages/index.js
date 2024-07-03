import Link from "next/link";

import styled from "styled-components";

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function HomePage() {
  return (
    <HomePageWrapper>
      <StyledLink href="/volumes">Go to all volumes</StyledLink>
    </HomePageWrapper>
  );
}
