import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import { Route, RouterProvider, Routes, useNavigate } from "react-router-dom";
import router from "./router/Router";
import Home from "./views/Home";
import routes from "./router/Router";
import Router from "./router/Router";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Provider store={store}>
        <NextUIProvider navigate={navigate}>
          <header>
            <Header></Header>
          </header>
          <main className="light">
            <Router></Router>
          </main>
        </NextUIProvider>
      </Provider>
    </>
  );
}
