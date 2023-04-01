import styled, { css } from "styled-components";

export const MyPageContainer = styled.div`
  padding: 0 10% 0 10%;
`

export const MyPageProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 160 px;
  align-items: flex-end;
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

export const LyricThumbnail = styled.img`
  width: 8vw;
`

export const LyricListHeader = styled.div`
  display: flex;
  height: 80px;
  align-items: flex-end;
  border-bottom: 1px black solid;

`

export const LyricListBody = styled.div`
  display: flex;
`

export const LyricListBodyItem = styled.div`

`
interface divWidth{
  width: string;
}
export const LyricListBodyItemDiv = styled.div<divWidth>`
  width: ${(props) => (props.width) ? (props.width) : '60px'};
`