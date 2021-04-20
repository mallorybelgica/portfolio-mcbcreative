import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
    background-color: #F0EBF4;
    color: #1D314C;
    border: 4px solid #F172A1; 
}
`;
