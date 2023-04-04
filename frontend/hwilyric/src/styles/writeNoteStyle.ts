import styled, { css } from 'styled-components';

const NoteBoxInfo = (height? : string) => css`
    display: block;
    align-items : center;
    height: ${height};
    background-clolor: none;
    margin: 0;
    padding: 0;
    border: 0;
`

const NoteBorderBottom = () => css`
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    border-image-slice: 1;
`

const NoteCreateDeleteButton = () => css`
    border: none;
    outline: none;
    background-color: transparent;
`

export const NoteBox = styled.div`
    ${NoteBoxInfo("")}
    display: block;
`

export const TitleDivBox = styled.div`
    ${NoteBoxInfo("10%")};
    ${NoteBorderBottom}
    display: flex;
    align-items : center;
    & > input {
        border: none;
        background: transparent;
        margin-left: 8%;
        padding: 0;
        font-size: 20px;
        background-color: none;
        outline: none;
    }
`

export const BlockListStyle = styled.div`
    ${NoteBoxInfo("70%")};
    ${NoteBorderBottom};
    overflow: scroll;
`

export const CreateBlockStyle = styled.div`
    ${NoteBoxInfo("10%")};
    ${NoteBorderBottom}
    & > select {
        border: none;
        background-color: transparent;
        margin: 0 5% 0 5%;
        font-size: 18px;
        text-align: center;
        :focus{
            outline: none;
        }
    }
    & > button {
        ${NoteCreateDeleteButton};
        font-size: 14px;
        color: #C8C8C8;
`

export const DeleteButtonBox = styled.div`
    divplay: flex;
    align-items : center;
    justify-content: center;
    width: 1%;
    & > button {
        font-size: 2vw;
        display: none;
    }
`

export const BlockItemStyle =  styled.div<{ height: number }>`
    ${NoteBoxInfo("")};
    display: flex;
    justify-content: space-between;
    background-clolor: none;
    align-items : center;
    width: 90%;
    margin: 2% 0 2% 0;
    height: ${({ height }) => height}px;
    & > select {
        border: none;
        font-size: 18px;
        :focus{
            outline: none;
        }
    }
    & > textarea {
        width: 50%;
        border: none;
        resize : none;
        margin: 2vh 0 0 0;
        line-height: 18px;
        font-size: 16px;
        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
        :focus {
        }
    }

    &:hover {
        ${DeleteButtonBox} {
            & > button {
                display: block;
            }
        }

`

export const SaveDivBox = styled.div`
    align-items : center;
`

export const PlayerBox = styled.div`
    display: flex;
    ${NoteBoxInfo("5%")}
    
`

export const PlayerVideoBox = styled.div`
    width: 96px;
    height: 96px;
`

export const PlayButton = styled.button`
    width: 40px;
    height: 40px;
    margin: 10px;    
    background: linear-gradient(#B0E3F9, #DEB3FB, #FEC3B5, #FBD5E0);
    border-radius: 50%;
`
