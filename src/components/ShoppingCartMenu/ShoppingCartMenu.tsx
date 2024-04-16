import styled from "styled-components";

//import { CartItem } from '../../app-state/cart'
import { toEuro } from "../../helpers";
import { Button } from "../Button";
import { Select } from "../forms/Select";
import { Sidebar } from "../Sidebar";
import { Body } from "../typography";
import {
  FooterContainer,
  TotalSection,
  MenuItemContainer,
} from "./ShoppingCartMenu.styles";
import { cartItems } from "../../stub/cart-items";

const Footer = ({ onClick, totalPrice }: any) => (
  <FooterContainer>
    <TotalSection>
      <Body type="span">Total</Body>
      <Body type="span">{totalPrice}</Body>
    </TotalSection>
    <Button disabled={totalPrice === 0} large onClick={onClick}>
      Checkout
    </Button>
  </FooterContainer>
);

const ShoppingCartMenuItem = ({ item, onChange }: any) => (
  <MenuItemContainer>
    <div>
      <Body type="span" fontWeight="medium">
        {item.name}
      </Body>
      <Body>{item.description}</Body>
      <Body>{item.price * item.quantity}</Body>
    </div>
  </MenuItemContainer>
);

type ShoppingCartMenuProps = {
  isOpen: boolean;
  totalPrice: number;
  onClose: () => void;
  cartItems: any[];
  onGoToCheckoutClick?: () => void;
  onItemChange: (item: any) => void;
};
export const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onItemChange,
  onGoToCheckoutClick,
}: ShoppingCartMenuProps) => (
  <Sidebar
    title="Your Order"
    onClose={onClose}
    isOpen={isOpen}
    footer={<Footer onClick={onGoToCheckoutClick} totalPrice={totalPrice} />}
  >
    <div style={{ display: "grid", gap: "24px" }}>
      {cartItems.map((item) => (
        <ShoppingCartMenuItem
          key={item.id}
          item={item}
          onChange={(quantity: number) => onItemChange({ ...item, quantity })}
        ></ShoppingCartMenuItem>
      ))}
    </div>
  </Sidebar>
);
