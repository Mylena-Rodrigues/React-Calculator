/* eslint-disable no-eval */
import { useEffect, useState } from 'react';
import Buttons from './components/Buttons';
import { isNumeric } from './utils/isNumeric.js';
import { isBalanced } from './utils/isBalanced.js';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState(null);
  const [historic, setHistoric] = useState([
    {
      operation: '',
      result: '',
    },
  ]);

  function add_values(label) {
    if (isNumeric(label) || label === '.') {
      displayValue === '0'
        ? setDisplayValue(label)
        : setDisplayValue(displayValue + label);
    } else {
      displayValue === '0' && label === '('
        ? setDisplayValue(label)
        : setDisplayValue(displayValue + ' ' + label + ' ');
    }
  }

  function calculate(label) {

    let displayValueBalanced = isBalanced(displayValue)  ? displayValue : displayValue + ")"
    let res = eval(displayValueBalanced);

    setHistoric([...historic, { operation: displayValueBalanced, result: res }]);
    setDisplayValue(res);

  }

  useEffect(() => {

  }, [displayValue])

  return (
    <div className="Calculator">
      <Buttons onclick={add_values}>1</Buttons>
      <Buttons onclick={add_values}>2</Buttons>
      <Buttons onclick={add_values}>3</Buttons>
      <Buttons onclick={add_values}>4</Buttons>
      <Buttons onclick={add_values}>5</Buttons>
      <Buttons onclick={add_values}>6</Buttons>
      <Buttons onclick={add_values}>7</Buttons>
      <Buttons onclick={add_values}>8</Buttons>
      <Buttons onclick={add_values}>9</Buttons>
      <Buttons onclick={add_values}>0</Buttons>
      <Buttons onclick={add_values}>.</Buttons>
      <Buttons onclick={add_values} operation>
        +
      </Buttons>
      <Buttons onclick={add_values} operation>
        -
      </Buttons>
      <Buttons onclick={add_values} operation>
        /
      </Buttons>
      <Buttons onclick={add_values} operation>
        *
      </Buttons>
      <Buttons onclick={add_values} operation>
        (
      </Buttons>
      <Buttons onclick={add_values} operation>
        )
      </Buttons>
      <Buttons onclick={calculate} operation>
        =
      </Buttons>
      {displayValue}
    </div>
  );
}

export default Calculator;
