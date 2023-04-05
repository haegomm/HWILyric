import styled, { css } from 'styled-components';
import reset from 'styled-reset';

const NoteBoxInfo = (height? : string) => css`
    align-items : center;
    height: ${height};
    background-clolor: none;
    margin: 0;
    padding: 0;
    border: 0;
`

const NoteBorderBottom = () => css`
    border-bottom: 1px solid;
    border-image: linear-gradient(to right,
        ${props => props.theme.accentColor['1']}, 
        ${props => props.theme.accentColor['2']}, 
        ${props => props.theme.accentColor['3']},
        ${props => props.theme.accentColor['4']});
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
    ${NoteBoxInfo("60%")};
    margin: 1% 0 1% 0;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #DEB3FB;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
    }
`

export const CreateBlockStyle = styled.div`
    ${NoteBoxInfo("10%")};
    ${NoteBorderBottom}
    display: flex;
    align-items: center;
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
        color: #C8C8C8;
`

export const DeleteButtonBox = styled.div`
    divplay: flex;
    align-items : center;
    justify-content: center;
    width: 1%;
    margin: 1%;
    & > button {
        font-size: 2vw;
        display: none;
        color: ${props => props.theme.accentColor['2']};
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
        width: 60%;
        border: none;
        resize : none;
        margin: 2% 8% 0 4% ;
        line-height: 20px;
        font-size: 16px;
        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
        :focus {
            outline: none;
            border-bottom: 1px outset;
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
    ${reset}
    ${NoteBoxInfo("8%")};
    ${NoteBorderBottom};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    & > button {
        margin-right: 1%;
    }
`

export const PlayerBox = styled.div`
    ${NoteBoxInfo("10%")}
    display: flex;
    
`

export const PlayerVideoBox = styled.div`
    width: 15%;
    height: 100%;
`

export const PlayerProgressBox = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`

export const PlayerButtonBox = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayButton = styled.button`
    width: 40px;
    height: 40px;  
    background: linear-gradient(#B0E3F9, #DEB3FB, #FEC3B5, #FBD5E0);
    border-radius: 50%;
`
