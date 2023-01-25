// let us define our theme context and provider for the header component to use:

import React, { useState, useEffect, createContext } from 'react';
import { lightTheme, darkTheme, GlobalStyles } from '../theme';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;



  


  


