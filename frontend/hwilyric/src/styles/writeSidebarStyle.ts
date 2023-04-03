import styled from "styled-components"; 
import { SearchButton } from "../styles/common/ButtonStyle";

const sideWidth = 440;
const sideMargin = 20;
const borderWidth = 2;

export const SideBarBox = styled.div`
    width: ${sideWidth}px;
`

export const MemoBox = styled.textarea`
    width: ${sideWidth-sideMargin}px;
    height: 28vh;
    margin: 0 auto;
    padding: 0;
    border: ${borderWidth}px solid;
    resize : none;
    font-size: 16px;
    background-color: transparent;
    :focus {
        outline: none;
}
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

export const SimilarListBox = styled.div`
    margin: 2vw;
    height: 30vh;
    align-items: center;
`
    
export const SimilarUserLyric = styled.div`
    // margin: 2vw;
    font-size: 3vh;
`
    
export const SimilarLyricInfo = styled.div`
    display: block;
    margin: 1vw;
    overflow: scroll;
`

export const SimilarLyricSubInfo = styled.span`
    display: flex;
    margin: 1vw;
    justify-content: flex-end;
    font-size: 0.8vw;
`

export const SimilarInform = styled.div`
    // width: 8vw;
    // height: 5vh;
    // border: dashed;
`

export const SearchBoxStyle = styled.div`
    width: ${sideWidth - sideMargin}px;
    height: 4vh;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 50px;
    background-image: linear-gradient(-45deg, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    background-origin: border-box;
    background-clip: border-box;
    position: relative;
    margin: 10px auto;
`

const inputPadding = 5;

export const SearchInput = styled.input`
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    :focus {
        outline: none;
    }
    padding: ${inputPadding/2}px ${inputPadding}px;
`

export const SearchIconButton = styled(SearchButton)`
    position: absolute;
    top: ${inputPadding/2}px;
    right: ${inputPadding*3}px;
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

export const SearchResultList = styled.div`
    width: ${sideWidth - sideMargin};
    height: 30vh;
    margin: 0 auto;
    overflow: scroll;
`

export const SearchResultItem = styled.div`
    display: flex;
    width: ${sideWidth - sideMargin};
    margin: 0 auto;
`