import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
const Input = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
