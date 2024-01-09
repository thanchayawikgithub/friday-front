import {
  Route,
  Routes,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
import App from "../views/Home";
import ProductDetail from "../views/product/ProductDetail";
import MenuPage from "../views/menu/MenuPage";
import Home from "../views/Home";
import CardPage from "../views/cart/CartPage";
import ManageProduct from "../views/manage/ManageProduct";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CardPage />} />
        <Route path="/manage/products" element={<ManageProduct />} />
      </Routes>
    </>
  );
}
