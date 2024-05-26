import axios from "axios";

const envAPI = import.meta.env.VITE_API;

export const API = axios.create({
  // baseURL: envAPI,
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
