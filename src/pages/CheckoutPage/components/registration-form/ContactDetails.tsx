import styled, { css } from "styled-components";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/forms/Input";
import { Body } from "../../../../components/typography/Body";

const DisclaimerText = styled(Body)(
  ({ theme: { spacing } }) => css`
    margin-bottom: ${spacing.m};
  `
);

export const ContactDetails = ({}: any) => {
  return (
    <div className="form">
      <Input
        label="First name"
        placeholder="John"
        name="firstName"
        value={"firstName"}
        onChange={() => {}}
      />
      <Input
        label="Last name"
        placeholder="Doe"
        name="lastName"
        value={"firstName"}
        onChange={() => {}}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="email address"
        value={"firstName"}
        onChange={() => {}}
      />
      <Input
        label="Phone number"
        placeholder="phone number"
        name="phone"
        type="tel"
        value={"firstName"}
        onChange={() => {}}
      />
      <DisclaimerText size="XXS" type="span">
        We’ll only use your phone to call you about your order
      </DisclaimerText>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Button onClick={() => {}}>Next</Button>
      </div>
    </div>
  );
};
