import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import trendMoviesReducer from "./trendMoviesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    trendMovies: trendMoviesReducer.reducer,
  },
});

export default store;
