import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Icon } from "./components/Icon/Icon";
import { Button } from "./components/Button/Button";

function App() {
  const theme = lightTheme;
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <Button
          aria-label="food cart"
          icon="cart"
          onClick={() => {}}
          clear={false}
          large={false}
          round={false}
          withIcon={false}
        >
          Button
        </Button>

        <h1>Hello</h1>
      </ThemeProvider>
    </Router>
  );
}

export default App;
