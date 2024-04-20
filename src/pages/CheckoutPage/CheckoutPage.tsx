import { PageTemplate } from "../../templates/PageTemplate";
import {
  ContentContainer,
  TopContainer,
  StyledHeading,
  BottomContainer,
  OrderDetailsContainer,
} from "./ChekoutPage.styles";
import { MultiStepForm } from "./components/registration-form/MultiStepFrom";
import { OrderSummary } from "../../components/ShoppingCart";

export const CheckoutPage = () => {
  return (
    <PageTemplate type="basic">
      <ContentContainer>
        <TopContainer>
          <StyledHeading level={2} className="container">
            Checkout
          </StyledHeading>
        </TopContainer>
        <BottomContainer className="container">
          <MultiStepForm />
          <OrderDetailsContainer>
            <OrderSummary cartItems={["Item01"]} />
          </OrderDetailsContainer>
        </BottomContainer>
      </ContentContainer>
    </PageTemplate>
  );
};
