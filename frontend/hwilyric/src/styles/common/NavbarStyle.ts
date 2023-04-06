import styled from "styled-components";

export const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items : center;
    backgound-color: none;
    height: 10vh;
    padding: 0;
    margin: 0 5vw;
`

export const NavMenu = styled.div`
    display: flex;
    align-items : center;
    width: 250px;
    justify-content: space-between;
`

export const DarkModeBox = styled.div `
    display: flex;
    align-items : center;
`

export const GradientText = styled.span`
    background: linear-gradient(45deg, rgba(251, 252, 185, 0.745), rgba(255, 205, 243, 0.667), rgba(101, 211, 355, 0.667));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`