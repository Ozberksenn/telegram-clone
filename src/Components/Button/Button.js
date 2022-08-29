import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.style';
const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Giriş Yap</Text>
    </TouchableOpacity>
  );
};

export default Button;
