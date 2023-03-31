import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import trendMoviesReducer from "./trendMoviesSlice";
import allMoviesReducer from "./allMoviesSlice";
import tvShowReducer from "./tvShowsSlice";
import bookmarkedMoviesReducer from "./bookmarkedMovieSlice";
import searchInputReducer from "./searchInputSlice";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    trendMovies: trendMoviesReducer.reducer,
    allMovies: allMoviesReducer.reducer,
    tvShows: tvShowReducer.reducer,
    bookmarkedMovies: bookmarkedMoviesReducer.reducer,
    searchInputValue: searchInputReducer.reducer,
  },
});

export default store;
