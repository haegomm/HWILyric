import styled from 'styled-components';

interface divWidth{
  width: string;
}
export const HomeContainer = styled.div`
overflow: auto;
`

export const HomeContent = styled.div`
white-space: nowrap;
display: flex;
overflow-y: scroll;
align-items: center;
float: left
`

export const HomeDiv = styled.div`
  width: 30vw;
  margin: 5vh;
`

export const QuickView = styled.div`
  height: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuickViewBlock = styled.div<divWidth>`
  display: flex;
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  align-items: center;
`

export const QuickViewBlockImg = styled.img`
  width: 96px;
  margin-right: 16px;
`

export const HomeImg = styled.img`
  height: 60vh;
  margin-top: 2vh;
  position: absolute;
  top: 0;
  left: 0;
`

export const HomeProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const HomeProfileImgBox = styled.div`
  width: 150px;
  height: 150px; 
  border-radius: 70%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;  
`
export const HomeCenterImgContainer = styled.div`
  position: relative;
`