import styled, { css } from "styled-components";

import { Heading } from "../../typography/Heading";

export const StyledHeading = styled(Heading)(
  ({
    // withMargin = false,
    theme: {
      typography: { fontSize },
    },
  }) => css`
    font-size: ${fontSize.heading4};
    margin-bottom: ${"1.5rem"};
  `
);

export const OrderSummaryContainer = styled.div<{ fixed?: boolean }>(
  ({ theme: { color, borderRadius } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 250px;
    padding: 1.5rem;
    background-color: ${color.orderSummaryBackground};
    border-radius: ${borderRadius.s};
  `
);

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  border-top: 1px solid #f5f6f7;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
