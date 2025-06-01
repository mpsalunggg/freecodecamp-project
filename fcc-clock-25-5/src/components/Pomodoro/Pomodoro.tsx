import { FaPause, FaPlay } from 'react-icons/fa'
import {
  Button,
  NumberCount,
  PomodoroBox,
  PomodoroContainer,
  PomodoroTimer,
  PomodoroTimerButton,
  PomodoroTimerLabel,
  PomodoroTimerTime,
} from './Pomodoro.styles'
import { useState, useEffect, useRef } from 'react'
import { src_audio } from '../../constants'

const Pomodoro = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [breakTime, setBreakTime] = useState(5)
  const [sessionTime, setSessionTime] = useState(25)
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isSession, setIsSession] = useState(true)
  const [hasJustSwitched, setHasJustSwitched] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const timerRef = useRef<any>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const handleChangeTime = (
    type: 'break' | 'session',
    action: 'increment' | 'decrement'
  ) => {
    if (isRunning) return

    if (type === 'break') {
      setBreakTime((prev) => {
        const next =
          action === 'increment'
            ? Math.min(prev + 1, 60)
            : Math.max(prev - 1, 1)
        if (!isSession) setTimeLeft(next * 60)
        return next
      })
    } else {
      setSessionTime((prev) => {
        const next =
          action === 'increment'
            ? Math.min(prev + 1, 60)
            : Math.max(prev - 1, 1)
        if (isSession) setTimeLeft(next * 60)
        return next
      })
    }
  }

  const handleStartPause = () => {
    if (!hasStarted) {
      setTimeLeft(sessionTime * 60)
      setHasStarted(true)
    }

    setIsRunning((prev) => !prev)
  }

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setIsRunning(false)
    setBreakTime(5)
    setSessionTime(25)
    setTimeLeft(25 * 60)
    setIsSession(true)
    setHasJustSwitched(false)
    setHasStarted(false)

    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
  }

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          if (!hasJustSwitched) {
            const audio = audioRef.current
            if (audio) {
              audio.currentTime = 0
              audio.play()
            }
            setHasJustSwitched(true)
            return 0
          } else {
            const nextSession = !isSession
            setIsSession(nextSession)
            setHasJustSwitched(false)
            return (nextSession ? sessionTime : breakTime) * 60
          }
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRunning, isSession, breakTime, sessionTime, hasJustSwitched])

  return (
    <PomodoroContainer>
      <PomodoroTimer>
        <PomodoroTimerLabel id="timer-label">
          {isSession ? 'Session' : 'Break'}
        </PomodoroTimerLabel>
        <PomodoroTimerTime id="time-left">
          {formatTime(timeLeft)}
        </PomodoroTimerTime>
      </PomodoroTimer>

      <div>
        <p style={{ textAlign: 'center' }}>Break Length</p>
        <PomodoroBox id="break-label">
          <Button
            id="break-decrement"
            onClick={() => handleChangeTime('break', 'decrement')}
          >
            -
          </Button>
          <NumberCount id="break-length">{breakTime}</NumberCount>
          <Button
            id="break-increment"
            onClick={() => handleChangeTime('break', 'increment')}
          >
            +
          </Button>
        </PomodoroBox>

        <p style={{ textAlign: 'center' }}>Session Length</p>
        <PomodoroBox id="session-label">
          <Button
            id="session-decrement"
            onClick={() => handleChangeTime('session', 'decrement')}
          >
            -
          </Button>
          <NumberCount id="session-length">{sessionTime}</NumberCount>
          <Button
            id="session-increment"
            onClick={() => handleChangeTime('session', 'increment')}
          >
            +
          </Button>
        </PomodoroBox>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          id="start_stop"
          onClick={handleStartPause}
          style={{ cursor: 'pointer' }}
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </div>
        <PomodoroTimerButton id="reset" onClick={handleReset}>
          Reset
        </PomodoroTimerButton>
      </div>

      <audio id="beep" preload="auto" src={src_audio} ref={audioRef} />
    </PomodoroContainer>
  )
}

export default Pomodoro
