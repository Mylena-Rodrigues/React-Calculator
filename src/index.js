import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import CalculusContextProvider from './context/Calculus';
import ThemeContextProvider from './context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CalculusContextProvider>
        <Calculator />
      </CalculusContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
