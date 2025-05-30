import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    background-color:rgb(225, 225, 225);
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
`

export default GlobalStyle
