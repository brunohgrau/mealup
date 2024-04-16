import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  > div:first-of-type {
    flex: 0.75;
    padding-right: 1rem;
  }
  > div:last-of-type {
    flex: 0.25;
  }
`;
