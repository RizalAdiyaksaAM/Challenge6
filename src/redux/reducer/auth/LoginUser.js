import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookie";

// const initialState = { token: CookieStorage.get(CookieKeys.AuthToken) || undefined, login: "", user: "" };
const initialState = { token: undefined, login: "", user: "" };

const loginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.login = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = loginSlice.actions;

export default loginSlice.reducer;
