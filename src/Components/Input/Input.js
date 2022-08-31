import {View, TextInput} from 'react-native';
import React, {useContext} from 'react';
import styles from './Input.style';
import {ThemeContext} from '../../Context/ThemeContext';
const Input = ({placeholder, onChangeText, defaultValue}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[styles.inputContainer, {backgroundColor: theme.inputColor}]}>
      <TextInput
        style={[styles.input, {color: theme.inputTextColor}]}
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default Input;
