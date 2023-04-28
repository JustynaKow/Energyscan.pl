import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.color.white};
        word-break: break-word;
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
`;