import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';

import userAtom from "../atoms/userAtom";

type VerificationNumber = { code: string };

function Signup() {
  const navigate = useNavigate();

  const [Email, setEmail] = useRecoilState(userAtom.userEmailAtom);
  const [Nickname, setNickname] = useRecoilState(userAtom.userNicknameAtom);
  const [Password, setPassword] = useRecoilState(userAtom.userPasswordAtom);
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailFormError, setEmailFormError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [nicknameFormError, setNicknameFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  


  return (
    <div>
      
    </div>
  )
}

export default Signup