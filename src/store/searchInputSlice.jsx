import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const searchInputSlice = createSlice({
  name: "saveInputValue",
  initialState,
  reducers: {
    saveInputValue: (state, action) => {
      const inputValue = action.payload;
      state.searchValue = inputValue;
    },

    clearInputValue: (state) => {
      state.searchValue = "";
    },
  },
});

export const { saveInputValue } = searchInputSlice.actions;
export const { clearInputValue } = searchInputSlice.actions;

export default searchInputSlice;
