import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from 'recoil';

import authValidation from "../signup/validation";
import userApi from "../../api/userApi";
import { IModifyTypes } from "../../types/apiType";
import userAtom from "../../atoms/userAtom";



function ModifyProfile() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useRecoilState(userAtom.userNicknameAtom)
  const setProfileImg = useSetRecoilState(userAtom.userProfileImgAtom)
  
  const [newNickname, setNewNickname] = useState(nickname);
  const [nicknameError, setNicknameError] = useState("");
  const [nicknameFormError, setNicknameFormError] = useState("");
  const [newProfileImage, setNewProfileImage] = useState<File | ''>('');
  const [newProfileImageUrl, setNewProfileImageUrl] = useState("")


  const onNicknameHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentNickname = e.currentTarget.value;
    authValidation(currentNickname, "nickname")
      ? setNicknameFormError("")
      : setNicknameFormError("2자 이상 8자 이하의 닉네임을 입력해주세요");
    const message = await userApi.checkNickname(currentNickname)
    if (message === "success") {
      setNicknameError("");
    } else {
      setNicknameError("중복 닉네임이 존재합니다");
    }
    if (currentNickname === '') {
      setNewNickname(nickname)
    } else {
      setNewNickname(currentNickname);
    }
  };

  const onProfileImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    if (e.target.files[0]) {
      console.log(e.target.files[0])
      setNewProfileImage(e.target.files[0]);
      const url = URL.createObjectURL(e.target.files[0])
      console.log(url)
      setNewProfileImageUrl(url)
    }
  }

  const onSaveProfileHandler = async(e: React.MouseEvent<HTMLButtonElement>) => {
    const formData = new FormData();
    await formData.append('profileImg', newProfileImage);

    const userInfo: IModifyTypes = {
      nickname: nickname,
    }

    const userInfoString = JSON.stringify(userInfo)
    await formData.append('userInfo', new Blob([userInfoString], {type: 'application/json'}));

    const data = await userApi.modifyProfile(formData)
    console.log(data)

    if (data !== null) {
      setNickname(data.nickname)
      setProfileImg(data.profileImg)
      alert('수정성공!')
      navigate("/login/dlkfjsaldkfj");

    } else {
      alert("수정에 실패하였습니다. 다시 시도해주세요");
    }
  }

  return (
    <div>
      <p>프로필 정보 수정</p>
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
      <input type={"file"} onChange={onProfileImgHandler}/>
      <img
        src={newProfileImageUrl}
        alt="profileImg"
      />
      <button onClick={onSaveProfileHandler}>저장</button>
    </div>
  )
}

export default ModifyProfile