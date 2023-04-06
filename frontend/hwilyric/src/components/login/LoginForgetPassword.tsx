import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { resetPassword } from "../../api/userApi";
import authValidation from "../../features/validation";
import { IsKnownPassword } from "../../atoms/userAtom";
import {
  LoginBoxDiv,
  LoginButtonBoxDiv,
  LoginEmailDiv,
  LoginForm,
  LoginInputI,
  PWFindTitleBackground,
  PWFindTitleH1,
  PWFindButton,
  LoginDiv,
} from "../../styles/loginStyle";


function LoginForgetPassword() {
  const [Email, setEmail] = useState("");
  const [emailFormError, setEmailFormError] = useState("");
  const setIsKnownPassword = useSetRecoilState(IsKnownPassword);

  const onEmailHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.currentTarget.value;
    authValidation(currentEmail, "email")
      ? setEmailFormError("")
      : setEmailFormError("올바르지 않은 이메일 형식입니다");
    setEmail(e.currentTarget.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { email: Email };
    const message = await resetPassword(body);

    if (message === "success") {
      alert("임시 비밀번호가 이메일로 발송되었습니다");
    } else if (message === "KAKAO") {
      alert("카카오 회원입니다\n카카오 로그인 해주세요");
    } else {
      alert("존재하지 않는 이메일입니다\n회원가입 후 이용해주세요");
    }
    setIsKnownPassword(true);
  };

  const onLoginPageHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsKnownPassword(true);
  };

  return (
    <LoginBoxDiv>
      <PWFindTitleBackground />
      <PWFindTitleH1 className="signUpTitle">비밀번호 초기화</PWFindTitleH1>
      <p>가입한 이메일을 입력해주세요</p>
      <br />
      <LoginForm onSubmit={onSubmitHandler} className="formItemSignup">
        <LoginEmailDiv>
          <LoginInputI
            type="email"
            placeholder="이메일"
            className="signUpInputEmail"
            onChange={onEmailHandler}
          />
          <p>{emailFormError}</p>
        </LoginEmailDiv>
        <LoginButtonBoxDiv>
          <PWFindButton
            type="submit"
            className="signupButton"
          >
            임시 비밀번호 발송
          </PWFindButton>
        </LoginButtonBoxDiv>
        <LoginButtonBoxDiv>
          <LoginDiv onClick={onLoginPageHandler}>로그인 하러 가기</LoginDiv>
        </LoginButtonBoxDiv>
      </LoginForm>
    </LoginBoxDiv>
  );
}

export default LoginForgetPassword;
