import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { restaurants } from "../../../../stub/restaurants";
import { IconButton } from "../../../../components/IconButton";
import { PageSection } from "../../../../components/PageSection";
import {
  RestaurantCard,
  RestaurantCardSkeleton,
} from "../../../../components/RestaurantCard";
import { Restaurant } from "../../../../types";
import { useGetRestaurantsQuery } from "../../../../store/restaurantApiSlice";
import { isDataView } from "util/types";

const PreviousButton = styled(IconButton)`
  position: absolute;
  left: 0;
`;

const NextButton = styled(IconButton)`
  position: absolute;
  right: 0;
`;

type RestaurantsSectionProps = {
  name: string;
  specialty?: string;
  restaurant?: any;
};

export const RestaurantsSection = ({
  name,
  restaurant,
}: RestaurantsSectionProps) => {
  const navigate = useNavigate();
  const { data: restaurants = [], error, isLoading } = useGetRestaurantsQuery();

  // const { restaurants, status } = Restaurants;

  const isMobile = /Mobi/i.test(window.navigator.userAgent);
  return (
    <PageSection title={name}>
      <Carousel
        draggable={isMobile}
        partialVisible={isMobile}
        customLeftArrow={<PreviousButton name="arrow-left" small={false} />}
        customRightArrow={<NextButton name="arrow-right" small={false} />}
        responsive={{
          desktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
          },
        }}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item"
      >
        {restaurants.map((restaurant: any, index: number) => (
          <RestaurantCard
            key={restaurant.name + index}
            {...restaurant}
            onClick={() => navigate(`/restaurants/${restaurant.id}`)}
          />
        ))}
      </Carousel>
    </PageSection>
  );
};
