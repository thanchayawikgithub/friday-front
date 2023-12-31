import { Route, Routes, createBrowserRouter } from "react-router-dom";
import App from "../views/Home";
import ProductDetail from "../views/product/ProductDetail";
import MenuPage from "../views/menu/MenuPage";
import Home from "../views/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  );
}
