import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}  
    body {        
        background-color: ${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textColor};
    }
`;