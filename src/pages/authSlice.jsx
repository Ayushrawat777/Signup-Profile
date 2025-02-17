import { createSlice } from "@reduxjs/toolkit";

// Check local storage for saved user data
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload.user;

      state.isAuthenticated = true;
      // Save to local storage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;

      state.isAuthenticated = false;
      // Clear local storage
      localStorage.removeItem("user");
    },
  },
});

export const { signup, logout } = authSlice.actions;
export default authSlice.reducer;
