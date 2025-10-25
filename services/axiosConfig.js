// utils/axiosConfig.js
// import { API_BASE_URL } from "@env";
import axios from "axios";

// Valida se a variável de ambiente baseURL está definida
// if (!API_BASE_URL) {
//   throw new Error("API_BASE_URL is not defined in the environment variables");
// }

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
console.log("API_BASE_URL:", API_BASE_URL); // Agora vai logar certinho!

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;
