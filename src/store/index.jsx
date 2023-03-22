import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import trendMoviesReducer from "./trendMoviesSlice";
import allMoviesReducer from "./allMoviesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    trendMovies: trendMoviesReducer.reducer,
    allMovies: allMoviesReducer.reducer,
  },
});

export default store;
