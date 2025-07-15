import { createSlice } from "@reduxjs/toolkit";
import type { NotificationState } from "../types/notification.types";

const initialState: NotificationState = {
  message: null,
  type: null,
  
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },

    clearNotification: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { showNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
