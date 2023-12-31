import { PaginationType } from "@/config/@types/pagination";
import { TodoType } from "@/config/@types/todo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  tagTypes:['Todos'],
  endpoints: (builder) => ({
    getTodosPagination: builder.query({
      query: (req: PaginationType) => `todos?_page=${req.page}&_limit=${req.limit}`,
      providesTags:['Todos'],
      transformResponse: (response: TodoType[]) => {
        return response
      },
      keepUnusedDataFor:3 //revalidate 3 second
    }),
    addTodo: builder.mutation({
      query:(body:TodoType) => ({
        method:'POST',
        url:'/todos',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    })
  }),
});

export const { useGetTodosPaginationQuery, useAddTodoMutation } = todoApi;