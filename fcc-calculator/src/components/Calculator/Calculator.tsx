import { Button, CalculatorWrapper } from './Calculator.styles'

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Button spanColTwo red id="clear">
        AC
      </Button>
      <Button id="divide">/</Button>
      <Button id="multiply">x</Button>

      <Button id="seven">7</Button>
      <Button id="eight">8</Button>
      <Button id="nine">9</Button>
      <Button id="subtract">-</Button>

      <Button id="four">4</Button>
      <Button id="five">5</Button>
      <Button id="six">6</Button>
      <Button id="add">+</Button>

      <Button id="one">1</Button>
      <Button id="two">2</Button>
      <Button id="three">3</Button>
      <Button spanRowTwo blue id="equals">
        =
      </Button>

      <Button spanColTwo id="zero">
        0
      </Button>
      <Button id="decimal">.</Button>
    </CalculatorWrapper>
  )
}
export default Calculator
