import styled from "styled-components";

export const AppDiv = styled.div`
height: 88vh;
padding: 0 5vw 0 5vw;
display: flex;
justify-content: center; 

.aspect-ratio {
  position: relative;
  width: 100%;
}

.aspect-ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

`