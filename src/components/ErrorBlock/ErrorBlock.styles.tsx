import styled, { css } from "styled-components";

export const ErrorContainer = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${spacing.l} 0;
    margin: 0 auto;
  `
);

export const ImageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-top: ${spacing.m};
  `
);
