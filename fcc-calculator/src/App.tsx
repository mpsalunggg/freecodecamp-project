import { Fragment } from 'react/jsx-runtime'
import GlobalStyle from './styles/Global.styles'
import Wrapper from './components/Wrapper/Wrapper'
import Calculator from './components/Calculator/Calculator'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Calculator />
      </Wrapper>
    </Fragment>
  )
}

export default App
