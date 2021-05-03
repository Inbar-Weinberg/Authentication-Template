import axios from "axios";
import { store } from "./store";
import { update } from "../features/loginState/LoginSlice";

const axiosApiInstance = axios.create({ withCredentials: true });
axiosApiInstance.interceptors.response.use(
  (response) => {
    store.dispatch(update());
    return response.data;
  },
  (error) => {
    store.dispatch(update());
    if (error.response) throw error.response.data;
    if (error.request) throw error.request;
    throw error.message;
  }
);

export default axiosApiInstance;
