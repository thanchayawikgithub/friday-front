import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your actual base URL
});

axios.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      const nevigate = useNavigate();
      nevigate("/login");
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
