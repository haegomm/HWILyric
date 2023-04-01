import styled, {css} from "styled-components";

const ColorDivBoxCss = (margin?: string) => css`
    border: 2px solid;
    background-color: none;
    border-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    border-image-slice: 1;
    margin: ${margin}
`

export const WriteDivBox = styled.div`
    ${ColorDivBoxCss("0 0 0 5vw")}
`