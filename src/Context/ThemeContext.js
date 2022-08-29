import {createContext, useContext} from 'react';

const ThemeContext = createContext();
const themes = {
  dark: {
    backgroundColor: '#383838',
  },
  light: {backgroundColor: '#fff'},
};

export default ThemeContext;
