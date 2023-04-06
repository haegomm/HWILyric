import React from 'react'
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { logout } from '../../api/userApi';

import { IsLoginAtom, userNicknameAtom, userProfileImgAtom } from '../../atoms/userAtom'
import { deleteUserInfo } from '../../features/userInfo';
import { DropboxDiv, LyricListBodyItemDiv, MyPageProfileDiv, MyPageSpan, MyPageNicknameSpan} from '../../styles/mypageStyle';
import MyPageDropbox from './MyPageDropbox';
import { ProfileImageDiv, ProfileImageImg } from '../../styles/common/ProfileImageStyle';

function MyPageProfile() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(IsLoginAtom)
  const Nickname = useRecoilValue(userNicknameAtom);
  const ProfileImgUrl = useRecoilValue(userProfileImgAtom);

  const onProfileHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigate('/profilemodification')
  }

  const onLogoutHandler = async(e: React.MouseEvent<HTMLSpanElement>) => {
      deleteUserInfo()
      setIsLogin(false)
      navigate("/");
  }


  return (
    <div>
      <MyPageProfileDiv>
        <ProfileImageDiv width='88px' height='88px' borderRadius='70%'>
          <ProfileImageImg src={ProfileImgUrl} />
        </ProfileImageDiv>
        <MyPageNicknameSpan>{Nickname}님</MyPageNicknameSpan>
        <MyPageSpan onClick={onProfileHandler}>
          회원정보관리
        </MyPageSpan>
        <MyPageSpan onClick={onLogoutHandler}>
            로그아웃
        </MyPageSpan>
        <LyricListBodyItemDiv width='25vw' />
      </MyPageProfileDiv>
      <DropboxDiv>
        <MyPageDropbox />
      </DropboxDiv>
    </div>
  )
}

export default MyPageProfile
