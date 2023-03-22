import React from 'react'
import { IUserInfoTypes } from '../../types/apiType';

export const saveUserInfo = (user: IUserInfoTypes) => {
  window.localStorage.setItem('nickname', user.nickname)
  window.localStorage.setItem('profileImg', user.profileImg);
  window.localStorage.setItem('userType', user.userType)
  window.localStorage.setItem('accessToken', user.accessToken)
};
export const getUserInfo = () => {
  return {
    nickname:window.localStorage.getItem('nickname'),
    picture:window.localStorage.getItem('profileImg'),
    level:window.localStorage.getItem('userType'),
    accessToken:window.localStorage.getItem('accessToken'),
  }
};
export const deleteUserInfo = () => {
  window.localStorage.removeItem('nickname')
  window.localStorage.removeItem('profileImg');
  window.localStorage.removeItem('userType')
  window.localStorage.removeItem('accessToken')
};