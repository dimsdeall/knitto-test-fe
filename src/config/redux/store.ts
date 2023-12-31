import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api/todoApi";
import pageReducer from "./reducer/pageReducer";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([todoApi.middleware]),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch