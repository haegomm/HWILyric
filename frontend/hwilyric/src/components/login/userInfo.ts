import React from 'react'
import { IUserInfoTypes } from '../../types/apiType';

export const saveUserInfo = (user: IUserInfoTypes) => {
  window.localStorage.setItem('userType', user.userType)
  window.localStorage.setItem('accessToken', user.accessToken)
};
export const getUserInfo = () => {
  return {
    level:window.localStorage.getItem('userType'),
    accessToken:window.localStorage.getItem('accessToken'),
  }
};
export const deleteUserInfo = () => {
  window.localStorage.removeItem('userType')
  window.localStorage.removeItem('accessToken')
};