import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/product/Product";
import { RootState } from "../store";
import productService from "../../service/productService";
import Category from "../../types/Category";

interface ProductState {
  products: Product[];
  recommendProducts: Product[];
}

const initialState: ProductState = {
  products: [],
  recommendProducts: [
    {
      id: 1,
      name: "Hawaiian",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
    {
      id: 2,
      name: "Pepperoni",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
    {
      id: 3,
      name: "Seafood Cocktail",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
    {
      id: 4,
      name: "Meat Deluxe",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
    {
      id: 5,
      name: "Meat Deluxe",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
    {
      id: 6,
      name: "Meat Deluxe",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
    {
      id: 7,
      name: "Meat Deluxe",
      image: "hawaiien pizza.png",
      desciption: "Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce",
      price: 300,
      category: {
        id: 1,
        name: "pizza",
      },
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  reducers: {},
  initialState,
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const getProducts = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await productService.getProduct();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data: {
    name: string;
    description: string;
    price: number;
    categoryId: number;
    image: File | null;
  }) => {
    try {
      const response = await productService.createProduct(data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const productSelector = (state: RootState) => state.product;
export default productSlice.reducer;
