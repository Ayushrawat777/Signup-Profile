import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import auth slice

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
