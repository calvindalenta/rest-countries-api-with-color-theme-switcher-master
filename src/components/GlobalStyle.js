import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-size: 16px;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.textPrimary};
    }

    img {
        max-width: 100%;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.textPrimary};
    }
`;

export default GlobalStyle;