import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { truncate } from "fs/promises";
import { RestaurantCard } from "./components/RestaurantCard";

function App() {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <RestaurantCard
          name="Sushi"
          specialty="Japanese"
          rating={4.5}
          isNew
          isClosed
          categories={["Japanese", "Sushi"]}
          onClick={() => {}}
          photoUrl="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20"
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
