import { GlobalStyle } from "../styles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}


export default App;