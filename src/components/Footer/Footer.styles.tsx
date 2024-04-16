import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const FooterContainer = styled.div(
  ({ theme: { color } }) => css`
    min-height: 450px;
    padding: 2rem 0;
    color: ${color.white};
    background: ${color.footerBackground};
    hr {
      color: ${color.white};
      width: 100%;
    }
  `
);

export const FooterTop = styled.div`
  display: grid;
  gap: 20px 40px;
  grid-template-columns: repeat(1, 1fr);
  @media ${breakpoints.S} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints.L} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 1rem;
  div {
    padding-left: 1rem;
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

    .container-desktop {
      @media ${breakpoints.L} {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }
    }

    .footer-bottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: 1rem;
    }

    .footer-bottom div {
      padding-left: 1rem;
    }



*/
