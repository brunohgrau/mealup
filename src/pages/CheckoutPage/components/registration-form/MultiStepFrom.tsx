import styled, { css } from "styled-components";
import { ContactDetails } from "./ContactDetails";
import { DeliveryDetails } from "./DeliveryDetails";
import { StepIndicator } from "./StepIndicator";

const defaultData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  postcode: "",
  email: "",
  phone: "",
};

const FormContainer = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    width: 100%;
    min-height: 480px;
    margin-right: 1.5rem;
    padding: 1.5rem;
    background: ${color.formBackground};
    border-radius: ${borderRadius.s};
  `
);

export const MultiStepForm = () => {
  const props = {};

  return (
    <FormContainer>
      <StepIndicator
        title={"Contact Details"}
        currentStep={1}
        amountOfSteps={1}
      />
      <ContactDetails {...props} />
    </FormContainer>
  );
};
