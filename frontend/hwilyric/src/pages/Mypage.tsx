import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

import userAtom from "../atoms/userAtom";
import { deleteUserInfo } from "../components/login/userInfo";

function Mypage() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
  const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
  const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)

  const onLogoutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    deleteUserInfo()
    setIsLogin(false)
    setNickname('')
    setProfileImg('')
    navigate("/");
  }
  return (
      <div>
        <h1>마이페이지 입니다.</h1>
        <div onClick={onLogoutHandler}>
          로그아웃
        </div>
      </div>
  )
}

export default Mypage