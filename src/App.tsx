import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { truncate } from "fs/promises";
import { PageSection } from "./components/PageSection";
import { cartItems } from "./stub/cart-items";
import { OrderSummary } from "./components/ShoppingCart";

function App() {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <OrderSummary cartItems={cartItems} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
