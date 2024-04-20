import styled, { css } from "styled-components";
import { Heading } from "../../components/typography/Heading";
import { breakpoints } from "../../styles/breakpoints";

export const ContentContainer = styled.div(
  ({ theme: { color, spacing } }) => css`
    min-height: 100vh;
    padding-bottom: ${spacing.xxl};
    background: ${color.checkoutBottomBackground};
  `
);
export const TopContainer = styled.div(
  ({ theme: { color, spacing } }) => css`
    min-height: 260px;
    padding-top: ${spacing.xl};
    margin-bottom: ${spacing.s};
    background: ${color.checkoutTopBackground};

    @media ${breakpoints.M} {
      padding-top: ${spacing.xxl};
      min-height: 300px;
    }
  `
);

export const StyledHeading = styled(Heading)`
  margin: 0 auto;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-top: -12rem !important;

  @media ${breakpoints.S} {
    margin-top: -10rem !important;
    flex-direction: row;
  }
`;
