import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  name: Cookies.get("name"),
  loggedIn: Cookies.get("loggedIn"),
  email: Cookies.get("email"),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    update: (state) => {
      state.name = Cookies.get("name");
      state.loggedIn = Cookies.get("loggedIn");
      state.email = Cookies.get("email");
    },
  },
});

export const { update } = loginSlice.actions;

export const selectLoggedIn = (state) => state.login.loggedIn;
export const selectName = (state) => state.login.name;
export const selectEmail = (state) => state.login.email;

export default loginSlice.reducer;
