import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
export type CategoryProps = {
  id?: string;
  title: string;
  photoUrl: string;
  round?: boolean;
};

export const Container = styled.figure<{ round: boolean }>(
  ({ round, theme: { color, borderRadius } }) => css`
    position: relative;
    display: flex;
    flex-direction: ${round ? "column" : "row"};
    align-items: ${round ? "center" : "start"};
    border-radius: ${borderRadius.s};
    height: 100%;
    width: 100%;
    min-width: 50px;
    max-width: ${round ? "200px" : "auto"};
    max-height: ${round ? "200px" : "309px"};
    margin: 0;
    padding: ${round ? "1.5rem 2rem" : "0"};
    background: ${round ? color.cardBackground : "transparent"};
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    @media ${breakpoints.M} {
      padding: ${round ? "1.5rem 0" : "0"};
    }
  `
);

export const Image = styled.img(
  ({ theme: { borderRadius } }) => css`
    object-fit: cover;
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    max-height: 300px;
    border-radius: ${borderRadius.s};
  `
);

export const RoundImage = styled(Image)(
  ({ theme: { borderRadius } }) => css`
    width: 4.5rem;
    height: 4.5rem;
    min-width: 4.5rem;
    min-height: 4.5rem;
    max-height: 200px;
    border-radius: ${borderRadius.round};
    @media ${breakpoints.M} {
      width: 6.5rem;
      height: 6.5rem;
      min-width: 6.5rem;
      min-height: 6.5rem;
    }
  `
);

export const FloatingTitle = styled.figcaption(
  ({ theme: { color, borderRadius } }) => css`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    padding: 8px 16px;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    border-radius: ${borderRadius.s};
    background: white;
    span {
      color: ${color.white};
    }
  `
);

export const Title = styled.figcaption`
  padding-top: 1rem;
`;
