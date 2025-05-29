import { useEffect, useRef, type FC } from 'react'
import { DrumToggleStyled } from './Drum.styles'
import type { DrumType } from '../../constants'

type DrumProps = DrumType & {
  setTitle: (title: string) => void
}

const Drum: FC<DrumProps> = ({ keyTrigger, audio, title, setTitle }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const playSound = () => {
    setTitle(title)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }

    if (buttonRef.current) {
      buttonRef.current.classList.add('active')
      setTimeout(() => buttonRef.current?.classList.remove('active'), 100)
    }
  }

  const handleClick = () => {
    playSound()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toUpperCase() === keyTrigger) {
        playSound()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [keyTrigger])

  return (
    <DrumToggleStyled
      id={title}
      className="drum-pad"
      ref={buttonRef}
      onClick={handleClick}
    >
      <audio className="clip" id={keyTrigger} ref={audioRef} src={audio} />
      {keyTrigger}
    </DrumToggleStyled>
  )
}

export default Drum
