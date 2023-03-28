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
      state.trendMovies = movies;
    },
    clearTrendMovies: (state) => {
      state.trendMovies = [];
    },
  },
});

export const { saveTrendMovies } = trendMoviesSlice.actions;
export const { clearTrendMovies } = trendMoviesSlice.actions;

export default trendMoviesSlice;
