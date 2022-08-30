import React, {createContext, useState, useContext} from 'react';

const ThemeContext = createContext();

const DEFAULT_THEME = 'light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const toggleTheme = selectedTheme => {
    selectedTheme
      ? setTheme(selectedTheme)
      : setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const backgroundColor =
    theme === 'light'
      ? {
          backgroundColor: 'white',
          color: '#000',
        }
      : {backgroundColor: 'black', color: '#fff'};

  const values = {
    theme,
    toggleTheme,
    backgroundColor,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export {ThemeProvider, useTheme};
