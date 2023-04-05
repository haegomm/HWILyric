import styled, { css } from "styled-components";
import { ThumbnailLabel } from "../writeSidebarStyle";

export const ButtonCss = (width?: string, height?: string) => css`
    width: ${width};
    height: ${height};
    font-size: 16px;
    border: 2px solid;
    background-color: none;
    border-image: linear-gradient(to right,
        ${props => props.theme.accentColor['1']}, 
        ${props => props.theme.accentColor['2']}, 
        ${props => props.theme.accentColor['4']});
    border-image-slice: 1;
    :hover {
        border: none;
        font-weight: bold;
        color: white;
        background: linear-gradient(45deg, ${props => props.theme.accentColor['1']}, 
        ${props => props.theme.accentColor['2']},
        ${props => props.theme.accentColor['3']});
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