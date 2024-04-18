import styled from "styled-components";
import { Heading } from "../../../../components/typography";
import { breakpoints } from "../../../../styles/breakpoints";

export const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  padding-bottom: 3rem;

  @media ${breakpoints.M} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.L} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
