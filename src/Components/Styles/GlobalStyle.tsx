import { createGlobalStyle } from 'styled-components';
import { Theme } from './Themes/Themes';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  * {
    transition: background-color ${({ theme }) => theme.transitions.short};
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.colour};
    margin: 0px;
    animation: fadeIn ${({ theme }) => theme.transitions.short};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  h2 {
    font-size: 28px;
    font-weight: 600;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
  }

  h5 {
    font-size: 20px;
    font-weight: 700;
  }

  div {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
`;

export { GlobalStyle };
