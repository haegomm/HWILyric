import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userApi from "../api/userApi";

import { IsLoginAtom, userNicknameAtom, userProfileImgAtom } from "../atoms/userAtom";
import { deleteUserInfo } from "../features/userInfo";
import { MyProfileImage } from "../styles/mypageStyle";

function Mypage() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(IsLoginAtom)
  const Nickname = useRecoilValue(userNicknameAtom)
  const ProfileImg = useRecoilValue(userProfileImgAtom)

  const onProfileHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate('/profilemodification/sajhdgdjakhsd')
  }
  const onLogoutHandler = async(e: React.MouseEvent<HTMLDivElement>) => {
    const message = await userApi.logout()
      deleteUserInfo()
      setIsLogin(false)
      // setNickname('')
      // setProfileImg('')
      navigate("/");
  }
  return (
      <div>
        {/* <MyProfileImage src={}/> */}
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