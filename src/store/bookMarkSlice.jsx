import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarked: [],
};

export const bookMarkedSlice = createSlice({
  name: "userBookmars",
  initialState,
  reducers: {
    saveBookmaredMovie: (state, action) => {
      const bookmarkedMovie = action.payload;
      state.bookmarked.push(bookmarkedMovie);
    },
  },
});

export const { saveBookmaredMovie } = bookMarkedSlice.actions;

export default bookMarkedSlice;
