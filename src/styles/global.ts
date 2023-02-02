import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  html {
    font-size: 62.5%;
  }
`;
