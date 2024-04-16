import * as React from "react";
import styled, { css } from "styled-components";

import { Button } from "../Button/Button";
import { Body } from "../typography/Body";
import { Heading } from "../typography/Heading";
import { ErrorContainer, ImageContainer } from "./ErrorBlock.styles";

type ErrorBlockProps = {
  title: string;
  image: React.ReactNode;
  body: string;
  buttonText: string;
  onButtonClick: () => void;
};

export const ErrorBlock = ({
  title,
  image,
  body,
  buttonText,
  onButtonClick,
}: ErrorBlockProps) => (
  <ErrorContainer>
    <Heading level={2}>{title}</Heading>
    <ImageContainer>{image}</ImageContainer>
    <Body>{body}</Body>
    <Button onClick={onButtonClick}>{buttonText}</Button>
  </ErrorContainer>
);
