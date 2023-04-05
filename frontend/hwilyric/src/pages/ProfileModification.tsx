import { useRecoilValue } from "recoil"
import { selectModification } from "../atoms/userAtom"
import CheckPassword from "../components/profileModification/CheckPassword"

import ChooseInfo from "../components/profileModification/ChooseInfo"
import ModifyPassword from "../components/profileModification/ModifyPassword"
import ModifyProfile from "../components/profileModification/ModifyProfile"
import { LoginBoxDiv, LoginButton, LoginButtonBoxDiv, LoginTitleBackground, LoginTitleH1, ProfileModificationButton } from "../styles/loginStyle"

import { useTheme } from "styled-components";


function ProfileModification() {
  const selectModificationPage = useRecoilValue(selectModification)

  const theme = useTheme();
  
  return (
    <LoginBoxDiv>
      <LoginTitleBackground theme={theme} />
      <LoginTitleH1 className="loginTitle">프로필 수정</LoginTitleH1>
      <LoginButtonBoxDiv>
        <ProfileModificationButton>비밀번호 수정</ProfileModificationButton>
      </LoginButtonBoxDiv>
      <LoginButtonBoxDiv>
        <ProfileModificationButton>프로필정보 수정</ProfileModificationButton>
      </LoginButtonBoxDiv>
    </LoginBoxDiv>
      // <div>
      //   <h1>회원정보 수정 페이지 입니다.</h1>
      //   {selectModificationPage === 'select' && <ChooseInfo />}
      //   {selectModificationPage === 'profile' && <ModifyProfile />}
      //   {selectModificationPage === 'checkPassword' && <CheckPassword />}
      //   {selectModificationPage === 'modifyPassword' && <ModifyPassword />}
      // </div>
  )
}

export default ProfileModification