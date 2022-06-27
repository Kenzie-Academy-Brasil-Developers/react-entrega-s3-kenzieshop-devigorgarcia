import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--grey);
  }

  li, ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    --grey: #3E4459;
    --blue: #50B4BF;
    --yellow: #F2D22E;
    --gold: #BF9A2C;
    --red: #730202;
    --blue-color: #113740;
    --yellow-color: #D9C896;
    --white-color: #F2F2F2;
    --grey-color:#A6A6A6;
  }
` 

