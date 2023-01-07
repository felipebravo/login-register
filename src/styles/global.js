import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Geo', sans-serif;
  }

  button{
    cursor: pointer;
    border: none;
  }

  .title{
    color: var(--color-white);

    font-family: monospace, sans-serif;
    font-weight: 300;
  }

  .text{
    font-family: monospace, sans-serif;
    font-weight: 600;

    color: var(--color-white);
  }

  :root{
    --color-white: #FFFFFF;
    --color-black: #000000;
    --primary-orange: #ee7752;
    --primary-pink: #e73c7e;
    --primary-blue: #23a6d5;
    --primary-green: #23d5ab;
  }
`;
