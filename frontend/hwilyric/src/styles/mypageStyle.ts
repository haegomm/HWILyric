import styled, { css } from "styled-components";

export const MyPageContainer = styled.div`

`

export const MyPageProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DropboxDiv =styled.div`
  width: 72px;
`

export const MyProfileImage = styled.img`
  width: 128px;
`

export const ArrowImage = styled.img`
  width: 16px;
  `

export const LyricThumbnail = styled.img`
  width: 168px;
`

export const LyricListHeader = styled.div`
  display: flex;

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