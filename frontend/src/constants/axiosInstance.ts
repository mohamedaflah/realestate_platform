import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: "https://admin.realestate1.helloanas.com/api",
  withCredentials: true,
});
// baseURL: "https://admin.realestate1.helloanas.com/api",
