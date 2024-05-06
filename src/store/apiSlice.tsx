import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"; // Import for hooks

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Restaurant", "Order"],
  endpoints: (builder) => ({}),
});
