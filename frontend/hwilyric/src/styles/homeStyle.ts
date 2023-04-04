import styled from 'styled-components';

interface divWidth{
  width: string;
}

export const HomeContainer = styled.div`
  overflow: auto;
`

export const HomeTrapezoid = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 60vw;
  height: 100vh;
  z-index: -1;
`

export const HomeContent = styled.div`
  white-space: nowrap;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  float: left;
  height: 100%;
`

export const HomeDiv = styled.div`
  width: 28vw;
`

export const QuickView = styled.div`
  height: 70vh;
  width: 20vw;
  margin: 0 4vw;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`

export const QuickViewBody = styled.div`
  overflow: scroll;
`

export const QuickViewBlock = styled.div<divWidth>`
  display: flex;
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  height: 4vw;
  align-items: center;
  cursor: pointer;
  &:hover{  
    background-color : rgba(99,97,97, 0.1);
  }
`

export const QuickViewBlockItem = styled.div<divWidth>`
  display: flex;
  align-items: center;
  margin: 0 8px;
  width: ${(props) => (props.width) ? (props.width) : '60px'};
`

export const NotLoggedInBlock = styled.div`
  margin: 30vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuickViewBlockImg = styled.img`
  wwidth: 100%;
  height: 100%;
  object-fit: cover;
`

export const QuickViewBlockCover = styled.div`
  width: 3vw;
  height: 3vw; 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeImg = styled.img`
  height: 56vh;
  top: 0;
  left: 0;
  z-index: 2;
`

export const HomeProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
  cursor: pointer;
`

export const HomeProfileBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 5;
`

export const HomeProfileImgBox = styled.div`
  width: 17vh;
  height: 17vh; 
  border-radius: 70%;
  overflow: hidden;
  position: absolute;
  top:19.5vh;
  left: 19.5vh;  
`
export const HomeCenterImgContainer = styled.div`
  position: relative;
  margin-bottom: 5vh;
`

export const HomeCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vh;
`

export const HomeCenterWord = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  margin: 0 5% 0 5%;
`

export const HomeWordItem = styled.div`
  margin: 4px 12px;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`

export const QuickviewHeader = styled.div`
  height: 10vh;
  width: 16vw;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 24px;
`

export const QuickviewHeaderSpan = styled.span`
  font-size: 24px;
  font-weight: bolder;
`


export const HeaderP = styled.p`
  font-size: 24px;
  margin-right: 16px;
`

export const TopicHeader = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;
`