import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendMovies: [],
};

export const trendMoviesSlice = createSlice({
  name: "trendMovies",
  initialState,
  reducers: {
    saveTrendMovies: (state, action) => {
      const movies = action.payload;
      if (state.trendMovies.length === 0) {
        state.trendMovies.push(movies);
      } else {
        state.trendMovies = [];
      }
    },
  },
});

export const { saveTrendMovies } = trendMoviesSlice.actions;

export default trendMoviesSlice;
