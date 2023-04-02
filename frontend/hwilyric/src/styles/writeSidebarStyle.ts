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
    // whidth: 8vw;
    // height: 5vh;
    // border: dashed;
`

export const SearchBoxStyle = styled.div`
    whidth: 30px;
    height: 4vh;
    justify-content: center;
    border: 2px solid;
    border-radius: 50px;
    border: 2px solid;
    background-color: none;
    border-image: linear-gradient(-45deg, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    border-image-slice: 1;
`

export const SearchInput = styled.input`
    border: none;
    background-color: none;
    :hover {
        border: none;
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
    width: 25vw;
    height: 30vh;
`

export const SearchResultItem = styled.div`
    display: flex;
`