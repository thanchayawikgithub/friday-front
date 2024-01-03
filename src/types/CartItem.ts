import Product from "./product/Product";

export default interface CartItem {
  product: Product;
  size: string;
  price: number;
}
