import { image } from "@nextui-org/react";
import Category from "../types/Category";
import axios from "./axios";
const getProduct = () => {
  return axios.get("/product");
};

const createProduct = (data: {
  name: string;
  description: string;
  price: number;
  categoryId: number;
  image: File | null;
}) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price.toString());
  formData.append("categoryId", data.categoryId.toString());
  if (data.image) {
    formData.append("image", data.image);
  }

  return axios.post("/product", formData);
};
export default { getProduct, createProduct };
