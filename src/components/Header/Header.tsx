import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";
import { ShoppingCartMenu } from "../ShoppingCartMenu";
import { Button } from "../Button";
import { toEuro } from "../../helpers";
import { Body } from "../typography/Body";
import { Logo } from "../Logo";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  CartText,
  CartTotal,
} from "./Header.styles";
import { cartItems } from "../../stub/cart-items";

type HeaderComponentProps = {
  isCartVisible?: boolean;
  cartItems?: any;
  totalPrice?: number;
  logoOnly?: boolean;
  sticky?: boolean;
  toggleCartVisibility?: () => void;
  goToCheckout?: () => void;
  saveItem?: (item: any) => void;
};

export const HeaderComponent = ({
  isCartVisible = false,
  logoOnly = false,
  sticky = false,
  totalPrice = 0,
  cartItems = [],
  toggleCartVisibility = () => {},
  goToCheckout = () => {},
  saveItem = () => {},
}: HeaderComponentProps) => (
  <HeaderContainer data-testid="header" sticky={sticky}>
    <LogoContainer to={"/"}>
      <Logo />
    </LogoContainer>
    {!logoOnly && (
      <>
        <OptionsContainer>
          <span className="navigation-items">
            <Link to="/" tabIndex={-1}>
              <Button clear>Home</Button>
            </Link>
            <Link to="/categories" tabIndex={-1}>
              <Button clear>All restaurants</Button>
            </Link>
          </span>
          <Button
            aria-label="food cart"
            icon="cart"
            onClick={toggleCartVisibility}
          >
            {totalPrice > 0 && (
              <>
                <CartText type="span">Order</CartText>
                <CartTotal type="span">{totalPrice}</CartTotal>
              </>
            )}
          </Button>
        </OptionsContainer>
        <ShoppingCartMenu
          isOpen={isCartVisible}
          onClose={toggleCartVisibility}
          onGoToCheckoutClick={goToCheckout}
          cartItems={cartItems}
          totalPrice={totalPrice}
          onItemChange={saveItem}
        />
      </>
    )}
  </HeaderContainer>
);

export const Header = ({ sticky }: { sticky: boolean }) => {
  return <HeaderComponent sticky={sticky} cartItems={cartItems} />;
};
