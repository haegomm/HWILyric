import styled, { css } from "styled-components"; 

export const SideBarBox = styled.div`
    width: 440px;
`

export const MemoBox = styled.textarea`
    width: 20vw;
    height: 28vh;
    margin: 0;
    padding: 0;
    border: 1px solid;
    resize : none;
    font-size: 16px;
    background-color: transparent;
    :focus {
        outline: none;
}
`

export const PlayButton = styled.button`
    width: 40px;
    height: 40px;
    margin: 10px;    
    background: linear-gradient(#B0E3F9, #DEB3FB, #FEC3B5, #FBD5E0);
    border-radius: 50%;
`

export const PlayerBox = styled.div`
    display: flex;
`

export const PlayerVideoBox = styled.div`
    width: 96px;
    height: 96px;
`

export const TabMenu = styled.ul`
    // background-color: #dcdcdc;
    // color: rgb(232, 234, 237);
    background-color: FFFFFF;
    color: 636161
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    margin-bottom: 7rem;
    margin-top: 10px;

    .submenu {
        display: flex;
        /* justify-content: space-between;
        width: 380px;
        heigth: 30px; */
        width: calc(100% /3);
        justify-content: center;
        padding: 10px;
        font-size: 15px;
        transition: 0.5s;
        // border-radius: 10px 10px 0px 0px;
    }

    .focused {
        // background-color: rgb(255,255,255);
        color: rgb(222,179,251);
    }

    & div.desc {
        text-align: center;
    }
`;

export const Desc = styled.div`
    text-align: center;
`;