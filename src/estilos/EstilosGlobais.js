import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  h1 {
    text-align: center;
    color: #333;
  }
`;

export default EstilosGlobais;