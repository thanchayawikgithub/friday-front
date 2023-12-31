import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CreateCustomerData from "../../types/Customer/CreateCustomerData";
import customerService from "../../service/customerService";
import Customer from "../../types/Customer/Customer";

interface CustomerState {
  isSignUpSuccess: boolean;
  allCustomer: Customer[];
}

const initialState: CustomerState = {
  isSignUpSuccess: false,
  allCustomer: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createCustomer.fulfilled, (state) => {
        state.isSignUpSuccess = true;
      })
      .addCase(getAllCustomer.fulfilled, (state, action) => {
        state.allCustomer = action.payload;
        console.log(state.allCustomer);
      });
  },
});

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (data: CreateCustomerData) => {
    try {
      const response = await customerService.createCustomer(data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getAllCustomer = createAsyncThunk(
  "customer/getAllCustomer",
  async () => {
    try {
      const response = await customerService.getAllCustomer();
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export default customerSlice.reducer;
