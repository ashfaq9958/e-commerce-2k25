import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/redux/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
