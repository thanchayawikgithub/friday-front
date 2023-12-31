import Category from "./Category";

export default interface Product {
  id: number;

  name: string;

  image: string;

  desciption: string;

  price: number;

  category: Category;
}
