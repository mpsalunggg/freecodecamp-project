import type { HTMLAttributes, ReactNode } from 'react'
import { WrapperContainer } from './Wrapper.styles'

type WrapperProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return <WrapperContainer {...props}>{children}</WrapperContainer>
}

export default Wrapper
