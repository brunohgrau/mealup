import styled, { css } from "styled-components";
import { Body } from "../../../../components/typography/Body";

export const Container = styled.div<{ isHighlighted: boolean }>(
  ({ theme: { boxShadow, color, borderRadius } }) => css`
    padding: 1.5rem;
    border-radius: ${borderRadius.xs};
    transition: box-shadow 0.1s ease-in;
    position: relative;
    background: ${color.foodItemBackground};

    &:hover {
      cursor: pointer;
      box-shadow: ${boxShadow.card};
    }
  `
);

export const Quantity = styled(Body)(
  ({ theme: { color, borderRadius } }) => css`
    padding: 0.25rem;
    width: 35px;
    height: 35px;
    border-radius: ${borderRadius.xs};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color.black};
    color: ${color.white};
    position: absolute;
    top: 0;
    right: 0;
  `
);

export const Description = styled(Body)(
  ({ theme: { color } }) => `
    margin: 0;
    color: ${color.badgeText};
    margin-top: 0.5rem;
  `
);

export const Price = styled(Body)`
  margin: 0;
  margin-top: 1rem;
`;
