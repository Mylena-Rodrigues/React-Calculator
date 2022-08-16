/* eslint-disable no-eval */
import { useState } from 'react';
import { useTheme } from './context/Theme';

import { isNumeric } from './utils/isNumeric.js';
import { isBalanced } from './utils/isBalanced.js';

import Buttons from './components/Buttons';
import Display from './components/Display';
import History from './components/History';
import Toggle from './components/Toggle';

import './css/globals.scss';

export default function Calculator() {
  const { darkMode } = useTheme();
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState(null);
  const [history, setHistory] = useState([
    {
      operation: '',
      result: '',
    },
  ]);

  function newCalculation(newLabel) {
    const lastItem = history[0];
    if (lastItem && displayValue === lastItem.result && isNumeric(newLabel)) {
      setDisplayValue(newLabel);
    }
  }

  function erase_display() {
    setDisplayValue('0');
  }

  function erase_value() {
    setDisplayValue(displayValue.slice(0, -1));
  }

  function add_bracket() {
    isBalanced(displayValue) ? add_values('(') : add_values(')');
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

    setHistory([{ operation: displayValueBalanced, result: res }, ...history]);
    setDisplayValue(res);
  }

  const operations = ['+', '-', '/', '*'];
  const arr = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <div
      className={`calculator-size calculator ${darkMode ? 'dark-mode' : ''}`}
    >
      <Toggle />

      <Display displayValue={displayValue} />

      <div className="btn-container">
        <div className="btn-numbers">
          <Buttons onclick={erase_display}>AC</Buttons>
          <Buttons onclick={erase_value}>C</Buttons>
          <Buttons onclick={add_bracket}>{'( )'}</Buttons>
          {arr.map((i) => (
            <Buttons key={i} onclick={add_values}>
              {i}
            </Buttons>
          ))}
          <History historyList={history} />
          <Buttons onclick={add_values}>0</Buttons>
          <Buttons onclick={add_values}>.</Buttons>
        </div>

        <div className="btn-operations">
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
  );
}
