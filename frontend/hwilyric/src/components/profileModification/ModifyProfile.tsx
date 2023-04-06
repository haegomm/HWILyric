import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import authValidation from "../../features/validation";
import { checkNickname, modifyProfile } from "../../api/userApi";
import { IModifyTypes } from "../../types/userType";
import { userNicknameAtom, userProfileImgAtom } from "../../atoms/userAtom";
import {
  ModifyEmailDiv,
  ModifyEmailInput,
  ModifyInput,
  ModifyLabel,
  ModifyProfileInput,
  ModifyProfileInputBox,
  ModifyProfileInputLeft,
  ModifyUploadDiv,
  ProfileModificationOuterBoxDiv,
  SignupContentBoxDiv,
  SignupEmailDiv,
  SignupEmailErrorSpan,
  SignupEmailInput,
  SignupInnerBoxDiv,
  SignupOuterBoxDiv,
  SignupProfileImg,
  SignupProfileInput,
  SignupProfileInputBox,
  SignupProfileInputLeft,
  SignupProfileTitle,
  SignupSubmitButton,
  SignupTitleBackground,
  SignupTitleH1,
} from "../../styles/signUpStyle";
import { useTheme } from "styled-components";
import {
  ProfileModificationButton,
  ProfileModificationTitleBackground,
} from "../../styles/loginStyle";

function ModifyProfile() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useRecoilState(userNicknameAtom);
  const setProfileImg = useSetRecoilState(userProfileImgAtom);

  const [newNickname, setNewNickname] = useState(nickname);
  const [nicknameError, setNicknameError] = useState("");
  const [nicknameFormError, setNicknameFormError] = useState("");
  const [newProfileImage, setNewProfileImage] = useState<File | "">("");
  const [newProfileImageUrl, setNewProfileImageUrl] = useState("");

  const onNicknameHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentNickname = e.currentTarget.value;
    authValidation(currentNickname, "nickname")
      ? setNicknameFormError("")
      : setNicknameFormError("2자 이상 8자 이하의 닉네임을 입력해주세요");
    const message = await checkNickname(currentNickname);
    if (message === "success") {
      setNicknameError("");
    } else {
      setNicknameError("중복 닉네임이 존재합니다");
    }
    if (currentNickname === "") {
      setNewNickname(nickname);
    } else {
      setNewNickname(currentNickname);
    }
  };

  const onProfileImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setNewProfileImage(e.target.files[0]);
      const url = URL.createObjectURL(e.target.files[0]);
      console.log(url);
      setNewProfileImageUrl(url);
    }
  };

  const onSaveProfileHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const formData = new FormData();
    formData.append("profileImg", newProfileImage);

    const userInfo: IModifyTypes = {
      nickname: newNickname,
    };

    const userInfoString = JSON.stringify(userInfo);
    formData.append("userInfo", new Blob([userInfoString], { type: "application/json" }));

    const data = await modifyProfile(formData);
    console.log(data);

    if (data !== null) {
      setNickname(data.nickname);
      setProfileImg(data.profileImg);
      alert("수정성공!");
      navigate("/mypage");
    } else {
      alert("수정에 실패하였습니다. 다시 시도해주세요");
    }
  };

  const theme = useTheme();

  return (
    <ProfileModificationOuterBoxDiv>
      <ProfileModificationTitleBackground theme={theme} />
      <SignupTitleH1>프로필 수정</SignupTitleH1>
      <SignupContentBoxDiv>
        <SignupInnerBoxDiv>
          <ModifyEmailDiv className="nicknameDiv">
            <ModifyEmailInput
              type="text"
              placeholder="닉네임"
              className="signUpInputNickname"
              onBlur={onNicknameHandler}
            />
          </ModifyEmailDiv>

          <SignupEmailErrorSpan className="nicknameError">
            {nicknameError}
            {nicknameFormError}
          </SignupEmailErrorSpan>

          <ModifyEmailDiv>
            <ModifyUploadDiv>
              <ModifyLabel className="ModifyLabel" htmlFor="profileImg">
                업로드
              </ModifyLabel>
            </ModifyUploadDiv>

            <SignupProfileTitle>프로필 사진</SignupProfileTitle>

            <ModifyInput
              className="ModifyInput"
              id="profileImg"
              type={"file"}
              onChange={onProfileImgHandler}
              accept="image/gif, image/jpeg, image/png"
            />
          </ModifyEmailDiv>
        </SignupInnerBoxDiv>

        <ModifyProfileInputBox>
          <SignupProfileImg src={newProfileImageUrl} alt="profileImg" />
        </ModifyProfileInputBox>
      </SignupContentBoxDiv>
      <ProfileModificationButton onClick={onSaveProfileHandler}>저장</ProfileModificationButton>
    </ProfileModificationOuterBoxDiv>
  );
}

export default ModifyProfile;
