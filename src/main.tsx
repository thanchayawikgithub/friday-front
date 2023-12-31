import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
