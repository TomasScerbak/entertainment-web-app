import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: [],
};

export const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    saveAllMovies: (state, action) => {
      const movies = action.payload;
      if (state.allMovies.length === 0) {
        state.allMovies.push(movies);
      } else {
        state.allMovies = [];
      }
    },
  },
});

export const { saveAllMovies } = allMoviesSlice.actions;

export default allMoviesSlice;
