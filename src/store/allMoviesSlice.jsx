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
      state.allMovies = movies;
    },
    clearAllMovies: (state) => {
      state.allMovies = [];
    },
  },
});

export const { saveAllMovies } = allMoviesSlice.actions;
export const { clearAllMovies } = allMoviesSlice.actions;

export default allMoviesSlice;
