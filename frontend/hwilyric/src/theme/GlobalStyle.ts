import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body, input, textarea, button, select, option {
        padding: 0px;
        background-color: ${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textColor};
        }
    div {
        paddig: 0px;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    }
`;