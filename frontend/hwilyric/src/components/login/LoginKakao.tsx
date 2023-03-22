import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

import userApi from "../../api/userApi";
import { saveUserInfo } from "./userInfo";
import userAtom from "../../atoms/userAtom";


function LoginKakao() {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(userAtom.IsLoginAtom)
  const setNickname = useSetRecoilState(userAtom.userNicknameAtom)
  const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)

  let params = new URL(document.URL).searchParams;
  let code = params.get("code");
  // console.log(code)

  useEffect(() => {
    async function kakaoLogin() {
      if (!code) return;
    const data = await userApi.loginKakao(code)
    if (data !== null) {
      console.log('카카오 됏당')
      saveUserInfo(data)
      setIsLogin(true)
      setNickname(data.nickname)
      setProfileImg(data.profileImg)
      navigate("/zslkdrj");
    } else {
      console.log('로그인 실패ㅜ;')
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
