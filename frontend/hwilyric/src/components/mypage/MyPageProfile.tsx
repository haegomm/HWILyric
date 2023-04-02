import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { logout } from '../../api/userApi';

import { IsLoginAtom, userNicknameAtom, userProfileImgAtom } from '../../atoms/userAtom'
import { lyricCategoryAtom } from '../../atoms/mypageAtom';
import { deleteUserInfo } from '../../features/userInfo';
import { DropboxDiv, LyricListBodyItemDiv, MyPageProfileDiv, MyProfileImage } from '../../styles/mypageStyle';
import MyPageDropbox from './MyPageDropbox';

function MyPageProfile() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(IsLoginAtom)
  const Nickname = useRecoilValue(userNicknameAtom);
  const ProfileImgUrl = useRecoilValue(userProfileImgAtom);

  const onProfileHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigate('/profilemodification')
  }

  const onLogoutHandler = async(e: React.MouseEvent<HTMLSpanElement>) => {
    const message = await logout()
      deleteUserInfo()
      setIsLogin(false)
      navigate("/");
  }


  return (
    <div>
      <MyPageProfileDiv>
        <MyProfileImage src={ProfileImgUrl} />
        <span>{Nickname}님</span>
        <span onClick={onProfileHandler}>
          회원정보관리
        </span>
        <span onClick={onLogoutHandler}>
            로그아웃
        </span>
        <LyricListBodyItemDiv width='25vw' />
      </MyPageProfileDiv>
      <DropboxDiv>
        <MyPageDropbox />
      </DropboxDiv>
    </div>
  )
}

export default MyPageProfile
