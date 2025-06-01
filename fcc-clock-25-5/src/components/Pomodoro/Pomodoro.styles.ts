import { styled } from 'styled-components'

export const PomodoroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const PomodoroBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  width: 100%;
  height: 100%;
  gap: 12px;
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
  border-radius: 10px;
  &:hover {
    background-color: #555;
  }
`

export const NumberCount = styled.span`
  font-size: 20px;
  color: white;
`

export const PomodoroTimer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100%;
`

export const PomodoroTimerLabel = styled.span`
  font-size: 20px;
  color: var(--color-primary);
`

export const PomodoroTimerTime = styled.span`
  font-size: 50px;
  color: var(--color-primary);
  font-weight: 500;
`

export const PomodoroTimerButton = styled.button`
  border-radius: 12px;
  border: none;
  height: auto;
  width: 60px;
  padding: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
    color: var(--color-primary);
  }
`
