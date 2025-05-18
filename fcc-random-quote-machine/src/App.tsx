import { useState } from 'react'
import { Fragment } from 'react/jsx-runtime'
import Wrapper from './components/Wrapper/Wrapper'
import GlobalStyle from './styles/Global.styles'
import CardQuote from './components/CardQuote/CardQuote'
import XBtn from './components/Xbtn/XBtn'
import { getRandomIndex } from './utils'
import { quotes, type QuotesType } from './data'
import { ActionStyled, Button, TweetLink } from './styles/App.styles'

function App() {
  const [currentQuotes, setCurrentQuotes] = useState<QuotesType>(
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
        <ActionStyled>
          <TweetLink
            id="tweet-quote"
            target="_blank"
            // href={twitterIntent(currentQuotes.quote)}
            href={`https://twitter.com/intent/tweet?text=${currentQuotes.quote}`}
          >
            <XBtn />
          </TweetLink>
          <Button id="new-quote" onClick={changeQuotes}>
            Change Quote
          </Button>
        </ActionStyled>
      </Wrapper>
    </Fragment>
  )
}

export default App
