import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginPayload, RegisterPayload } from "../types/auth.types";
import { loginAPI, registerAPI } from "./authAPI";
import { extractErrorMessage } from "@/utils/errorUtils";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: LoginPayload, thunkAPI) => {
    try {
      const response = await loginAPI(credentials);
      return response;
    } catch (error: any) {
      const errorMessage = extractErrorMessage(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: RegisterPayload, thunkAPI) => {
    try {
      const response = await registerAPI(data);
      return response;
    } catch (error: any) {
      const errorMessage = extractErrorMessage(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
