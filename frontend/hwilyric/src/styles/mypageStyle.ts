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

export const LyricListHeader = styled.div`
  display: flex;

`

export const LyricListBody = styled.div`

`

export const LyricListBodyItem = styled.div`

`

export const LyricListBodyItemDiv = styled.div`
  width: ${(props) => (props.width:Number)};
`