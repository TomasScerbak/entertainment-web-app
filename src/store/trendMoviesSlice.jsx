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
  },
});

export const { saveTrendMovies } = trendMoviesSlice.actions;

export default trendMoviesSlice;
