import { createGlobalStyle } from "styled-components";

import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${lora.style.fontFamily}, serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  :root {
    --color-book-shadow: rgba(0, 0, 0, 0.25);
  }
`;

export const lightTheme = {
  body: "#fff",
  text: "#000",
};

export const darkTheme = {
  body: "#333",
  text: "#fff",
};
