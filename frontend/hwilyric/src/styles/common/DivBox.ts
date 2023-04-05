import styled, {css} from "styled-components";

const ColorDivBoxCss = (margin?: string) => css`
    border: 2px solid;
    background-color: none;
    border-image: linear-gradient(to right,
        ${props => props.theme.accentColor['1']}, 
        ${props => props.theme.accentColor['2']}, 
        ${props => props.theme.accentColor['3']},
        ${props => props.theme.accentColor['4']});
    border-image-slice: 1;
    margin: ${margin};
`

export const WriteNoteDivBox = styled.div`
    width: 50vw;
    ${ColorDivBoxCss("0 0 0 0")}
    display: relative;
`

export const WriteSidebarDivBox = styled.div`
    width: 30vw;
    ${ColorDivBoxCss("0 5vw 0 0")}
`