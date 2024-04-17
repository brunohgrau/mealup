import styled from "styled-components";
import { PageTemplate } from "../../templates/PageTemplate";
import { Banner } from "./components/Banner/Banner";
import { RestaurantsSection } from "./components/RestaurantsSection/RestaurantsSection";
import { AwardWinningSection } from "./components/AwardWinningSection/AwardWinningSection";

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`;

export const HomePage = () => (
  <PageTemplate>
    <Banner />
    <Spacing />
    <RestaurantsSection title="Our favorite Picks" />
    <Spacing />
    <AwardWinningSection />
    <Spacing />
  </PageTemplate>
);
