import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const theme = lightTheme;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Hello</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
