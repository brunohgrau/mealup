import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

//selector function that takes the state as input (of type RootState).
//  returns the value of the cart property from the state.
const selectCart = (state: RootState) => state.cart;

//  memoized selector
// It takes an array of one element: [selectCart]. This indicates that selectCartVisibility relies on the output of selectCart.
// The resultFunction is provided as the second argument. It receives the output of selectCart (which is the entire cart state) as cart.
//Inside the resultFunction, it returns cart.visible. This extracts the visible property from the cart state, representing whether the cart is currently visible.

export const selectCartVisibility = createSelector(
  selectCart,
  (cart) => cart.visible
);