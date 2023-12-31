import { createSlice, current } from "@reduxjs/toolkit";
import Customer from "../../types/Customer/Customer";

interface authState {
  currentCustomer: Customer | null;
}

const initialState: authState = {
  currentCustomer: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
