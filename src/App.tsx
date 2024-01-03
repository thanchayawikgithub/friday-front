import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import { Route, RouterProvider, Routes, useNavigate } from "react-router-dom";
import router from "./router/AppRoutes";
import Home from "./views/Home";
import routes from "./router/AppRoutes";
import Router from "./router/AppRoutes";
import AppRoutes from "./router/AppRoutes";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Provider store={store}>
        <NextUIProvider navigate={navigate}>
          <Header></Header>
          <AppRoutes></AppRoutes>
        </NextUIProvider>
      </Provider>
    </>
  );
}
