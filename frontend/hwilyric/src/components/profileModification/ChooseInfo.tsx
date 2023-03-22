import React from 'react'
import { getUserInfo } from '../login/userInfo'
function ChooseInfo() {
  return (
    <div>
      <button>프로필 정보 수정</button>
      <br></br>
      <button
      disabled={getUserInfo().userType === 'KAKAO' ? true : false}>비밀번호 수정</button>
    </div>
  )
}

export default ChooseInfo