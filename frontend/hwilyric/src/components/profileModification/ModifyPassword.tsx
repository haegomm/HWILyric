import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { modifyPassword } from "../../api/userApi";
import authValidation from "../../features/validation";

function ModifyPassword() {
  const navigate = useNavigate();

  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    authValidation(e.currentTarget.value, "password")
      ? setPasswordError("")
      : setPasswordError("8자 이상 20자 이하의 비밀번호를 입력해주세요");
  };

  const onConfirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
    Password === e.currentTarget.value
      ? setConfirmPasswordError("비밀번호가 일치합니다")
      : setConfirmPasswordError("비밀번호가 일치하지 않습니다");
  };

  const onSavePasswordHandler = async(e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {password: Password}
    const message = await modifyPassword(body)

    if (message === 'success') {
      alert('비밀번호 변경이 완료되었습니다')
      navigate("/mypage/dsajhfawjehdg");
    } else {
      alert('비밀번호 변경이 실패했습니다. 다시 시도해주세요')
    }
  }


  return (
    <div>
      <p>비밀번호 수정</p>
      <div>
        <div className="passwordDiv">
          <span>비밀번호</span>
          <input
            type="password"
            className="signUpInputPassword"
            value={Password}
            onChange={onPasswordHandler}
          />
        </div>
        <span className="passwordError">{passwordError}</span>

        <div className="passwordCheckDiv">
          <span>비밀번호 확인</span>
          <input
            type="password"
            className="signUpInputPasswordCheck"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </div>
        <span className="passwordCheckError">{confirmPasswordError}</span>
      </div>
      <button
      onClick={onSavePasswordHandler}
      disabled={
        (confirmPasswordError ==='비밀번호가 일치합니다') ? false : true
      }>저장</button>
    </div>
  )
}

export default ModifyPassword