import {
  Button,
  NumberCount,
  PomodoroBox,
  PomodoroContainer,
} from './Pomodoro.styles'

const Pomodoro = () => {
  return (
    <PomodoroContainer>
      <PomodoroBox id="break-label">
        <Button id="break-decrement">-</Button>
        <NumberCount id="break-length">5</NumberCount>
        <Button id="break-increment">+</Button>
      </PomodoroBox>
      <PomodoroBox id="session-label">
        <Button id="session-decrement">-</Button>
        <NumberCount id="session-length">25</NumberCount>
        <Button id="session-increment">+</Button>
      </PomodoroBox>
    </PomodoroContainer>
  )
}
export default Pomodoro
