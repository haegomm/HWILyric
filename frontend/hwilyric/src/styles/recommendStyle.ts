import styled, { css } from "styled-components";
import { ButtonCss } from "./common/ButtonStyle";

export const RecommendContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10% 5% 0 5%;
  height: 40wh;
`

export const RecommendBody = styled.div`
  width: 90%;
  height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5% 5% 0 5%;
`

export const RecommendHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 5% 12px 5%;
  height: 10vh
`

export const RandomHeader = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-weight: bolder;
`

export const WordContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 90%
text-align: center;
` 

export const WordItem = styled.div`
  margin: 4%;
`

export const ButtonBox = styled.div`
display: flex;
justify-content: start;
`

export const SearchboxForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 2px solid;
  background-color: none;
  border-image: linear-gradient(to right,
    ${props => props.theme.accentColor['2']}, 
    ${props => props.theme.accentColor['3']});
    border-image-slice: 1;
    width: 90%;
    padding: 4px 16px 4px 16px;
    margin: 0 4% 0 4%;
    border-radius: 16px;
    `

export const SearchboxInput = styled.input`
  width: 100%;
  border: none;
`

export const SearchButton = styled.button`
  border: none;
`

export const NotLoggedInDiv = styled.div`
  margin-top: 28vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginRecButton = styled.button`
  width: 72px;
  height: 32px;
  background-color: #FBD5E0;
  border: 2px solid #FBD5E0;
  color: #ffffff;
  margin-top: 16px;
  :hover {
    transition: 0.7s;
    background: none;
    color: #636161;
  }
`

export const RecommendSelectButton = styled.button`
  border-radius: 16px;
  margin: 0 0 4% 16px;
  padding: 4px 8px 4px 8px;
  background-color: #FBD5E0;
  border: 2px solid #FBD5E0;
  color: #ffffff;
`

export const RecommendButton = styled.button`
  border-radius: 16px;
  margin: 0 0 4% 16px;
  padding: 4px 8px 4px 8px;
  border: 2px solid #FBD5E0;
  background: none;
  color: #636161;
`