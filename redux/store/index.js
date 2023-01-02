import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/auth.slice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  devTools: true,
});