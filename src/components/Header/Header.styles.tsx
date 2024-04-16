import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { Link } from "react-router-dom";
import { Body } from "../typography/Body";

export const HeaderContainer = styled.div<{ sticky: boolean }>(
  ({ sticky, theme: { color } }) => css`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    padding: 0 1.5rem;
    border-bottom: 1px solid ${color.headerBorder};
    background: ${color.headerBackground};

    @media ${breakpoints.S} {
      padding: 0 4rem;
    }

    @media ${breakpoints.M} {
      position: ${sticky ? "sticky" : "relative"};
      height: 72px;
    }
  `
);

export const LogoContainer = styled(Link)`
  display: flex;
  width: 40px;
  padding-left: 1rem;
  & img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  .navigation-items {
    display: none;
  }

  a {
    margin-right: 0.5rem;
  }

  @media ${breakpoints.M} {
    .navigation-items {
      display: contents;
    }
    width: 80%;
  }
`;

export const CartText = styled(Body)(
  ({ theme: { color } }) => css`
    display: none;
    @media ${breakpoints.M} {
      display: inline-block;
      color: ${color.cartButtonText};
      margin-right: 0.25rem;
    }
  `
);

export const CartTotal = styled(Body)(
  ({ theme: { color } }) => css`
    display: inline-block;
    color: ${color.buttonText};
  `
);
