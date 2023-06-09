import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  /* Set core body defaults */
  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    display: grid;
    place-items: center;
    background-color: hsl(234, 29%, 20%);
  }


  body, div, button, main, header, section, input {
    transition: 1s ease background-color, 1s ease color;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  // remove default styles for list's

  ul {
    list-style: none;
    padding: 0;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  button, input {
    background-color: unset;
    border: unset;
    outline: unset;
  }

buton:focus {
    box-shadow: none;
}

`;

export default GlobalStyles;