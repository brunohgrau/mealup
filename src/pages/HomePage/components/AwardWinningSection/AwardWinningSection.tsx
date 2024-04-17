import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import restaurants from "../../../../assets/images/restaurants.png";
import { breakpoints } from "../../../../styles/breakpoints";
import { Heading } from "../../../../components/typography";
import {
  StyledButton,
  Container,
  ContentContainer,
  LeftContainer,
  SlidingBackground,
} from "./AwardWinningSection.styles";

export const AwardWinningSection = () => {
  return (
    <Container>
      <ContentContainer>
        <LeftContainer>
          <Heading level={1} className="bolder">
            Award winning
          </Heading>
          <Heading level={1}>The best restaurants near you!</Heading>
          <Link to="/categories">
            <StyledButton>Explore best restaurants</StyledButton>
          </Link>
        </LeftContainer>
        <SlidingBackground />
      </ContentContainer>
    </Container>
  );
};
