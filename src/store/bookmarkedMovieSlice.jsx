import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedMovies: [],
};

export const bookmarkedMovieSlice = createSlice({
  name: "bookmarkedMovie",
  initialState,
  reducers: {
    saveBookmarkedMovie: (state, action) => {
      const bookmarkedMovie = action.payload;
      const existingMovie = state.bookmarkedMovies.find(
        (movie) => movie.id === bookmarkedMovie.id
      );
      if (!existingMovie) {
        state.bookmarkedMovies.push({
          id: bookmarkedMovie.id,
          title: bookmarkedMovie.title,
          image: bookmarkedMovie.image,
          category: bookmarkedMovie.category,
          year: bookmarkedMovie.year,
          rating: bookmarkedMovie.rating,
          type: bookmarkedMovie.type,
        });
      }
    },

    removeBookmarkedMovie: (state, action) => {
      const id = action.payload;
      const existingMovie = state.bookmarkedMovies.find(
        (movie) => movie.id === id
      );
      if (existingMovie) {
        state.bookmarkedMovies.filter((movie) => movie.id !== existingMovie);
      }
    },

    clearBookmarkedMovies: (state) => {
      state.bookmarkedMovies = [];
    },
  },
});

export const { saveBookmarkedMovie } = bookmarkedMovieSlice.actions;
export const { removeBookmarkedMovie } = bookmarkedMovieSlice.actions;
export const { clearBookmarkedMovies } = bookmarkedMovieSlice.actions;

export default bookmarkedMovieSlice;
