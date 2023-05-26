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
    addNewOrder: build.mutation({
      query: (payload) => ({
        url: "/order/addOrder",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useGetTypesQuery, useGetItemsQuery, useAddNewOrderMutation } =
  api;
