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
  nickname: string;
  profileImg: string;
  userType: string;
  accessToken : string;
}