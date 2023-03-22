import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

import userApi from "../../api/userApi";
import { ILoginTypes } from "../../types/apiType";
import { saveUserInfo } from "./userInfo";
import userAtom from "../../atoms/userAtom";

function LoginInput() {
  const navigate = useNavigate();

  const KAKAO_API = process.env.REACT_APP_KAKAO_API;
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_REQUEST = `${KAKAO_API}/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
  const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
  const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)
  const setIsKnownPassword = useSetRecoilState(userAtom.IsKnownPassword)

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onLoginPageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsKnownPassword(false)
  }
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body: ILoginTypes = {
      email: Email,
      password: Password,
    };

    const data = await userApi.login(body)
    if (data !== null) {
      saveUserInfo(data)
      setIsLogin(true)
      setNickname(data.nickname)
      setProfileImg(data.profileImg)
      navigate("/zslkdrj");
    } else {
      alert('로그인 실패ㅜ;')
    }
  };


  return (
    <div>
      <h1 className="loginTitle">로그인</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="formItem">
          <input
            type="email"
            placeholder="이메일"
            className="inputEmail"
            onChange={onEmailHandler}
          />
        </div>
        <div className="formItem">
          <input
            type="password"
            placeholder="비밀번호"
            className="inputPassword"
            onChange={onPasswordHandler}
          />
        </div>
        <div onClick={onLoginPageHandler}>
          비밀번호를 잊으셨나요?
        </div>
        <div>
          <button type="submit" className="loginButton">
            로그인하기
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginInput
