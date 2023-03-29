import React from 'react'
import { useSetRecoilState } from 'recoil';
import { selectModification } from '../../atoms/userAtom';

import { getUserInfo } from '../../features/userInfo'
function ChooseInfo() {
  const setSelectModificationPage = useSetRecoilState(selectModification)

  const onModifyingProfileHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectModificationPage('profile')
  }
  const onModifyingPasswordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectModificationPage('checkPassword')
  }



  return (
    <div>
      <button onClick={onModifyingProfileHandler}>프로필 정보 수정</button>
      <br></br>
      <button
      onClick={onModifyingPasswordHandler}
      disabled={getUserInfo().userType === 'KAKAO' ? true : false}>비밀번호 수정</button>
    </div>
  )
}

export default ChooseInfo