import styled from 'styled-components'

export const DrumMachineHeaderStyled = styled.h1`
  color: #3498db;
`

export const DrumMachineTitleStyled = styled.p`
  color: #3498db;
`

export const DrumWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
`

export const DrumToggleStyled = styled.button`
  padding: 2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  outline: none;

  &:active,
  &.active {
    background-color: #2980b9;
    transform: scale(0.97);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
