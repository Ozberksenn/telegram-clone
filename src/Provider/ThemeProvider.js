import React, {useState} from 'react';
import {ThemeContext} from '../Context/ThemeContext';
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
