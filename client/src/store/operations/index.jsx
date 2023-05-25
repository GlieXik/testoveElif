import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (build) => ({
    getTypes: build.query({
      query: () => "type",
    }),
    getItems: build.query({
      query: () => "item",
    }),
  }),
});

export const { useGetTypesQuery, useGetItemsQuery } = api;
