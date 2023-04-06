import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { checkPassword } from "../../api/userApi";
import { selectModification } from "../../atoms/userAtom";

import {
  LoginBoxDiv,
  LoginButtonBoxDiv,
  LoginForgotPWDiv,
  LoginInputI,
  LoginNoIdDiv,
  LoginPasswordBox,
  LoginPasswordDiv,
  LoginTitleBackground,
  LoginTitleH1,
  ProfileModificationButton,
} from "../../styles/loginStyle";

import { useTheme } from "styled-components";

function CheckPassword() {
  const setSelectModificationPage = useSetRecoilState(selectModification);
  const [Password, setPassword] = useState("");

  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onCheckingPasswordHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const message = await checkPassword({ password: Password });
    if (message === "success") {
      setSelectModificationPage("modifyPassword");
    } else {
      console.log(message);
      alert("비밀번호가 일치하지 않습니다. 다시 시도해주세요.");
    }
  };

  const theme = useTheme();

  return (
    <LoginBoxDiv>
      <LoginNoIdDiv>비밀번호를 다시 한 번 입력해주세요</LoginNoIdDiv>
      <LoginPasswordBox>
        <LoginPasswordDiv>
          <LoginInputI
            type="password"
            placeholder="비밀번호"
            className="inputPassword"
            onChange={onPasswordHandler}
          />
        </LoginPasswordDiv>
      </LoginPasswordBox>
      <LoginButtonBoxDiv>
        <ProfileModificationButton onClick={onCheckingPasswordHandler}>
          확인
        </ProfileModificationButton>
      </LoginButtonBoxDiv>
    </LoginBoxDiv>
  );
}

export default CheckPassword;
