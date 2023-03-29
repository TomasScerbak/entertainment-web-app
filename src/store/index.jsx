import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import trendMoviesReducer from "./trendMoviesSlice";
import allMoviesReducer from "./allMoviesSlice";
import bookMarkedReducer from "./bookMarkSlice";
import tvShowReducer from "./tvShowsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    trendMovies: trendMoviesReducer.reducer,
    allMovies: allMoviesReducer.reducer,
    tvShows: tvShowReducer.reducer,
    bookmarked: bookMarkedReducer.reducer,
  },
});

export default store;
