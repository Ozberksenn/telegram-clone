import {Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './Button.style';
import {ThemeContext} from '../../Context/ThemeContext';
const Button = ({onPress, buttonName, disabled}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: theme.backgroundColor,
        },
      ]}>
      <Text style={[styles.buttonText, {color: theme.buttonTextColor}]}>
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
