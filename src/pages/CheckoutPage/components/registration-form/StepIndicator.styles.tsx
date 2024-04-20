import styled, { css } from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

export const TitleSection = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: ${spacing.xs};

    span {
      margin-top: ${spacing.xs};
    }

    @media ${breakpoints.M} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${spacing.s};
      span {
        margin-top: 0;
      }
    }
  `
);

export const OutterBar = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    height: 4px;
    width: 100%;
    border-radius: ${borderRadius.xs};
    background-color: ${color.stepsIndicatorOuterBar};
  `
);

export const InnerBar = styled.div<{ progress: string }>(
  ({ progress, theme: { color, borderRadius } }) => css`
    height: 4px;
    width: ${progress};
    border-radius: ${borderRadius.xs};
    background-color: ${color.stepsIndicatorInnerBar};
    transition: width 0.5s ease-in-out;
  `
);
