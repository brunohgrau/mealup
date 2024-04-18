import styled, { css } from "styled-components";
import { Badge } from "../../components/Badge";

export const DetailSection = styled.div(
  ({ theme: { color, spacing } }) => css`
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
    background: ${color.restaurantDetailBackground};
    .review-text {
      color: ${color.reviewText};
      margin-bottom: ${spacing.m};
    }
  `
);

export const MenuSection = styled.div(
  ({ theme: { color } }) => css`
    padding-top: 3rem !important;
    padding-bottom: 5rem !important;
    background: ${color.menuSectionBackground};
  `
);

export const StyledBadge = styled(Badge)(
  ({ theme: { spacing } }) => css`
    margin-right: ${spacing.s};
  `
);

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
