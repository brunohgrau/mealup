import React, { useMemo } from "react";

import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
// import { CartItem } from "../../../app-state/cart";
import { Body } from "../../typography/Body";
import {
  OrderSummaryContainer,
  BottomContainer,
  CartItemsContainer,
  StyledHeading,
} from "./OrderSummary.styles";

import { cartItems } from "../../../stub/cart-items";

type OrderSummaryProps = {
  cartItems: any[];
};

export const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
  const totalPrice = useMemo(
    () =>
      cartItems
        .map((item) => item.quantity * item.price)
        .reduce((acc, next) => acc + next, 0),
    [cartItems]
  );

  return (
    <OrderSummaryContainer>
      <StyledHeading level={2}>Your Order</StyledHeading>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))
        ) : (
          <Body>Your cart is empty.</Body>
        )}
      </CartItemsContainer>
      <BottomContainer>
        <Body>Total</Body>
        <StyledHeading level={2}>{totalPrice}</StyledHeading>
      </BottomContainer>
    </OrderSummaryContainer>
  );
};
