import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import customerReducer from "./slice/customerSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
