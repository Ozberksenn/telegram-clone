import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.style';
const Button = ({onPress, buttonName}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
