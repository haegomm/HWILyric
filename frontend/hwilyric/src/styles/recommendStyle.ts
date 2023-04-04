import styled, { css } from "styled-components";

export const RecommendContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5% 0 5%;
  height: 40wh;
`

export const RecommendBody = styled.div`
  width: 90%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  margin: 0 5% 0 5%;
`

export const RecommendHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 5% 0 5%;
  height: 10vh
`

export const RandomHeader = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WordContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 90%
text-align: center;
` 

export const WordItem = styled.div`
  margin: 4px 4% 4px 4%
`

export const ButtonBox = styled.div`
display: flex;
justify-content: start;
`

export const RecommendButton = styled.button`
  border-radius: 16px;
  margin: 0 4% 4% 4%;
  padding: 4px 8px 4px 8px;
`

export const SearchboxForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid black;
  border-radius: 16px;
  width: 90%;
  padding: 4px 16px 4px 16px;
  margin: 0 4% 0 4%;
`

export const SearchboxInput = styled.input`
  width: 100%;
  border: none;
`

export const SearchButton = styled.button`
  border: none;
`