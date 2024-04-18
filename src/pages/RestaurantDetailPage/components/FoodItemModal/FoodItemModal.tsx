import { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

// import { CartItem } from '../../../../app-state/cart'

import { cartItems } from "../../../../stub/cart-items";

import { toEuro } from "../../../../helpers";
import { breakpoints } from "../../../../styles/breakpoints";
import { Button } from "../../../../components/Button";
import { Body } from "../../../../components/typography/Body";
import { Heading } from "../../../../components/typography/Heading";
import { Modal } from "../../../../components/Modal";

type FoodItemModalProps = {
  item?: any;
  cartItems: any;
  onClose: () => void;
  onItemSave: (item: any) => void;
  onItemRemove: (item: any) => void;
};

export const FoodItemModal = ({
  item,
  cartItems,
  onClose,
  onItemSave,
  onItemRemove,
}: FoodItemModalProps) => {
  return <></>;
};
