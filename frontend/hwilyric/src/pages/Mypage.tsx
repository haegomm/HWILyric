import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import userApi from "../api/userApi";

import userAtom from "../atoms/userAtom";
import { deleteUserInfo } from "../components/login/userInfo";

function Mypage() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
  const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
  const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)

  const onProfileHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate('/profilemodification/sajhdgdjakhsd')
  }
  const onLogoutHandler = async(e: React.MouseEvent<HTMLDivElement>) => {
    const message = await userApi.logout()
    // if (message === 'success') {
      deleteUserInfo()
      setIsLogin(false)
      setNickname('')
      setProfileImg('')
      navigate("/");
    // } else {
    //   alert('로그아웃 실패ㅜ;')
    // }
  }
  return (
      <div>
        <h1>마이페이지 입니다.</h1>
        <div onClick={onProfileHandler}>
          회원정보관리
        </div>
        <div onClick={onLogoutHandler}>
          로그아웃
        </div>
      </div>
  )
}

export default Mypage