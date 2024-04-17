import React from "react";
import {
  CartItemContainer,
  Quantity,
  Name,
  Price,
} from "./ShoppingCartItem.styles";

type ShoppingCartItemProps = {
  item: any;
};

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const { name, price, quantity } = item;
  return (
    <CartItemContainer>
      <Quantity type="span">{quantity}</Quantity>
      <Name type="span">{name}</Name>
      <Price type="span">{quantity * price}</Price>
    </CartItemContainer>
  );
};
