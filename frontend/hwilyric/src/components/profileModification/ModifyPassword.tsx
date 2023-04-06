import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { modifyPassword } from "../../api/userApi";
import authValidation from "../../features/validation";

import {
  LoginBoxDiv,
  LoginButtonBoxDiv,
  LoginTitleBackground,
  LoginTitleH1,
  ProfileModificationButton,
} from "../../styles/loginStyle";

import { useTheme } from "styled-components";
import {
  SignupEmailDiv,
  SignupEmailErrorSpan,
  SignupEmailInput,
  SignupInnerBoxDiv,
} from "../../styles/signUpStyle";

function ModifyPassword() {
  const navigate = useNavigate();

  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    authValidation(e.currentTarget.value, "password")
      ? setPasswordError("")
      : setPasswordError("8자 이상 20자 이하의 비밀번호를 입력해주세요");
  };

  const onConfirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
    Password === e.currentTarget.value
      ? setConfirmPasswordError("비밀번호가 일치합니다")
      : setConfirmPasswordError("비밀번호가 일치하지 않습니다");
  };

  const onSavePasswordHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = { password: Password };
    const message = await modifyPassword(body);

    if (message === "success") {
      alert("비밀번호 변경이 완료되었습니다");
      navigate("/mypage");
    } else {
      alert("비밀번호 변경이 실패했습니다. 다시 시도해주세요");
    }
  };

  const theme = useTheme();

  return (
    <LoginBoxDiv>
      <LoginTitleBackground theme={theme} />
      <LoginTitleH1 className="loginTitle">비밀번호 수정</LoginTitleH1>
      <SignupInnerBoxDiv>
        <SignupEmailDiv className="passwordDiv">
          <SignupEmailInput
            type="password"
            placeholder="비밀번호"
            className="signUpInputPassword"
            value={Password}
            onChange={onPasswordHandler}
          />
        </SignupEmailDiv>
        <SignupEmailErrorSpan className="passwordError">{passwordError}</SignupEmailErrorSpan>
      </SignupInnerBoxDiv>
      <SignupInnerBoxDiv>
        <SignupEmailDiv className="passwordCheckDiv">
          <SignupEmailInput
            type="password"
            placeholder="비밀번호 확인"
            className="signUpInputPasswordCheck"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </SignupEmailDiv>
        <SignupEmailErrorSpan className="passwordCheckError">
          {confirmPasswordError}
        </SignupEmailErrorSpan>
      </SignupInnerBoxDiv>
      <LoginButtonBoxDiv>
        <ProfileModificationButton
          onClick={onSavePasswordHandler}
          disabled={confirmPasswordError === "비밀번호가 일치합니다" ? false : true}
        >
          저장
        </ProfileModificationButton>
      </LoginButtonBoxDiv>
    </LoginBoxDiv>
  );
}

export default ModifyPassword;
