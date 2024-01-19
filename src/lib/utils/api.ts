import axios from "axios";
import { host } from "./config";

export const api = axios.create({ baseURL: host });

api.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    window.alert("Connection Error!");
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  async function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error.response.data);
  },
);

export const get = api.get;
export const post = api.post;
export const put = api.put;
export const patch = api.patch;
export const remove = api.delete;
