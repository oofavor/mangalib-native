import React, { useState } from 'react';
import theme from '../../constants/theme';
import ThemeContext from './themeContext';

const ThemeProvider = ({ children, defaultTheme }) => {
  const [currentTheme, setCurrentTheme] = useState(
    defaultTheme === 'dark' ? theme.dark : theme.light
  );

  const changeTheme = (toTheme) => {
    if (toTheme === currentTheme) return;
    if (toTheme === 'light') return void setCurrentTheme(theme.light);
    if (toTheme === 'dark') return void setCurrentTheme(theme.dark);
    throw new Error('useTheme expects dark or light argument to changeTheme!');
  };

  const value = { theme: currentTheme, changeTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
