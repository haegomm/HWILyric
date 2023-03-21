import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';

import userAtom from "../atoms/userAtom";
import userApi from "../api/userApi";
import { SignupTypes } from "../types/apiType";

function Signup() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Code, setCode] = useState("")
  const [VerificationNumber, setVerificationNumber] = useState("")
  const [Nickname, setNickname] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [emailFormError, setEmailFormError] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [nicknameFormError, setNicknameFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   let body = {
  //     userType: "NORMAL",
  //     email: Email,
  //     password: Password,
  //     nickname: Nickname,
  //     picture: profileImageUrl,
  //   };

    // userApi.signup(body:SignupTypes).then(data:Response) {

    // }

    // dispatch(authAction.signup(body)).then((response) => {
    //   if (response.payload.message === "success") {
    //     alert("환영합니다~~~");
    //     navigate("/login");
    //   } else {
    //     alert("가입에 실패하였습니다. 다시 시도해주세요");
    //   }
    // });
  // };

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentEmail = e.currentTarget.value;
      setEmail(currentEmail);
      // authValidation(currentEmail, "email")
        // ? setEmailFormError("")
        // : setEmailFormError("올바르지 않은 이메일 형식입니다");
      // dispatch(authAction.checkEmail(currentEmail)).then((response) => {
      //   if (response.payload.message === "success" || currentEmail === "") {
      //     setEmailError("");
      //   } else {
      //     setEmailError("이미 가입한 이메일입니다");
      //   }
      // });
      const message = userApi.checkEmail(currentEmail)
      console.log('저는', message)
      console.log('이메일 찍혓다')
    };

    const onNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentNickname = e.currentTarget.value;
      setNickname(currentNickname);
      // authValidation(currentNickname, "nickname")
      //   ? setNicknameFormError("")
      //   : setNicknameFormError("2자 이상 8자 이하의 닉네임을 입력해주세요");
      // dispatch(authAction.checkNickname(currentNickname)).then((response) => {
      //   if (response.payload.message === "success" || currentNickname === "") {
      //     setNicknameError("");
      //   } else {
      //     setNicknameError("중복 닉네임이 존재합니다");
      //   }
      // });
      const message = userApi.checkNickname(currentNickname)
      console.log('저는', message)
      console.log('닉네임 찍혓다')
    };
    
    const onSendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      const code = userApi.verifyEmail(Email)
      console.log('저는', code)
      console.log('코드 찍었다')
      // setCode(code)
    }
    
    const onCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentCode = e.currentTarget.value;
      setVerificationNumber(currentCode);
    }

    const onVerificationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      if (Code === VerificationNumber) {
        setVerificationError("인증이 완료되었습니다")
      } else {
        setVerificationError("인증번호가 일치하지 않습니다")
      }
      console.log('인증해보았다')
      // setCode(code)
    }
    
  return (
    <div>
      <h1 className="signUpTitle">회원가입</h1>
      <br />
      <div>
        <form className="formItemSignup">
        {/* <form onSubmit={onSubmitHandler} className="formItemSignup"> */}
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

          {/* <div className="passwordDiv">
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
          </div> */}
          <span className="passwordCheckError">{confirmPasswordError}</span>
          <button
            type="submit"
            className="signupButton"
            disabled={
              Email &&
              Nickname &&
              Password &&
              ConfirmPassword &&
              profileImageUrl &&
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