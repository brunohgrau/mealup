import styled, { css } from "styled-components";

import { breakpoints } from "../../styles/breakpoints";
import { Body } from "../typography";
import {
  Container,
  Image,
  RoundImage,
  FloatingTitle,
  Title,
} from "./Category.styles";

export type CategoryProps = {
  id?: string;
  title: string;
  photoUrl: string;
  round?: boolean;
};

const Rounded = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <RoundImage src={url} alt="restaurant category" />
    <Title>
      <Body type="span" color="#000000">
        {title}
      </Body>
    </Title>
  </>
);

const Squared = ({ title, photoUrl: url }: CategoryProps) => (
  <>
    <Image src={url} alt="restaurant category" />
    <FloatingTitle>
      <Body type="p" fontWeight="medium" size="XXS">
        {title}
      </Body>
    </FloatingTitle>
  </>
);

export const Category = ({ photoUrl, title, round = false }: CategoryProps) => {
  return (
    <Container round={round} data-testid={title}>
      {round ? (
        <Rounded photoUrl={photoUrl} title={title} />
      ) : (
        <Squared photoUrl={photoUrl} title={title} />
      )}
    </Container>
  );
};
