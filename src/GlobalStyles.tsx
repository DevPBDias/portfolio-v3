import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 16px;
    background-color: #0E1F31;
    color: #F3ECF0;
    /* border: 1px solid red; */
  }
`;

export default GlobalStyle;
