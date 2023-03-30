import styled, { css } from 'styled-components';

const NoteBoxInfo = (height? : string) => css`
    width: 988px;
    height: ${height};
    background-clolor: none;
`

const NoteBorderBottom = () => css`
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    border-image-slice: 1;
`

export const NoteBox = styled.div`
        ${NoteBoxInfo("640px")}
        display: block;
`

export const TitleDivBox = styled.div`
    ${NoteBoxInfo("80px")};
    ${NoteBorderBottom}
    display: flex;
    align-items: center;
    & > input {
        border: none;
        background: transparent;
        margin-left: 8vh;
        font-size: 24px;
        background-color: none;
    }
`

export const BlockListStyle = styled.div`
    ${NoteBoxInfo("400px")};
    ${NoteBorderBottom}
`

export const CreateBlockStyle = styled.div`
    ${NoteBoxInfo("100px")};
    ${NoteBorderBottom}
    & > select {
        border: none;
        width: 100px;
        background-color: transparent;
        margin: 5vh 43vw 0 3vw;
        font-size: 20px;
        appearance: none;
        text-align: center;
        :focus{
            outline: none;
        }
    }
    & > button {
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 30px;
    }
`

export const BlockItemStyle = styled.div`
    ${NoteBoxInfo("")};
    ${NoteBorderBottom}
    & > select {
        border: none;
        width: 100px;
        background-color: transparent;
        margin: 5vh 0 0 0;
        font-size: 20px;
        appearance: none;
        text-align: center;
        :focus{
            outline: none;
        }
    }
    & > textarea {
        width: 45vw;
        border: none;
        resize : none;
        font-size: 2vh;
        background-color: transparent;
        :focus {
            outline: none;
        }
    }
`
