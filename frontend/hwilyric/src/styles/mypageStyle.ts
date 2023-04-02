import styled, { css } from "styled-components";

export const MyPageContainer = styled.div`
  padding: 0 10% 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MyPageProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 160 px;
  width: 55vw;
  align-items: flex-end;
  margin-bottom: 60px;
`

export const DropboxSelect =styled.select`
border: none;
width: 64px;
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

export const ArrowImage = styled.img`
  width: 16px;
  `

export const IconImage = styled.img`
  width: 20px;
  margin: 0 2px 0 2px;
  cursor: pointer;
  `

export const LyricThumbnail = styled.img`
  width: 8vw;
`

export const LyricListHeader = styled.div`
  display: flex;
  height: 80px;
  align-items: flex-end;
  border-bottom: 1px black solid;
  padding-top: 32px;
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
interface divWidth{
  width: string;
}
export const LyricListBodyItemDiv = styled.div<divWidth>`
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  display: flex;
  justify-content: center;
`

export const LyricListBodyItemContent = styled.div`
  width: 20vw;
`