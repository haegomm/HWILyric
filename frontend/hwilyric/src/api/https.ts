import baseAxios from "axios";

import { deleteUserInfo, getUserInfo } from "../features/userInfo";
import ForcedLogout from "./logout";

export const axios = baseAxios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getUserInfo().accessToken}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        deleteUserInfo()
        alert("로그인이 필요합니다.");
        console.log('강종')
        window.location.replace("/login");
        // ForcedLogout()
        return new Promise(() => {});
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const fileAxios = baseAxios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

fileAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getUserInfo().accessToken}`;
  return config;
});

fileAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        deleteUserInfo()
        alert("로그인이 필요합니다.");
        console.log('강종')
        window.location.replace("/login");
        // ForcedLogout()
        return new Promise(() => {});
      } else{
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);