import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  background: gray;
  color: white;
  border: none;

  &:hover {
    background: #6b7280;
  }
`

export const ActionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TweetLink = styled.a`
  display: flex;
  align-items: center;
`
