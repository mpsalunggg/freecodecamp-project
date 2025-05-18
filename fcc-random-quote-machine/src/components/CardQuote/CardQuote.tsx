import type { HTMLAttributes } from 'react'
import { CardQuoteBox } from './CardQuote.styles'
import type { QuotesType } from '../../data'

type CardQuoteProps = QuotesType & HTMLAttributes<HTMLDivElement>

const CardQuote = ({ ...props }: CardQuoteProps) => {
  const { quote, author } = props
  return (
    <CardQuoteBox>
      <h1 id="text" style={{ fontWeight: 400, fontStyle: 'italic' }}>
        "{quote}"
      </h1>
      <h3 id="author" style={{ color: 'chocolate' }}>
        {author}
      </h3>
    </CardQuoteBox>
  )
}
export default CardQuote
