import styled, { css } from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { Heading } from "../../../../components/typography";

export const Container = styled.div(
  ({ theme: { color } }) => css`
    position: relative;
    width: 100%;
    height: 410px;
    padding-top: 3.75rem;
    background: ${color.bannerBackground};

    @media ${breakpoints.M} {
      padding-top: 6rem;
      height: 566px;
    }
  `
);

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  text-align: center;
`;

export const StyledHeading = styled(Heading)(
  ({ theme: { color } }) => `
  padding: 0 2rem;
  margin-bottom: 2.5rem;
  strong {
    color: ${color.primaryText};
    font-weight: 900;
  }
`
);

export const Image = styled.div<{ src: string }>(
  ({ src }) => css`
    background-image: url(${src});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 700px;
    position: absolute;
    bottom: 0;
    @media ${breakpoints.M} {
      background-size: 1000px;
    }
  `
);
