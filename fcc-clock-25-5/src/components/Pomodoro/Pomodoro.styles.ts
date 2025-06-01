import { styled } from 'styled-components'

export const PomodoroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PomodoroBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  width: 100%;
  height: 100%;
`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  border: none;
  color: white;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`

export const NumberCount = styled.span`
  font-size: 20px;
  color: white;
`
