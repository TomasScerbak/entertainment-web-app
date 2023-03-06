import { createSlice } from "@reduxjs/toolkit";

const isAuthentificatedState = { isAuthentificated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: isAuthentificatedState,
  reducers: {
    logIn(state) {
      state.isAuthentificated = true;
    },
    logOut(state) {
      state.isAuthentificated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
