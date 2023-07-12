import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;

  .root-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
    
    p {
      margin: 0;
    }
  }
`
