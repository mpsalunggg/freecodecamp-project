import { Fragment } from 'react/jsx-runtime'
import Wrapper from './components/Wrapper/Wrapper'
import GlobalStyle from './styles/Global.styles'
import CardQuote from './components/CardQuote/CardQuote'
import { useState } from 'react'
import { getRandomIndex } from './utils'
import { quotes } from './data'
import { Button } from './styles/App.styles'

function App() {
  const [currentQuotes, setCurrentQuotes] = useState(
    quotes[getRandomIndex(quotes)]
  )

  const changeQuotes = () => {
    setCurrentQuotes(quotes[getRandomIndex(quotes)])
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper id="quote-box">
        <CardQuote quote={currentQuotes.quote} author={currentQuotes.author} />
        <Button id="new-quote" onClick={changeQuotes}>
          Change Quote
        </Button>
      </Wrapper>
    </Fragment>
  )
}

export default App
