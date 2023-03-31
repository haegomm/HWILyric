import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { logout } from '../../api/userApi';

import { IsLoginAtom, userNicknameAtom, userProfileImgAtom } from '../../atoms/userAtom'
import { lyricCategoryAtom } from '../../atoms/mypageAtom';
import { deleteUserInfo } from '../../features/userInfo';
import { MyPageProfileDiv, MyProfileImage } from '../../styles/mypageStyle';
import MyPageDropbox from './MyPageDropbox';

function MyPageProfile() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(IsLoginAtom)
  const Nickname = useRecoilValue(userNicknameAtom);
  const ProfileImgUrl = useRecoilValue(userProfileImgAtom);
  const setCategory = useSetRecoilState(lyricCategoryAtom)

  const onProfileHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate('/profilemodification/sajhdgdjakhsd')
  }

  const onLogoutHandler = async(e: React.MouseEvent<HTMLDivElement>) => {
    const message = await logout()
      deleteUserInfo()
      setIsLogin(false)
      navigate("/");
  }


  return (
    <MyPageProfileDiv>
      <MyProfileImage src={ProfileImgUrl} />
      <span>{Nickname}님</span>
      <div onClick={onProfileHandler}>
        회원정보관리
      </div>
      <div onClick={onLogoutHandler}>
          로그아웃
      </div>
      <MyPageDropbox />
    </MyPageProfileDiv>
  )
}

export default MyPageProfile
