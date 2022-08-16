import React from 'react';
import { useCalculus } from '../context/Calculus';

export default function Display() {
  const { displayValue } = useCalculus();
  
  return <h1 className="display">{displayValue}</h1>;
}
