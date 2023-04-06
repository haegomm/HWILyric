import styled from "styled-components";

import { lightTheme } from "../theme/theme";
import { ButtonCss } from "./common/ButtonStyle";

export const LoginBoxDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: auto;
  padding: 100px 100px 80px 100px;
  margin-top: 60px;
  width: auto;
  border-radius: 0px;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-image: linear-gradient(to right,
    ${props => props.theme.accentColor['1']}, 
    ${props => props.theme.accentColor['2']}, 
    ${props => props.theme.accentColor['3']},
    ${props => props.theme.accentColor['4']});
  border-image-slice: 1;
`;

export const LoginTitleH1 = styled.h1`
  position: absolute;
  top: -24px;
  font-size: 48px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0);
  z-index: 1;
  background: linear-gradient(to right, ${props => props.theme.accentColor['4']},
  ${props => props.theme.accentColor['2']});
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
  width: ${(288 / 1920) * 100}vw;
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
  border-image: #636161;
  outline: none;
  padding: 5px;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:focus {
    border-image: linear-gradient(to right,
      ${props => props.theme.accentColor['2']}, 
      ${props => props.theme.accentColor['3']});
    border-image-slice: 1;
    outline: none;
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

export const LoginEmailDiv = styled.div`
  width: ${(288 / 1920) * 100}vw;

  display: flex;
  justify-content: center;
`;

export const LoginPasswordDiv = styled.div`
  width: ${(288 / 1920) * 100}vw;

  display: flex;
  justify-content: center;
`;

export const LoginForgotPWDiv = styled.div`
  width: ${(288 / 1920) * 100}vw;

  height: 12px;
  font-size: 10px;
  text-align: right;
  cursor: pointer;
`;

export const LoginButtonBoxDiv = styled.div`
  padding: 20px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  ${ButtonCss("5vw", "32px")}
`;

export const ProfileModificationButton = styled.button`
  ${ButtonCss("8vw", "6vh")}
  margin-top: 30px;
`;

export const LoginNoIdDiv = styled.div`
  font-size: 20px;
  width: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const LoginSignUpBoxDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LoginSignUpDiv = styled.div`
  width: 6vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #fbd5e0;
  text-decoration: none;
`;

export const LoginKakaoA = styled.a`
  width: 6vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginKakaoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const LoginSignUpWrapper = styled.div`
  height: 144px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const LoginPasswordBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 60px;
  width: ${(288 / 1920) * 100}vw;
`;

export const PWFindTitleBackground = styled.div`
  background: ${(props) => (props.theme === lightTheme ? "white" : "#191B1F")};
  position: absolute;
  width: 312px;
  height: 48px;
  top: -24px;
  z-index: 1;
`;

export const PWFindTitleH1 = styled.h1`
  position: absolute;
  top: -24px;
  font-size: 48px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0);
  z-index: 1;
  background: linear-gradient(to right,  ${props => props.theme.accentColor['2']}, 
  ${props => props.theme.accentColor['3']});
  background-clip: text;
  -webkit-background-clip: text;
`;

export const PWFindButton = styled.button`
  ${ButtonCss("10vw", "6vh")}
`;
