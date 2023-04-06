import styled from "styled-components";

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
  overflow: hidden;
` 

export const WordItem = styled.div`
  &:hover{
    background-color: rgb(0, 0, 0, 0.5);
    color: rgb(255, 255, 255, 100);
  }
  margin: 3px 11px;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
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
  width: 200px;
  height: 32px;
  background-color: ${props => props.theme.accentColor['4']};
  border: 2px solid ${props => props.theme.accentColor['4']};
  color: ${props => props.theme.textColor};
  margin-top: 16px;
  :hover {
    transition: 0.7s;
    background: none;
    color: ${props => props.theme.textColor};
  }
`

export const RecommendSelectButton = styled.button`
  border-radius: 16px;
  margin: 0 0 4% 16px;
  padding: 4px 8px 4px 8px;
  background-color: ${props => props.theme.accentColor['4']};
  border: 2px solid ${props => props.theme.accentColor['4']};
  color: ${props => props.theme.textColor};
`

export const RecommendButton = styled.button`
  border-radius: 16px;
  margin: 0 0 4% 16px;
  padding: 4px 8px 4px 8px;
  border: 2px solid #FBD5E0;
  border-color:${props => props.theme.accentColor['4']};
  background: none;
  color: ${props => props.theme.textColor};
`