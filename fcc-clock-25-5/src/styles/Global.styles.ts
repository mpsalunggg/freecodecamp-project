import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
  
  :root{
    --color-primary: rgb(46, 129, 255);
  }

  body {
    background-color:var(--color-primary);
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
`

export default GlobalStyle
