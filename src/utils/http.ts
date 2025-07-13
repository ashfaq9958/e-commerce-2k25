import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const get = (url: string, config = {}) => {
  return axiosInstance.get(url, config);
};

export const post = (url: string, data: any, config = {}) => {
  return axiosInstance.post(url, data, config);
};

export const put = (url: string, data: any, config = {}) => {
  return axiosInstance.put(url, data, config);
};

export const del = (url: string, data: any) => {
  return axiosInstance.delete(url, data);
};
