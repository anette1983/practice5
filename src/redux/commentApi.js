import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://6454b382a74f994b33468a7b.mockapi.io/";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentApi;
