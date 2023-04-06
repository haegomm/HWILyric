import { useSetRecoilState } from "recoil";

import { deleteUserInfo } from "../features/userInfo";
import { IsLoginAtom, userNicknameAtom, userProfileImgAtom } from "../atoms/userAtom";

function ForcedLogout() {

  const setIsLogin = useSetRecoilState(IsLoginAtom)
  const setNickname = useSetRecoilState(userNicknameAtom)
  const setProfileImg = useSetRecoilState(userProfileImgAtom)

  deleteUserInfo()
  setIsLogin(false)
  setNickname('')
  setProfileImg('')
  return '오예'
}

export default ForcedLogout;