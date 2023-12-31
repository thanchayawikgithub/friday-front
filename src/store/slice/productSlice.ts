import { createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";

interface ProductState {
  recommendProducts: Product[];
}

const initialState: ProductState = {
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
  ],
};

const productSlice = createSlice({
  name: "product",
  reducers: {},
  initialState,
});

export default productSlice.reducer;
