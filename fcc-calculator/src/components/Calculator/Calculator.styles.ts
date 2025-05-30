import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-auto-rows: 80px;
  gap: 2px;
  max-width: 340px;
  background-color: #000;
  padding: 4px;
  border: 2px solid #333;
`

export const Button = styled.button<{
  spanColTwo?: boolean
  spanRowTwo?: boolean
  red?: boolean
  blue?: boolean
}>`
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

  ${({ spanColTwo }) => spanColTwo && `grid-column: span 2;`}
  ${({ spanRowTwo }) => spanRowTwo && `grid-row: span 2;`}
  ${({ red }) => red && `background-color: #b13d3d;`}
  ${({ blue }) => blue && `background-color: #054b6d;`}
`
