import { useNavigate, useParams } from "react-router-dom";
import { PageTemplate } from "../../templates/PageTemplate";
import { TopBanner } from "../../components/TopBanner";
import { Heading, Body } from "../../components/typography";
import { Review } from "../../components/Review";
// import { AnimatedIllustration } from "../../components/AnimatedIllustration";
import { ErrorBlock } from "../../components/ErrorBlock";
import { Spinner } from "../../components/Spinner";

import { FoodItemModal } from "./components/FoodItemModal";
import { FoodSection } from "./components/FoodSection";
import {
  DetailSection,
  StyledBadge,
  MenuSection,
} from "./RestaurantDetailPage.styles";

export const RestaurantDetailPage = ({}) => {
  const { id = "" } = useParams<"id">();
  const navigate = useNavigate();
  const photoUrl =
    "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20";

  return (
    <>
      <PageTemplate type="sticky-header">
        <TopBanner photoUrl={photoUrl} />
        <DetailSection>
          <div className="container">
            <Heading level={2}>Burger Kingdom</Heading>
            <Body> Specialities: Nicest Place for Burgers </Body>
            <Review rating={4.5} />
            <div>
              <StyledBadge key={1} text="Burgers" />
              <StyledBadge key={1} text="Comfort Food" />
            </div>
          </div>
        </DetailSection>
        <MenuSection>
          <div className="container">
            <FoodSection title="To Eat" items={[]} cartItems={[]} />
            <FoodSection title="Dessert" items={[]} cartItems={[]} />
            <FoodSection title="To Drink" items={[]} cartItems={[]} />
          </div>
        </MenuSection>
      </PageTemplate>
    </>
  );
};
