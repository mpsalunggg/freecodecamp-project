import type { HTMLAttributes, ReactNode } from 'react'
import { Card } from './Card.styles'

type CardProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Wrapper = ({ children, ...props }: CardProps) => {
  return <Card {...props}>{children}</Card>
}

export default Wrapper
