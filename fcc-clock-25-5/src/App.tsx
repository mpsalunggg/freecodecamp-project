import { Fragment } from 'react'
import GlobalStyle from './styles/Global.styles'
import Wrapper from './components/Wrapper/Wrapper'
import { Card } from './components/Card/Card.styles'
import Title from './components/Title/Title'
import Pomodoro from './components/Pomodoro/Pomodoro'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Title />
        <Card>
          <Pomodoro />
        </Card>
      </Wrapper>
    </Fragment>
  )
}

export default App
