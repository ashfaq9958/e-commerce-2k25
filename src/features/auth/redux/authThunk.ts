import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginPayload, RegisterPayload } from "../types/auth.types";
import { loginAPI, registerAPI } from "./authAPI";
import { extractErrorMessage } from "@/utils/errorUtils";
import { showNotification } from "@/features/notification/rudex/notificationSlice";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: LoginPayload, thunkAPI) => {
    try {
      const response = await loginAPI(credentials);
      thunkAPI.dispatch(
        showNotification({
          message: "Welcome back! You’re now logged in.",
          type: "success",
        })
      );
      return response;
    } catch (error: any) {
      const errorMessage = extractErrorMessage(error);
      thunkAPI.dispatch(showNotification({ errorMessage, type: "error" }));
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: RegisterPayload, thunkAPI) => {
    try {
      const response = await registerAPI(data);

      const successMessage =
        response?.message || "Registration completed successfully.";

      thunkAPI.dispatch(
        showNotification({
          message: successMessage,
          type: "success",
        })
      );
      
      return response?.data;
    } catch (error: any) {
      console.log(error);
      const errorMessage = extractErrorMessage(error);
      thunkAPI.dispatch(
        showNotification({ message: errorMessage, type: "error" })
      );
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
