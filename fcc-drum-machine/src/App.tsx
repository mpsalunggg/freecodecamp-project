import { Fragment } from 'react/jsx-runtime'
import GlobalStyle from './styles/Global.styles'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper id="drum-machine">
        <h1>Drum Machine</h1>
      </Wrapper>
    </Fragment>
  )
}

export default App
