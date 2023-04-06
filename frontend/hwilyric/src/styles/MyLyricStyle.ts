import styled, { css } from "styled-components";

interface divWidth{
  width: string;
}

export const MyLyricBody = styled.div`
  width: 90%
  display: flex;
  flex-direction: column;
`
export const MyLyricSubBody = styled.div`
  width: 90%
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
`

export const MyLyricThumbnail = styled.img`
  width: 80%;
`

export const MyLyricListBodyItemContent = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`

export const MyLyricListBodyDiv = styled.div`
  width: 100%;
  display: flex;
  padding-left: 1vw;
  margin-top: 2vw;
  flex-direction: column;
  height: 28vw;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #DEB3FB;
    border-radius: 10px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
`
export const MyLyricListDropboxSelect =styled.select<divWidth>`
  float: middle;
  margin-top: 1vw;
  height: 30px;
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #DEB3FB;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`