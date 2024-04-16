import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { truncate } from "fs/promises";
import { Select } from "./components/forms/Select";
import { ShoppingCartMenu } from "./components/ShoppingCartMenu";
import { cartItems } from "./stub/cart-items";

function App() {
  const theme = lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
        <ShoppingCartMenu
          isOpen={true}
          onClose={() => {}}
          onItemChange={() => {}}
          cartItems={cartItems}
          totalPrice={200}
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
