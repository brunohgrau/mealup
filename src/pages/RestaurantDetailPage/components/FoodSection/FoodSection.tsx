import styled from "styled-components";
import { memo } from "react";
import { FoodItem } from "../FoodItem/FoodItem";
// import type { CartItem } from "../../../../app-state/cart";
import type { FoodMenuItem } from "../../../../types";
import { StyledHeading, StyledContainer } from "./FoodSection.styles";

type FoodSectionProps = {
  items: FoodMenuItem[];
  title: string;
  cartItems: any;
  onItemClick?: (item: any) => void;
};

export const FoodSection = memo(
  ({ title, cartItems, items, onItemClick = () => {} }: FoodSectionProps) => (
    <div>
      <StyledHeading level={3}>{title}</StyledHeading>
      <StyledContainer>
        <FoodItem
          key={1}
          name={"Name"}
          price={20}
          description={"Description"}
          onClick={() => {}}
        />
      </StyledContainer>
    </div>
  )
);
FoodSection.displayName = "FoodSection";
