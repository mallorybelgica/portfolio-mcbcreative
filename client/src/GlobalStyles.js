import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body,
div,
span {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}
html, body {
    max-width: 100vw;
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 4px solid #F172A1; 
    transition: all 0.50s linear;
}
`;
