// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
// We need to import the reducer from our auth slice
import authReducer from "../features/auth/authSlice";

// configureStore creates the Redux store instance.
export const store = configureStore({
  // The `reducer` field defines all the slices we'll be using in our app.
  reducer: {
    // We're telling the store to use the reducer from our authSlice
    // for any state that falls under the 'auth' key.
    auth: authReducer,
  },
});
