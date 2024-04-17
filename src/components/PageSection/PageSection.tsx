import * as React from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { Heading } from "../typography";

import { Container, TopContainer } from "./PageSection.styles";

type PageSectionProps = {
  title: string;
  topButtonLabel?: string;
  onTopButtonClick?: () => void;
  children: React.ReactNode;
};

export const PageSection: React.FC<
  React.PropsWithChildren<PageSectionProps>
> = ({ title, topButtonLabel, onTopButtonClick, children }) => (
  <Container className="container-desktop">
    <TopContainer>
      <Heading level={2}>{title}</Heading>
      {topButtonLabel && (
        <Button clear onClick={onTopButtonClick}>
          {topButtonLabel}
        </Button>
      )}
    </TopContainer>
    {children}
  </Container>
);
