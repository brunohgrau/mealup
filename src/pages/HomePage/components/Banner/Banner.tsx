import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../../../../components/Button";
import ladies from "../../../../assets/images/ladies.svg";
import {
  Container,
  ContentContainer,
  StyledHeading,
  Image,
} from "./Banner.styles";

export const Banner = () => {
  return (
    <Container>
      <ContentContainer>
        <StyledHeading level={2}>
          {" "}
          <strong>Hungry?</strong> find your next meal
        </StyledHeading>
        <Link to="/categories">
          <Button> View all restaurants</Button>
        </Link>
      </ContentContainer>
      <Image src={ladies} />
    </Container>
  );
};
