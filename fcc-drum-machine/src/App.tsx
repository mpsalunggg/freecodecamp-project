import { Fragment } from 'react/jsx-runtime'
import GlobalStyle from './styles/Global.styles'
import Wrapper from './components/Wrapper/Wrapper'
import { data_drum } from './constants'
import Drum from './components/Drum/Drum'
import {
  DrumMachineHeaderStyled,
  DrumMachineTitleStyled,
  DrumWrapperStyled,
} from './components/Drum/Drum.styles'
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper id="drum-machine">
        <DrumMachineHeaderStyled>Drum Machine</DrumMachineHeaderStyled>
        <DrumWrapperStyled>
          {data_drum.map((item, index) => (
            <Drum key={index} {...item} setTitle={setTitle} />
          ))}
        </DrumWrapperStyled>
        <DrumMachineTitleStyled id="display">{title}</DrumMachineTitleStyled>
      </Wrapper>
    </Fragment>
  )
}

export default App
