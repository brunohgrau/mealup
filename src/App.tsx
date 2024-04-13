import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { truncate } from "fs/promises";
import { Review } from "./components/Review/Review";

function App() {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <Review rating={4} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
