/* eslint-disable no-eval */
import { useState } from 'react';
import Buttons from './components/Buttons';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState(null);

  function isNumeric(val) {
    return /⁻?\d+$/.test(val);
  }

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
    let calc = eval(displayValue);
    console.log(calc);
  }

  return (
    <div className="Calculator">
      <Buttons onclick={add_values} operation>
        1
      </Buttons>
      <Buttons onclick={add_values} operation>
        2
      </Buttons>
      <Buttons onclick={add_values} operation>
        3
      </Buttons>
      <Buttons onclick={add_values} operation>
        4
      </Buttons>
      <Buttons onclick={add_values} operation>
        5
      </Buttons>
      <Buttons onclick={add_values} operation>
        6
      </Buttons>
      <Buttons onclick={add_values} operation>
        7
      </Buttons>
      <Buttons onclick={add_values} operation>
        8
      </Buttons>
      <Buttons onclick={add_values} operation>
        9
      </Buttons>
      <Buttons onclick={add_values} operation>
        0
      </Buttons>
      <Buttons onclick={add_values} operation>
        .
      </Buttons>
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
      <Buttons onclick={calculate}>=</Buttons>
      {displayValue}
    </div>
  );
}

export default Calculator;
