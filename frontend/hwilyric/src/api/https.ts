import baseAxios from "axios";

import { deleteUserInfo, getUserInfo } from "../components/login/userInfo";
import userApi from "./userApi";
import userAtom from "../atoms/userAtom";
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
        console.log('여기까진 왔다')
        ForcedLogout()
        alert("로그인이 필요합니다.");
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
        console.log('여기까진 왔다')
        const logout = ForcedLogout()
        console.log(logout)
        alert("로그인이 필요합니다.");
          return new Promise(() => {});
      } else{
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);