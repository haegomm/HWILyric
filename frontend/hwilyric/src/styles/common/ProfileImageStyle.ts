import styled from "styled-components";

interface divSize{
  width: string;
  height: string;
  borderRadius: string;
}

export const ProfileImageDiv = styled.div<divSize>`
  width: ${(props) => (props.width) ? (props.width) : '60px'};
  height: ${(props) => (props.height) ? (props.height) : '60px'};
  border-radius: ${(props) => (props.borderRadius) ? (props.borderRadius) : '70%'};
  overflow: hidden;
  // position: absolute;
`

export const ProfileImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`