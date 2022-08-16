import React from 'react';
import { useTheme } from '../context/Theme';

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className="toggle-container">
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <div className="toggle"></div>
          </label>
      </div>
    </>
  );
}
