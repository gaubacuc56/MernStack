import axios from "axios";
import { api_deploy } from "./config";

const axiosInstance = axios.create({
  baseURL: api_deploy,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject({
      code: error.code,
      name: error.name,
      message: error.message,
      error: error.response.data,
    });
  }
);

export default axiosInstance;
