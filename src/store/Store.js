import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/User/Slice.User";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
