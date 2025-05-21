import { Fragment } from 'react/jsx-runtime'
import GlobalStyle from './styles/Global.styles'
import Wrapper from './components/Wrapper/Wrapper'
import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Editor />
        <Preview />
      </Wrapper>
    </Fragment>
  )
}

export default App
