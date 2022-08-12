/* eslint-disable no-eval */
import { useState } from 'react';
import Buttons from './components/Buttons';
import { isNumeric } from './utils/isNumeric.js';
import { isBalanced } from './utils/isBalanced.js';
import Display from './components/Display';
import './css/custom.scss';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState(null);
  const [history, setHistory] = useState([
    {
      operation: '',
      result: '',
    },
  ]);

  function newCalculation(newLabel) {
    const lastItem = history.pop();
    if (displayValue === lastItem.result) {
      setDisplayValue(newLabel);
    }
  }

  function erase_display() {
    setDisplayValue(0);
  }

  function erase_value() {
    setDisplayValue(displayValue.slice(0, -1));
  }

  function add_bracket() {
    setDisplayValue(
      isBalanced(displayValue) ? displayValue + '(' : displayValue + ')',
    );
  }

  function add_values(label) {
    if (isNumeric(label) || label === '.') {
      displayValue === '0'
        ? setDisplayValue(label)
        : setDisplayValue(displayValue + label.toString());
    } else {
      displayValue === '0' && label === '('
        ? setDisplayValue(label)
        : setDisplayValue(displayValue + ' ' + label + ' ');
    }

    newCalculation(label);
  }

  function calculate() {
    let displayValueBalanced = isBalanced(displayValue)
      ? displayValue
      : displayValue + ')';
    let res = eval(displayValueBalanced);

    setHistory([
      ...history,
      { operation: displayValueBalanced, result: res },
    ]);
    setDisplayValue(res);
  }

  const operations = ['+', '-', '/', '*'];
  const arr = [0, 3, 2, 1, 6, 5, 4, 9, 8, 7];

  return (
    <div className="root">
      <div className="calculator">
        <Display displayValue={displayValue} />
        <div className="buttons-container">
          <div className="buttons-number">
            <Buttons onclick={erase_display}>AC</Buttons>
            <Buttons onclick={erase_value}>C</Buttons>
            <Buttons onclick={add_bracket}>()</Buttons>
            {arr.reverse().map((i) => (
              <Buttons key={i} onclick={add_values}>
                {i}
              </Buttons>
            ))}
            <Buttons onclick={add_values}>.</Buttons>
          </div>
          <div className="buttons-operation">
            {operations.map((op) => {
              return (
                <Buttons key={op} onclick={add_values} operation>
                  {op}
                </Buttons>
              );
            })}

            <Buttons onclick={calculate} operation>
              =
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
