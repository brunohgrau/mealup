import styled, { css } from "styled-components";
import { PageTemplate } from "../../templates/PageTemplate";
import {
  ContentContainer,
  TopContainer,
  StyledHeading,
  BottomContainer,
} from "./ChekoutPage.styles";

export const CheckoutPage = () => {
  return (
    <PageTemplate type="basic">
      <ContentContainer>
        <TopContainer>
          <StyledHeading level={2} className="container">
            Checkout
          </StyledHeading>
        </TopContainer>
        <BottomContainer className="container"></BottomContainer>
      </ContentContainer>
    </PageTemplate>
  );
};
