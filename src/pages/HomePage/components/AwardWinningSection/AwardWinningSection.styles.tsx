import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import restaurants from "../../../../assets/images/restaurants.png";
import { breakpoints } from "../../../../styles/breakpoints";
import { Button } from "../../../../components/Button";
import { Heading } from "../../../../components/typography";

export const StyledButton = styled(Button)`
  margin-top: 2.5rem;
`;

export const Container = styled.div(
  ({ theme: { color } }) => css`
    position: relative;
    display: flex;
    width: 100%;
    height: 487px;
    background: ${color.topBannerBackground};
    overflow: hidden;
  `
);

export const ContentContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${breakpoints.S} {
    padding: 0 4rem;
  }
`;

/* 
 .container {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 1.5rem;

      @media ${breakpoints.S} {
        padding: 0 4rem;
      }
    }

*/

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 487px;
  overflow: hidden;

  @media ${breakpoints.M} {
    flex: 0.5;
    `;

export const SlidingBackground = styled.div`
  display: none;
  background: url(${restaurants}) repeat-y;
  height: 5076px;
  animation: slide 60s linear infinite;
  width: 100%;

  @keyframes slide {
    0% {
      transform: translate3d(0, -1692px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${breakpoints.M} {
    display: block;
    flex: 0.5;
  }
`;
