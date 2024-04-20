import styled, { css } from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { Body } from "../../../../components/typography/Body";
import { Heading } from "../../../../components/typography/Heading";
import { TitleSection, OutterBar, InnerBar } from "./StepIndicator.styles";

type StepIndicatorProps = {
  title: string;
  currentStep: number;
  amountOfSteps: number;
};

export const StepIndicator = ({
  title,
  currentStep,
  amountOfSteps,
}: StepIndicatorProps) => {
  const progress = `${(currentStep / amountOfSteps) * 100}%`;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <TitleSection>
        <Heading level={4}>{title}</Heading>
        <Body size="XS" type="span">
          Step {currentStep} of {amountOfSteps}
        </Body>
      </TitleSection>
      <OutterBar>
        <InnerBar progress={progress} />
      </OutterBar>
    </div>
  );
};
