import styled from "styled-components";

export const Breadcrumb = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  a,
  p {
    color: #7b7b7b;
    text-transform: lowercase;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
  gap: 24px;

  padding-bottom: 5rem;
`;
