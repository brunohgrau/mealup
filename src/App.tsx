import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { truncate } from "fs/promises";
import { ErrorBlock } from "./components/ErrorBlock/ErrorBlock";

function App() {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <ErrorBlock
          body="It seems that there are no restaurants in this category yet. Try to come back later?"
          title="This is not the food you’re looking for."
          image={<img alt="no restaurants found" src={""} />}
          buttonText="See all restaurants"
          onButtonClick={() => {}}
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
