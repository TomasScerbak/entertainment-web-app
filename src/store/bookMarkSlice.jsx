import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarked: [],
};

export const bookMarkedSlice = createSlice({
  name: "userBookmars",
  initialState,
  reducers: {
    saveBookmaredMovie: (state, action) => {
      const bookmark = action.payload;
      state.bookmarked.push(bookmark);
    },
  },
});

export const { saveBookmaredMovie } = bookMarkedSlice.actions;

export default bookMarkedSlice;
