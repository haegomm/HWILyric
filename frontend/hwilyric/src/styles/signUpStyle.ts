import styled from "styled-components";

import { lightTheme } from "../theme/theme";
import { ButtonCss } from "./common/ButtonStyle";

export const SignupOuterBoxDiv = styled.div`
  margin-bottom: 30px;
  width: auto;
  height: auto;
  display: flex;
  padding: 100px 0px 50px 0px;
  justify-content: center;
  position: relative;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-image: linear-gradient(
      to right bottom,
      #ace5f8,
      #e6b2fd,
      #fdbfb4,
      #fbd1dd
    )
    1;
`;

export const ProfileModificationOuterBoxDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 60px 100px 60px 100px;
  justify-content: center;
  position: relative;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-image: linear-gradient(
      to right bottom,
      #ace5f8,
      #e6b2fd,
      #fdbfb4,
      #fbd1dd
    )
    1;
`;

export const SignupTitleH1 = styled.h1`
  position: absolute;
  top: -24px;
  font-size: 48px;
  color: rgba(0, 0, 0, 0);
  z-index: 1;
  background: linear-gradient(to right, #ace5f8, #e6b2fd);
  background-clip: text;
  -webkit-background-clip: text;
`;

export const SignupTitleBackground = styled.div`
  width: 200px;
  height: 48px;
  background: ${(props) => (props.theme === lightTheme ? "white" : "#191B1F")};
  position: absolute;
  z-index: 0;
  top: -24px;
`;

export const SignupContentBoxDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

export const SignupForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const SignupInnerWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  height: auto;
`;

export const SignupInnerWrapperInner = styled.div`
  width: 50%;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  flex-direction: column;
`;

export const SignupInnerBoxDiv = styled.div`
  width: auto;
  position: relative;
  padding: 20px 0px 30px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SignupInnerVerifyBoxDiv = styled.div`
  width: 100%;
  position: relative;
  padding-top: 20px;
`;
export const SignupEmailDiv = styled.div`
  padding: 0;
`;

export const ModifyEmailDiv = styled.div`
  padding-bottom: 20px;
`;

export const SignupEmailInput = styled.input`
  width:100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-image: #636161
  outline: none;
  padding-bottom: 10px;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:focus {
    border-image: linear-gradient(
      to right bottom,
      #ace5f8,
      #e6b2fd,
      #fdbfb4,
      #fbd1dd
    )
    2;
    outline: none;
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
  `;

export const ModifyEmailInput = styled.input`
  width:auto;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-image: #636161
  outline: none;
  padding-bottom: 10px;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:focus {
    border-image: linear-gradient(
      to right bottom,
      #ace5f8,
      #e6b2fd,
      #fdbfb4,
      #fbd1dd
    )
    2;
    outline: none;
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
  `;

export const SignupSendNumberDiv = styled.div`
  position: absolute;
  right: 1%;
  top: 22px;
  padding: 3px;
  border-width: 1px 1px 1px 1px;
  border-image: #636161 1;
  border-style: solid;
  cursor: pointer;
  :hover {
    background: #636161;
    color: #ffffff;
  }
`;

export const SignupConfirmNumberDiv = styled.div`
  position: absolute;
  right: 1%;
  top: 22px;
  padding: 3px;
  border-width: 1px 1px 1px 1px;
  border-image: #636161 1;
  border-style: solid;
  cursor: pointer;
  :hover {
    background: #636161;
    color: #ffffff;
  }
`;

export const SignupEmailErrorSpan = styled.span`
  margin-left: auto;
  padding-top: 5px;
  font-size: 8px;
`;

export const SignupVerifyDiv = styled.div``;

export const SignupProfileInput = styled.input`
  width:100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-image: #636161
  outline: none;
  padding: 5px;
  `;

export const SignupProfileInputBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 65%;
`;

export const SignupProfileTitle = styled.div`
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  border-image: #636161;
`;

export const SignupProfileInputLeft = styled.div`
  padding-right: 20px;
  width: 60%;
`;

export const SignupProfileImg = styled.img`
  width: 200px;
  height: 200px;
  background: #c8c8c8;
`;

export const SignupSubmitButton = styled.button`
  ${ButtonCss("10vw", "6vh")}
  margin-top: 20px;
`;
