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
html {
    border: 8px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #ff67a2, #99c4d4, #fb289b);
}
body {
    margin-top: 50px;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}
html, body {
    max-width: 100%;
    min-height: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
}

p, li {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.para};
}
`;
