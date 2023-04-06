import styled, { css } from "styled-components";

interface divWidth{
  width: string;
}

export const MyPageContainer = styled.div`
  padding: 0 10% 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MyPageProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 128px;
  width: 55vw;
  align-items: center;
  margin-bottom: 24px;
`

export const DropboxDiv =styled.div`
  float: right;
`

export const DropboxSelect =styled.select<divWidth>`
  border: none;
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  ...
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
...
`

export const DropboxOption =styled.option`
  border: none;
`

export const MyProfileImage = styled.img`
  width: 88px;
  
`
export const MyPageSpan = styled.span`
  cursor: pointer;
`


export const ArrowImage = styled.img`
  width: 16px;
  `

export const IconImage = styled.img`
  border: 0px;
  width: 20px;
  margin: 0 2px 0 2px;
  cursor: pointer;
  `

export const LyricThumbnail = styled.img`
  width: 8vw;
  height: 8vw;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5%;
  box-shadow: 2px 2px 5px 2px lightgray;
`

export const LyricListHeader = styled.div`
  display: flex;
  height: 56px;
  align-items: flex-end;
  border-bottom: 1px black solid;
  padding-bottom: 16px; 
`

export const LyricListBody = styled.div`
  display: flex;
`

export const LyricListBodyItem = styled.div`
  display: flex;
  padding:24px 0 8px 0;
  align-items: center;
`

export const LyricListBodyItemDiv = styled.div<divWidth>`
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  display: flex;
  justify-content: center;
`

export const LyricListBodyItemContent = styled.div`
  width: 20vw;
`

export const LyricText = styled.div<divWidth>`
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: start;
`