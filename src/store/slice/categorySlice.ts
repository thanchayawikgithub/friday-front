import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Category from "../../types/Category";
import categoryService from "../../service/categoryService";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        state.categories = action.payload;
      }
    );
  },
});

export const createCategory = createAsyncThunk(
  "category/create",
  async (name: string) => {
    try {
      const response = await categoryService.create(name);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    try {
      const response = await categoryService.getAll();
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const categorySelector = (state: RootState) => state.category;
export default categorySlice.reducer;
