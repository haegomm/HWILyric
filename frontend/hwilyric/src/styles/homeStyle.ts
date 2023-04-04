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
  width: 25vw
  margin: 5vh;
`

export const QuickView = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuickViewBlock = styled.div<divWidth>`
dispaly: flex;
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  justify-content: center;
`

export const QuickViewBlockImg = styled.img`
  width: 24%;
`

export const HomeImg = styled.img`
height: 60vh
`