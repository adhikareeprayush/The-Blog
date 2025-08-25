import axios from "axios";
import { setupInterceptors } from "./interceptor";

const BASE_URL =
  import.meta.env.VITE_BASE_API_URI || "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

setupInterceptors(axiosInstance);

export default axiosInstance;
