import React, { createContext, useState, useEffect, useContext } from 'react';
import { isNumeric } from '../utils/isNumeric.js';
import { isBalanced } from '../utils/isBalanced.js';

const calculusContext = createContext({});

export default function CalculusContextProvider({ children }) {
  const [displayValue, setDisplayValue] = useState('0');

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

  function eraseDisplay() {
    setDisplayValue('0');
  }

  function eraseValue() {
    setDisplayValue(displayValue.slice(0, -1));
  }

  function addBracket() {
    isBalanced(displayValue) ? addValues('(') : addValues(')');
  }

  function addValues(label) {
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
    // eslint-disable-next-line no-eval
    let res = eval(displayValueBalanced);

    setHistory([{ operation: displayValueBalanced, result: res }, ...history]);
    setDisplayValue(res);
  }

  return (
    <calculusContext.Provider
      value={{
        displayValue,
        setDisplayValue,
        history,
        setHistory,
        newCalculation,
        eraseDisplay,
        eraseValue,
        addBracket,
        addValues,
        calculate,
      }}
    >
      {children}
    </calculusContext.Provider>
  );
}

export const useCalculus = () => useContext(calculusContext);
