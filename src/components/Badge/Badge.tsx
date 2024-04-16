import styled, { css } from "styled-components";
import { Body } from "../typography";

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    display: inline-block;
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${borderRadius.xs};

    text-transform: capitalize;
    span {
      color: ${color.badgeText};
    }
  `
);

type BadgeProps = {
  text: string;
  className?: string;
};

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    <Body type="span" size="S" fontWeight="medium" as="span">
      {text}
    </Body>
  </Container>
);
