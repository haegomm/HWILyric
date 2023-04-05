import styled, { css } from "styled-components";

export const ButtonCss = (width?: string, height?: string) => css`
    width: ${width};
    height: ${height};
    font-size: 16px;
    border: 2px solid;
    background-color: none;
    border-image: linear-gradient(45deg, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    border-image-slice: 1;
    :hover {
        border: none;
        transition: 0.7s;
        background: linear-gradient(45deg, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
    }
`

export const Button = styled.button`
    ${ButtonCss()}
`

export const SaveButton = styled.button`
    ${ButtonCss("5vw", "4vh")};
    position: absolute;
`

export const CheckButton = styled.button`
    ${ButtonCss("12vw", "8vh")};
    margin-top: 5%;
`

export const SearchButton = styled.button`
    border: none;
    background-color: none;
    :hover {
        border: none;
    }
`