import { toastError } from "@/components/kit/toast";
import BASE_URL from "@/config/apiConfig";
import { useAuthStore } from "@/store/useAuthStore";

import axios from "axios";
const useAxiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': 'fa',
    'Content-Type': 'application/json',
  },
});
useAxiosWithToken.interceptors.request.use(
  (config) => {
    //todo
    const token = useAuthStore.getState().token;
    config.headers["Authorization"] = token;
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }

    return config;
  });
useAxiosWithToken.interceptors.response.use(
  function (response) {
    return response;

  },
  function (error) {
    const logout = useAuthStore.getState().logout;
    if (error?.response?.status === 401) {
      window.location.href = "/";
      logout()
    }
    if (error?.response?.status === 500) {
      toastError(error.response.data.message)
    }
    return Promise.reject(error);
  },
);
export default useAxiosWithToken;
