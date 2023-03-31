import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkEmail, signup, checkNickname, verifyEmail } from "../api/userApi";
import { ISignupTypes } from "../types/userType";
import authValidation from "../features/validation";

function Signup() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Code, setCode] = useState("")
  const [VerificationNumber, setVerificationNumber] = useState("")
  const [Nickname, setNickname] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState<File | ''>('');
  const [profileImageUrl, setProfileImageUrl] = useState("")
  const [emailError, setEmailError] = useState("");
  const [emailFormError, setEmailFormError] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [nicknameFormError, setNicknameFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  

  const onSubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profileImg', profileImage);
    const userInfo: ISignupTypes = {
      email: Email,
      password: Password,
      nickname: Nickname,
    };

    const userInfoString = JSON.stringify(userInfo)
    formData.append('userInfo', new Blob([userInfoString], {type: 'application/json'}));

    const message = await signup(formData)
    console.log(formData)
    console.log(message)

    if (message === "success") {
      alert('가입성공!')
      navigate("/login/dlkfjsaldkfj");
    } else {
      alert("가입에 실패하였습니다. 다시 시도해주세요");
    }
  };

    const onEmailHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentEmail = e.currentTarget.value;
      authValidation(currentEmail, "email")
      ? setEmailFormError("")
      : setEmailFormError("올바르지 않은 이메일 형식입니다");
      const message = await checkEmail(currentEmail)
      if ((message === "success") || !currentEmail) {
        setEmailError("");
      } else {
        setEmailError("이미 가입한 이메일입니다");
      }
      setEmail(currentEmail);
    };

    const onNicknameHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentNickname = e.currentTarget.value;
      authValidation(currentNickname, "nickname")
        ? setNicknameFormError("")
        : setNicknameFormError("2자 이상 8자 이하의 닉네임을 입력해주세요");
      const message = await checkNickname(currentNickname)
      if (message === "success") {
        setNicknameError("");
      } else {
        setNicknameError("중복 닉네임이 존재합니다");
      }
      setNickname(currentNickname);
    };
    
    const onSendHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
      const code = await verifyEmail(Email)
      setCode(code)
      console.log(code)
    }
    
    const onCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentCode = e.currentTarget.value;
      setVerificationNumber(currentCode);
    }

    const onVerificationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      if (VerificationNumber !== '') {
        if (Code === VerificationNumber) {
          setVerificationError("인증이 완료되었습니다")
        } else {
          setVerificationError("인증번호가 일치하지 않습니다")
        }
      } else {
        setVerificationError('')
      }
    }

    const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value);
      authValidation(e.currentTarget.value, "password")
        ? setPasswordError("")
        : setPasswordError("영대/소문자, 숫자, 특수문자가 포함된 8자 이상 20자 이하의 비밀번호를 입력해주세요");
    };

    const onConfirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.currentTarget.value);
      Password === e.currentTarget.value
        ? setConfirmPasswordError("")
        : setConfirmPasswordError("비밀번호가 일치하지 않습니다");
    };

    const onProfileImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files === null) return;

      if (e.target.files[0]) {
        console.log(e.target.files[0])
        setProfileImage(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url)
        setProfileImageUrl(url)
      }
  }


    
  return (
    <div>
      <h1 className="signUpTitle">회원가입</h1>
      <br />
      <div>
        <form onSubmit={onSubmitHandler} className="formItemSignup">
          <div className="emailDiv">
            <span>이메일</span>
            <input
              type="email"
              placeholder="이메일"
              className="signUpInputEmail"
              onBlur={onEmailHandler}
            />
            <div onClick={onSendHandler}>인증번호전송</div>
          </div>
          <span className="emailError">
            {emailError}
            {emailFormError}
          </span>

          <div className="verificationDiv">
            <span>인증번호</span>
            <input
              placeholder="인증번호"
              className="signUpInputVerification"
              onBlur={onCodeHandler}
            />
            <div onClick={onVerificationHandler}>인증번호확인</div>
          </div>
          <span className="emailError">

            {verificationError}
          </span>

          <div className="nicknameDiv">
            <input
              type="text"
              placeholder="닉네임"
              className="signUpInputNickname"
              onBlur={onNicknameHandler}
            />
          </div>
          <span className="nicknameError">
            {nicknameError}
            {nicknameFormError}
          </span>

          <div className="passwordDiv">
            <input
              type="password"
              placeholder="비밀번호"
              className="signUpInputPassword"
              value={Password}
              onChange={onPasswordHandler}
            />
          </div>
          <span className="passwordError">{passwordError}</span>

          <div className="passwordCheckDiv">
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="signUpInputPasswordCheck"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />
          </div>
          <span className="passwordCheckError">{confirmPasswordError}</span>
          <input type={"file"} onChange={onProfileImgHandler}/>
          <img
              // className={classes.hiddenImg}
              // ref=
              src={profileImageUrl}
              alt="profileImg"
            />
          <button
            type="submit"
            className="signupButton"
            disabled={
              Email &&
              Nickname &&
              Password &&
              ConfirmPassword &&
              (verificationError === '인증이 완료되었습니다') &&
              !emailError &&
              !emailFormError &&
              !nicknameError &&
              !nicknameFormError &&
              !passwordError &&
              !confirmPasswordError
                ? false
                : true
            }
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup