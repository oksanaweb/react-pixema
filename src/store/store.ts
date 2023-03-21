import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/MovieSlice/MovieSlice";
import filterReducer from "./features/FilterSlice/FilterSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
