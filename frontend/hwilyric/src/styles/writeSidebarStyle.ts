import styled, { css } from "styled-components"; 
import { SearchButton } from "../styles/common/ButtonStyle";

const sideWidth = 440;
const sideMargin = 20;
const borderWidth = 2;
const inputPadding = 5;
const mainGradientColor = 'linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa)';
const sideBarVH = 80;

// 전체 사이드바
export const SideBarBox = styled.div`
    width: ${sideWidth}px;
`
// 탭
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
    margin-bottom: 10px;
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

const BoxCSS = () => css`
    width: ${sideWidth-sideMargin}px;
    height: 20vh;
    padding: ${inputPadding}px;
    margin: 0px auto;
    margin-bottom: 15px;
`
// 썸네일
export const ThumbnailBox = styled.div`
    ${BoxCSS()};
    height: 20vh;
    display: flex;
    justify-content: space-between;

`

export const ThumbnailImage = styled.img`
    width: 60%;
    height: 95%;
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
    margin-bottom: 10px;
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
    top: ${inputPadding/2}px;
    right: ${inputPadding*3}px;
`

export const SearchResultList = styled.div`
    width: ${sideWidth - sideMargin}px;
    height: 20vh;
    margin: 0 auto;
    overflow: scroll;
`

const itemHeight = 50;
export const SearchResultItem = styled.div`
    display: flex;
    height:${itemHeight}px;
    width: ${sideWidth - sideMargin}px;
    overflow: hidden;
    margin: 0 auto;
    :hover {
        background-color: rgba(0,0,0,0.2);
        color: white;
    }
`
export const SearchResultItemText = styled.p`
    width: 100%;
    text-align: left;
    padding: 0 10px;
    line-height: ${itemHeight}px;
`