import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { login } from "../../api/userApi";
import { ILoginTypes } from "../../types/userType";
import { saveUserInfo } from "../../features/userInfo";
import {
  IsLoginAtom,
  userNicknameAtom,
  userProfileImgAtom,
  IsKnownPassword,
} from "../../atoms/userAtom";
import socailLoginButton from "../../assets/socialLogin/socialLoginButton";

import {
  LoginBoxDiv,
  LoginTitleH1,
  LoginForm,
  LoginEmailDiv,
  LoginPasswordDiv,
  LoginForgotPWDiv,
  LoginButtonBoxDiv,
  LoginButton,
  LoginNoIdDiv,
  LoginSignUpBoxDiv,
  LoginSignUpDiv,
  LoginKakaoA,
  LoginInputI,
  LoginTitleBackground,
  LoginKakaoImg,
  LoginSignUpWrapper,
  LoginPasswordBox,
} from "../../styles/loginStyle";

import { useTheme } from "styled-components";

function LoginInput() {
  const navigate = useNavigate();

  const KAKAO_API = process.env.REACT_APP_KAKAO_API;
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_REQUEST = `${KAKAO_API}/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const setIsLogin = useSetRecoilState(IsLoginAtom);
  const setNickname = useSetRecoilState(userNicknameAtom);
  const setProfileImg = useSetRecoilState(userProfileImgAtom);
  const setIsKnownPassword = useSetRecoilState(IsKnownPassword);

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onLoginPageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsKnownPassword(false);
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body: ILoginTypes = {
      email: Email,
      password: Password,
    };

    const data = await login(body);
    if (data !== null) {
      saveUserInfo(data);
      setIsLogin(true);
      setNickname(data.nickname);
      setProfileImg(data.profileImg);
      navigate("/");
    } else {
      alert("로그인 실패ㅜ;");
    }
  };

  const theme = useTheme();

  return (
    <LoginBoxDiv>
      <LoginTitleBackground theme={theme} />
      <LoginTitleH1 className="loginTitle">로그인</LoginTitleH1>
      <LoginForm onSubmit={onSubmitHandler}>
        <LoginEmailDiv>
          <LoginInputI
            type="email"
            placeholder="이메일"
            className="inputEmail"
            onChange={onEmailHandler}
          />
        </LoginEmailDiv>
        <LoginPasswordBox>
          <LoginPasswordDiv>
            <LoginInputI
              type="password"
              placeholder="비밀번호"
              className="inputPassword"
              onChange={onPasswordHandler}
            />
          </LoginPasswordDiv>
          <LoginForgotPWDiv onClick={onLoginPageHandler}>
            비밀번호를 잊으셨나요?
          </LoginForgotPWDiv>
        </LoginPasswordBox>
        <LoginButtonBoxDiv>
          <LoginButton type="submit">로그인</LoginButton>
        </LoginButtonBoxDiv>
      </LoginForm>
      <LoginSignUpWrapper>
        <LoginNoIdDiv>아직 아이디가 없으신가요?</LoginNoIdDiv>
        <LoginSignUpBoxDiv>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#636161" }}
          >
            <LoginSignUpDiv>가입하기</LoginSignUpDiv>
          </Link>
          <LoginKakaoA href={KAKAO_REQUEST}>
            <LoginKakaoImg
              src={socailLoginButton}
              className="kakaoSignUpButton"
              alt=""
            />
          </LoginKakaoA>
        </LoginSignUpBoxDiv>
      </LoginSignUpWrapper>
    </LoginBoxDiv>
  );
}

export default LoginInput;
