import { ReactElement } from "react";

export interface ISignupTypes {
  email: string;
  password: string;
  nickname: string;
}

export interface ILoginTypes {
  email: string;
  password: string;
}

export interface IModifyTypes {
  nickname: string;
}

export interface IUserInfoTypes {
  userType: string;
  accessToken : string;
}

export interface IPrivateRouteProps {
  component ?: ReactElement;
  authenticated : boolean;
}