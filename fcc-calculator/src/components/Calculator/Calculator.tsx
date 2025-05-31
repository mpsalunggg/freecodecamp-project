import { useState } from 'react'
import {
  Button,
  CalculatorWrapper,
  DisplayResult,
  TextResult,
} from './Calculator.styles'

const Calculator = () => {
  const [temp, setTemp] = useState('')
  const [result, setResult] = useState('0')

  const handleAddNumbers = (number: number) => {
    const isOperator = /[\+\-\*\/x]/
    if (temp.includes('=')) {
      setTemp(String(number))
      setResult(String(number))
      return
    }

    if (number === 0 && result === '0') {
      setResult('0')
    } else {
      setResult((prev) => {
        if (prev === '0' || isOperator.test(prev)) {
          return String(number)
        } else {
          return String(prev) + String(number)
        }
      })
    }
    setTemp((prev) => prev + number)
  }

  const handleAddOperators = (operator: string) => {
    const isOperator = /[\+\-\*\/x]/

    if (temp.includes('=')) {
      setTemp(result + operator)
      setResult(operator)
      return
    }

    if (result === '0' && operator === '-') {
      setTemp('-')
      setResult('-')
    } else {
      setTemp((prev) => {
        const lastChar = prev.slice(-1)
        const secondLastChar = prev.slice(-2, -1)

        const lastTwo = secondLastChar + lastChar
        const allow = ['+-', '--', '/-', 'x-']

        if (allow.includes(lastTwo)) {
          if (isOperator.test(operator) && operator !== '-') {
            return prev.slice(0, -2) + operator
          } else {
            return prev
          }
        }

        if (isOperator.test(lastChar)) {
          if (operator === '-') {
            return prev + operator
          } else {
            return prev.slice(0, -1) + operator
          }
        }

        return prev + operator
      })

      setResult(operator)
    }
  }

  const handleDecimal = () => {
    const isOperator = /[\+\-\*\/x]/
    if (result.includes('.')) return

    setTemp((prev) => {
      const lastChar = prev.slice(-1)
      if (isOperator.test(lastChar) || prev === '') {
        setResult('0.')
        return prev + '0.'
      }

      return prev + '.'
    })

    setResult((prev) => prev + '.')
  }

  const handleReset = () => {
    setResult('0')
    setTemp('')
  }

  const handleEquals = () => {
    const res = eval(temp.replace(/x/g, '*'))

    setTemp((prev) => prev + '=' + res)
    setResult(res)
  }
  return (
    <CalculatorWrapper>
      <DisplayResult>
        <TextResult>{temp}</TextResult>
        <TextResult id="display">{result}</TextResult>
      </DisplayResult>
      <Button spanColTwo red id="clear" onClick={handleReset}>
        AC
      </Button>
      <Button id="divide" onClick={() => handleAddOperators('/')}>
        /
      </Button>
      <Button id="multiply" onClick={() => handleAddOperators('x')}>
        x
      </Button>

      <Button id="seven" onClick={() => handleAddNumbers(7)}>
        7
      </Button>
      <Button id="eight" onClick={() => handleAddNumbers(8)}>
        8
      </Button>
      <Button id="nine" onClick={() => handleAddNumbers(9)}>
        9
      </Button>
      <Button id="subtract" onClick={() => handleAddOperators('-')}>
        -
      </Button>

      <Button id="four" onClick={() => handleAddNumbers(4)}>
        4
      </Button>
      <Button id="five" onClick={() => handleAddNumbers(5)}>
        5
      </Button>
      <Button id="six" onClick={() => handleAddNumbers(6)}>
        6
      </Button>
      <Button id="add" onClick={() => handleAddOperators('+')}>
        +
      </Button>

      <Button id="one" onClick={() => handleAddNumbers(1)}>
        1
      </Button>
      <Button id="two" onClick={() => handleAddNumbers(2)}>
        2
      </Button>
      <Button id="three" onClick={() => handleAddNumbers(3)}>
        3
      </Button>
      <Button spanRowTwo blue id="equals" onClick={handleEquals}>
        =
      </Button>

      <Button spanColTwo id="zero" onClick={() => handleAddNumbers(0)}>
        0
      </Button>
      <Button id="decimal" onClick={handleDecimal}>
        .
      </Button>
    </CalculatorWrapper>
  )
}
export default Calculator
