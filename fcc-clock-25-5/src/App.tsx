import { Fragment } from 'react'
import GlobalStyle from './styles/Global.styles'
import Wrapper from './components/Wrapper/Wrapper'
import { Card } from './components/Card/Card.styles'
import Title from './components/Title/Title'
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Title />
        <Card></Card>
      </Wrapper>
    </Fragment>
  )
}

export default App
