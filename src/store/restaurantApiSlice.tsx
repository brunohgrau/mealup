import { apiSlice } from "./apiSlice";

export const restaurantApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantApiSlice;
