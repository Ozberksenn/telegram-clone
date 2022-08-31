import React, {useState} from 'react';
import {ThemeContext} from '../Context/ThemeContext';
import dark from '../Constants/Theme/dark';
import light from '../Constants/Theme/light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(light);

  const handleToggleTheme = () => {
    if (theme.type === 'light') {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };
  return (
    <ThemeContext.Provider
      value={{theme, setTheme, toggleTheme: handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
