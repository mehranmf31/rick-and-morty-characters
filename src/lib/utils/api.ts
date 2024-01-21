import axios from "axios";

import { CONNECTION_ERROR } from "@lib/constants/errors";
import { host } from "@lib/utils/config";

export const api = axios.create({ baseURL: host });

api.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    window.alert(CONNECTION_ERROR);
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
