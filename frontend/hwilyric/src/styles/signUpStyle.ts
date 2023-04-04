import styled from "styled-components";

import { lightTheme } from "../theme/theme";

export const SignupOuterBoxDiv = styled.div`
  width: ${(1040 / 1920) * 100}vw;
  height: 680px;
  display: flex;
  justify-content: center;
  position: relative;
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
  width: 168px;
  height: 48px;
  background: ${(props) => (props.theme === lightTheme ? "white" : "#191B1F")};
  position: absolute;
  z-index: 0;
  top: -24px;
`;

export const SignupContentBoxDiv = styled.div`
  width: ${(900 / 1920) * 100}vw;
  height: 500px;
`;

export const SignupForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 500px;
  align-items: center;
`;

export const SignupInnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 350px;
`;

export const SignupInnerWrapperInner = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SignupInnerBoxDiv = styled.div`
  width: ${(400 / 1920) * 100}vw;
  position: relative;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SignupInnerVerifyBoxDiv = styled.div`
  width: ${(400 / 1920) * 100}vw;
  position: relative;
  padding: 5px;
`;
export const SignupEmailDiv = styled.div``;

export const SignupEmailInput = styled.input`
  width:100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-image: #636161
  outline: none;
  padding: 5px;
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
  right: 5px;
  top: 10px;
  border-width: 1px 1px 1px 1px;
  border-image: #636161 1;
  border-style: solid;
`;

export const SignupEmailErrorSpan = styled.span`
  margin-left: auto;
  font-size: 14px;
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
  width: 45%;
`;

export const SignupProfileImg = styled.img`
  width: ${(200 / 1920) * 100}vw;
  height: ${(200 / 1920) * 100}vw;
  background: #c8c8c8;
`;

export const SignupSubmitButton = styled.button`
  width: ${(160 / 1920) * 100}vw;
  height: 48px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-image: linear-gradient(
      to right bottom,
      #ace5f8,
      #e6b2fd,
      #fdbfb4,
      #fbd1dd
    )
    3;
  font-size: 24px;
`;
