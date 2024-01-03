import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import Customer from "../../types/Customer/Customer";
import authService from "../../service/authService";
import { RootState } from "../store";
import { jwtDecode } from "jwt-decode";

export const getCurrentCustomer = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return null;
  }

  const customer = jwtDecode<{ customer: Customer; exp: number; iat: number }>(
    accessToken
  ).customer;

  return customer;
};

interface authState {
  isAuthenticated: boolean;
  currentCustomer: Customer | null;
}

const initialState: authState = {
  isAuthenticated: localStorage.getItem("access_token") ? true : false,
  currentCustomer: getCurrentCustomer(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log(action.payload);
      localStorage.setItem("access_token", action.payload.access_token);
      state.isAuthenticated = true;
    });
  },
});

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await authService.signIn({
        email,
        password,
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
