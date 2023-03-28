import React from 'react'
import { IUserInfoTypes } from '../../types/userType';

export const saveUserInfo = (user: IUserInfoTypes) => {
  window.localStorage.setItem('userType', user.userType)
  window.localStorage.setItem('accessToken', user.accessToken)
};
export const getUserInfo = () => {
  return {
    userType:window.localStorage.getItem('userType'),
    accessToken:window.localStorage.getItem('accessToken'),
  }
};
export const deleteUserInfo = () => {
  window.localStorage.removeItem('userType')
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('recoil-persist')
};