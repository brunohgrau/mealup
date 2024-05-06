import { apiSlice } from "./apiSlice";

// Define an interface for the Restaurant data type
interface Restaurant {
  id: number;

  // Add other restaurant properties here (name, cuisine, etc.)
}

export const restaurantApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => "/restaurants",
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantApiSlice;
