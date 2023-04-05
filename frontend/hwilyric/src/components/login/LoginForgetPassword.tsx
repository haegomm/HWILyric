import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { resetPassword } from "../../api/userApi";
import authValidation from "../../features/validation";
import { IsKnownPassword } from "../../atoms/userAtom";
import {
  LoginBoxDiv,
  PWFindTitleBackground,
  PWFindTitleH1,
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
      console.log("일반회원");
    } else if (message === "KAKAO") {
      console.log("카카오회원");
    } else {
      console.log("가입을 안햇어용");
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
      <br />
      <div>
        <form onSubmit={onSubmitHandler} className="formItemSignup">
          <div className="emailDiv">
            <p>가입한 이메일을 입력해주세요</p>
            <input
              type="email"
              placeholder="이메일"
              className="signUpInputEmail"
              onBlur={onEmailHandler}
            />
            <p>{emailFormError}</p>
          </div>
          <button
            type="submit"
            className="signupButton"
            // disabled={
            //   Email &&
            //   Nickname &&
            //   Password &&
            //   ConfirmPassword &&
            //   profileImage &&
            //   !emailError &&
            //   !emailFormError &&
            //   !nicknameError &&
            //   !nicknameFormError &&
            //   !passwordError &&
            //   !confirmPasswordError
            //     ? false
            //     : true
            // }
          >
            임시 비밀번호 발송
          </button>
        </form>
        <div onClick={onLoginPageHandler}>로그인 하러 갈랭</div>
      </div>
    </LoginBoxDiv>
  );
}

export default LoginForgetPassword;
