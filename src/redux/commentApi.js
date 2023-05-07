import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://6454b382a74f994b33468a7b.mockapi.io/" + API_ENDPOINT;

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({}),
});

export const {} = commentApi;

//https://6454b382a74f994b33468a7b.mockapi.io/:endpoint
