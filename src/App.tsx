import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { truncate } from "fs/promises";
import { Header } from "./components/Header";

function App() {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <Header sticky={true} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
