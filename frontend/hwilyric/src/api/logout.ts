import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { deleteUserInfo } from "../components/login/userInfo";
import userAtom from "../atoms/userAtom";

function ForcedLogout() {
  // const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
  const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
  const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)

  deleteUserInfo()
  setIsLogin(false)
  setNickname('')
  setProfileImg('')
  // navigate("/login/dlkfjsaldkfj"); 
  return '오예'
}

export default ForcedLogout;