import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarked: [],
};

export const bookMarkedSlice = createSlice({
  name: "userBookmars",
  initialState,
  reducers: {
    saveBookmarkedMovie: (state, action) => {
      const bookmarkedMovie = action.payload;
      state.bookmarked.push(bookmarkedMovie);
    },
  },
});

export const { saveBookmarkedMovie } = bookMarkedSlice.actions;

export default bookMarkedSlice;
