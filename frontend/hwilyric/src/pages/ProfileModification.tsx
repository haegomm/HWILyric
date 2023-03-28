import { useRecoilValue } from "recoil"
import userAtom from "../atoms/userAtom"
import CheckPassword from "../components/profileModification/CheckPassword"

import ChooseInfo from "../components/profileModification/ChooseInfo"
import ModifyPassword from "../components/profileModification/ModifyPassword"
import ModifyProfile from "../components/profileModification/ModifyProfile"


function ProfileModification() {
  const selectModificationPage = useRecoilValue(userAtom.selectModificationPage)

  
  return (
      <div>
        <h1>회원정보 수정 페이지 입니다.</h1>
        {selectModificationPage === 'select' && <ChooseInfo />}
        {selectModificationPage === 'profile' && <ModifyProfile />}
        {selectModificationPage === 'checkPassword' && <CheckPassword />}
        {selectModificationPage === 'modifyPassword' && <ModifyPassword />}
      </div>
  )
}

export default ProfileModification