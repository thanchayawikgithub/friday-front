import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import customerReducer from "./slice/customerSlice";
import cartReducer from "./slice/cartSlice";
import authReducer from "./slice/authSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    customer: customerReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
