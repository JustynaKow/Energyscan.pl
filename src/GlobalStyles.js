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
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }
`;