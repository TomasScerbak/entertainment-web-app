import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvShows: [],
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    saveTVShows: (state, action) => {
      const movies = action.payload;
      state.tvShows = movies;
    },
    clearTVShows: (state) => {
      state.tvShows = [];
    },
  },
});

export const { saveTVShows } = tvShowsSlice.actions;
export const { clearTVShows } = tvShowsSlice.actions;

export default tvShowsSlice;
