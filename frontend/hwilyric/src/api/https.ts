import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import baseAxios from "axios";

import { deleteUserInfo, getUserInfo } from "../components/login/userInfo";
import userApi from "./userApi";
import userAtom from "../atoms/userAtom";

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
        const navigate = useNavigate();

        const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
        const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
        const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)

        alert("로그인이 필요합니다.");
       (async () => {
          const message = await userApi.logout()
          if (message === 'success') {
            deleteUserInfo()
            setIsLogin(false)
            setNickname('')
            setProfileImg('')
            navigate("/login/dlkfjsaldkfj");
          } else {
            alert('로그아웃 실패ㅜ;')
          }
        })()
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
        const navigate = useNavigate();

        const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
        const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
        const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)

        alert("로그인이 필요합니다.");
        (async () => {
          const message = await userApi.logout()
          if (message === 'success') {
            deleteUserInfo()
            setIsLogin(false)
            setNickname('')
            setProfileImg('')
            navigate("/login/dlkfjsaldkfj");
          } else {
            alert('로그아웃 실패ㅜ;')
          }
        })()
          return new Promise(() => {});
      } else{
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);