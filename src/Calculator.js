import React from 'react';
import { useTheme } from './context/Theme';

import Buttons from './components/Buttons';
import Display from './components/Display';
import History from './components/History';
import Toggle from './components/Toggle';

import './css/globals.scss';
import { useCalculus } from './context/Calculus';

export default function Calculator() {
  const { darkMode } = useTheme();
  const operations = ['+', '-', '/', '*'];
  const arr = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const operation = null;
  const {eraseDisplay, eraseValue, addBracket, addValues, history, calculate} = useCalculus();
  return (
    <div
      className={`calculator-size calculator ${darkMode ? 'dark-mode' : ''}`}
    >
      <Toggle />

      <Display />

      <div className="btn-container">
        <div className="btn-numbers">
          <Buttons onclick={eraseDisplay}>AC</Buttons>
          <Buttons onclick={eraseValue}>C</Buttons>
          <Buttons onclick={addBracket}>{'( )'}</Buttons>
          {arr.map((i) => (
            <Buttons key={i} onclick={addValues}>
              {i}
            </Buttons>
          ))}
          <History />
          <Buttons onclick={addValues}>0</Buttons>
          <Buttons onclick={addValues}>.</Buttons>
        </div>

        <div className="btn-operations">
          {operations.map((op) => {
            return (
              <Buttons key={op} onclick={addValues} operation>
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
