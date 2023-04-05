import styled, { css } from "styled-components"; 
import { SearchButton } from "../styles/common/ButtonStyle";

const sideWidth = 30;
const sideMargin = 4;
const borderWidth = 2;
const inputPadding = 5;
const mainGradientColor = 'linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa)';
const sideBarVH = 80;

// 전체 사이드바
export const SideBarBox = styled.div`
    margin: 0px;
    width: ${sideWidth}vw;
`
// 탭
export const TabMenu = styled.ul`
    color: 636161;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    margin-bottom: 5%;
    margin-top: 5%;

    .submenu {
        display: flex;
        justify-content: center;
        font-size: 15px;
        transition: 0.1s;
    }

    .focused {
        font-weight: bold;
        color: rgb(222,179,251);
    }

    & div.desc {
    }
`;

export const Desc = styled.div`
    text-align: center;
`;

export const SimilarListBox = styled.div`
    margin: 2vw;
    height: 34vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: auto;
`
    
export const SimilarUserLyric = styled.div`
    font-size: 16px;
    margin-bottom: 2%;
    // overflow: auto;
    `
    
    export const SimilarLyricInfo = styled.div`
    // overflow: auto;
    margin: 2vh;
`

export const SimilarLyricSubInfo = styled.span`
    display: flex;
    justify-content: flex-end;
    font-size: 10px;
`

export const SimilarInform = styled.div`
    border: 1px dashed;
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        margin: 3%;
    }
`

const BoxCSS = () => css`
    width: ${sideWidth-sideMargin}vw;
    height: 26vh;
    padding: ${inputPadding}px;
    margin: 0px auto;
    margin-bottom: 4vh;
`
// 썸네일
export const ThumbnailBox = styled.div`
    ${BoxCSS()};
    margin-bottom: 4%;
    height: 10vh;
    display: flex;
    justify-content: space-between;

`

export const ThumbnailImage = styled.img`
    height: 100%;
    object-fit: contain;
`

export const ThumbnailUploadDiv = styled.div`
    width: 20%;
    display: flex;
    align-items: end;
    justify-content: end;
    // padding-bottom: 10px;
`

export const ThumbnailLabel = styled.label`
    width: 60px;
    height: 30px;
    border: ${borderWidth}px solid transparent;
    border-image: ${mainGradientColor};
    border-image-slice: 1;
    line-height: 30px;
    :hover {
        border: none;
        transition: 0.7s;
        background: ${mainGradientColor};
    }
`

export const ThumbnailInput = styled.input`
    position: absolute;
    width: 0px;
    height: 0px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`
// 메모
export const MemoBox = styled.textarea`
    ${BoxCSS()};
    border: ${borderWidth}px solid transparent;
    border-image: ${mainGradientColor};
    border-image-slice: 1;
    resize : none;
    font-size: 16px;
    background-color: transparent;
    :focus {
        outline: none;
    }
    padding: 10px 20px;
`
// 유튜브 검색
export const SearchBox = styled.div`
    ${BoxCSS()};
    align-content: center;
    justify-content: center;
`
export const SearchBoxStyle = styled.div`
    height: 4vh;
    justify-content: center;
    border: ${borderWidth}px solid transparent;
    border-radius: 50px;
    background-image: ${mainGradientColor};
    background-origin: border-box;
    background-clip: border-box;
    position: relative;
    margin: 0px auto;
    margin-bottom: 5%;
`

export const SearchInput = styled.input`
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    :focus {
        outline: none;
    }
    padding: ${inputPadding/2}px ${inputPadding*3}px;
`

export const SearchIconButton = styled(SearchButton)`
    width: 20px;
    height: 20px;
    position: absolute;
    top: ${inputPadding/2}%;
    right: ${inputPadding}%;
`

export const SearchResultList = styled.div`
    width: ${sideWidth}vw;
    height: 20vh;
    margin: 0 auto;
    padding: 0;
    overflow: scroll;
`

const itemHeight = 10;
export const SearchResultItem = styled.div`
    display: flex;
    justify-content: center;
    height:${itemHeight}vh;
    width: 24vw;
    margin-bottom: 2%;
    overflow: hidden;
    :hover {
        background-color: rgba(0,0,0,0.2);
        color: white;
    }
`
export const SearchResultItemText = styled.p`
    width: 100%;
    text-align: left;
    padding: 0 0 0 4%;
    line-height: ${itemHeight}vh;
`