import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

import { loginKakao } from "../../api/userApi";
import { saveUserInfo } from "../../features/userInfo";
import { IsLoginAtom, userNicknameAtom, userProfileImgAtom } from "../../atoms/userAtom";


function LoginKakao() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(IsLoginAtom)
  const setNickname = useSetRecoilState(userNicknameAtom)
  const setProfileImg = useSetRecoilState(userProfileImgAtom)

  let params = new URL(document.URL).searchParams;
  let code = params.get("code");

  useEffect(() => {
    async function kakaoLogin() {
      if (!code) return;
    const data = await loginKakao(code)
    if (data !== null) {
      saveUserInfo(data)
      setIsLogin(true)
      setNickname(data.nickname)
      setProfileImg(data.profileImg)
      navigate("/");
    }  
  }
  kakaoLogin();
}, [code])
  return (
    <div>
      
    </div>
  )
}

export default LoginKakao
