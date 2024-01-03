import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/product/Product";
import CartItem from "../../types/CartItem";
import { RootState } from "../store";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;
