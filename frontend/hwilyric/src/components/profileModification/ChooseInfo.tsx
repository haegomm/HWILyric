import React from "react";
import { useSetRecoilState } from "recoil";
import { selectModification } from "../../atoms/userAtom";

import { getUserInfo } from "../../features/userInfo";

import { useTheme } from "styled-components";
import {
  LoginBoxDiv,
  LoginButtonBoxDiv,
  LoginTitleH1,
  ProfileModificationButton,
  PWFindTitleBackground,
} from "../../styles/loginStyle";

function ChooseInfo() {
  const setSelectModificationPage = useSetRecoilState(selectModification);

  const onModifyingProfileHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectModificationPage("profile");
  };
  const onModifyingPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectModificationPage("checkPassword");
  };

  const theme = useTheme();

  return (
    <LoginBoxDiv>
      <PWFindTitleBackground />
      <LoginTitleH1 className="loginTitle">프로필 수정</LoginTitleH1>
      <LoginButtonBoxDiv>
        <ProfileModificationButton
          onClick={onModifyingPasswordHandler}
          disabled={getUserInfo().userType === "KAKAO" ? true : false}
        >
          비밀번호 수정
        </ProfileModificationButton>
      </LoginButtonBoxDiv>
      <LoginButtonBoxDiv>
        <ProfileModificationButton onClick={onModifyingProfileHandler}>
          프로필정보 수정
        </ProfileModificationButton>
      </LoginButtonBoxDiv>
    </LoginBoxDiv>
  );
}

export default ChooseInfo;
