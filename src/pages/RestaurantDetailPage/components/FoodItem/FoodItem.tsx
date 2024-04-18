import { memo } from "react";
import styled, { css } from "styled-components";
import { Heading } from "../../../../components/typography/Heading";
import { Container, Quantity, Description, Price } from "./FoodItem.styles";

type FoodItemProps = {
  quantity?: number;
  name: string;
  price: number;
  description?: string;
  onClick: () => void;
};

export const FoodItem = memo(
  ({ quantity = 0, name, price, description, onClick }: FoodItemProps) => (
    <>
      <Container isHighlighted={quantity > 0} onClick={() => {}}>
        <div>
          {quantity > 0 && (
            <Quantity
              aria-label="food quantity"
              type="span"
              fontWeight="medium"
            >
              {quantity}
            </Quantity>
          )}
          <Heading level={4}>{name}</Heading>
          <Description>{description}</Description>
          <Price>{price}</Price>
        </div>
      </Container>
    </>
  )
);
FoodItem.displayName = "FoodItem";
