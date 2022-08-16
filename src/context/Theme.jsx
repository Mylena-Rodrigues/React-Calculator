import React, { createContext, useState, useEffect, useContext } from 'react';

const themeContext = createContext({});

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem('@calculator/theme');
    if (savedThemeLocal === 'true') {
      setDarkMode(savedThemeLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@calculator/theme', darkMode);
  }, [darkMode]);

  return (
    <themeContext.Provider
      value={{
        darkMode: darkMode,
        setDarkMode: setDarkMode,
        toggleDarkMode: toggleDarkMode,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => useContext(themeContext);
