import { useParams, Link, useNavigate } from "react-router-dom";
import { PageTemplate } from "../../templates/PageTemplate";
import {
  RestaurantCard,
  RestaurantCardSkeleton,
} from "../../components/RestaurantCard";
import { TopBanner } from "../../components/TopBanner";
import { categories } from "../../stub/categories";
import sushi from "../../assets/images/sushi.svg";
import { Restaurant } from "../../types";
import { ErrorBlock } from "../../components/ErrorBlock";
import { Breadcrumb, StyledContainer } from "./CategoryDetailPage.styles";

export const CategoryDetailPage = () => {
  const photoUrl =
    "https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550";

  const navigate = useNavigate();

  return (
    <PageTemplate>
      <TopBanner title="Categories" photoUrl={photoUrl} />
      <div className="container">
        <Breadcrumb>
          <p style={{ display: "inline-block", textDecoration: "underline" }}>
            <Link to="/categories">categories</Link>
          </p>{" "}
          /{" "}
          <p style={{ display: "inline", fontWeight: "lighter" }}>
            {"burgers"}
          </p>
        </Breadcrumb>
        <StyledContainer>
          <RestaurantCard
            name="Burger"
            photoUrl="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20"
            specialty="Nicest place for burger"
            rating={4.2}
            categories={["burgers", "comfort food"]}
            onClick={() => navigate("/restaurants/1")}
          />
          <RestaurantCard
            name="Burger"
            photoUrl="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20"
            specialty="Nicest place for burger"
            rating={4.2}
            categories={["burgers", "comfort food"]}
            onClick={() => navigate("/restaurants/1")}
          />
        </StyledContainer>
      </div>
    </PageTemplate>
  );
};
