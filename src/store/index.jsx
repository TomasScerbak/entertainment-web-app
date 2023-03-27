import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import trendMoviesReducer from "./trendMoviesSlice";
import allMoviesReducer from "./allMoviesSlice";
import bookMarkedSlice from "./bookMarkSlice";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    trendMovies: trendMoviesReducer.reducer,
    allMovies: allMoviesReducer.reducer,
    bookmarked: bookMarkedSlice.reducer,
  },
});

export default store;
