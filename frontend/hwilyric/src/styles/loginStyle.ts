import styled from "styled-components";

import { lightTheme } from "../theme/theme";

export const LoginBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 656px;
  width: ${(560 / 1920) * 100}vw;
  border-radius: 0px;
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

export const LoginTitleH1 = styled.h1`
  position: absolute;
  top: -24px;
  font-size: 48px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0);
  z-index: 1;
  background: linear-gradient(to right, #ace5f8, #e6b2fd);
  background-clip: text;
  -webkit-background-clip: text;
`;

export const LoginTitleBackground = styled.div`
  background: ${(props) => (props.theme === lightTheme ? "white" : "#191B1F")};
  position: absolute;
  width: 144px;
  height: 48px;
  top: -24px;
  z-index: 1;
`;

export const LoginForm = styled.form`
  height: 240px;
  width: 288px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const LoginInputI = styled.input`
  width: ${(288 / 1920) * 100}vw;
  height: 30px;
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

export const LoginEmailDiv = styled.div`
  width: 20vw;

  display: flex;
  justify-content: center;
`;

export const LoginPasswordDiv = styled.div`
  width: 20vw;

  display: flex;
  justify-content: center;
`;

export const LoginForgotPWDiv = styled.div`
  background: yellow;
  width: ${(128 / 1920) * 100}vw;
  height: 12px;
  font-size: 10px;
  margin-left: auto;
`;

export const LoginButtonBoxDiv = styled.div`
  background: yellow;
`;

export const LoginButton = styled.button`
  background: black;
`;

export const LoginNoIdDiv = styled.div`
  background: pink;
`;

export const LoginSignUpBoxDiv = styled.div`
  background: red;
`;

export const LoginSignUpDiv = styled.div`
  background: blue;
`;

export const LoginKakaoA = styled.a``;
