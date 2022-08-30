import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Theme.style';
import {ThemeContext} from '../../../../Context/ThemeContext';

const Theme = () => {
  /* const {theme, toggleTheme} = useContext(ThemeContext); */
  const {theme, setTheme} = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme === 'light' ? 'white' : '#262626'},
      ]}>
      <View style={styles.editProfileContainer}>
        <TouchableOpacity onPress={handleTheme} style={{alignItems: 'center'}}>
          <Icon style={styles.darkIcon} name="moon" />
          <Text
            style={[
              styles.text,
              {color: theme === 'light' ? '#262626' : 'white'},
            ]}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTheme} style={{alignItems: 'center'}}>
          <Icon style={styles.lightIcon} name="sun" />
          <Text style={styles.text}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Theme;
