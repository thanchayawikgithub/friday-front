import Product from "./product/Product";

export default interface Category {
  id: number;

  name: string;

  products?: Product[];
}
