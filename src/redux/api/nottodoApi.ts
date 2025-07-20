import { NotToDo } from '@/types/notToDo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notToDoApi = createApi({
  reducerPath: 'notToDoApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<NotToDo[], void>({
      query: () => 'nottodos',
      providesTags: ['Tasks'],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: 'nottodos',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `nottodos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `nottodos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = notToDoApi;