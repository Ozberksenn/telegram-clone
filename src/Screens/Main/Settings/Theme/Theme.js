import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Theme.style';
import {ThemeContext} from '../../../../Context/ThemeContext';

const Theme = () => {
  /* The theme of the application is changed from this screen. */
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
      <View style={styles.editProfileContainer}>
        <TouchableOpacity onPress={toggleTheme} style={{alignItems: 'center'}}>
          <Icon style={styles.darkIcon} name="moon" />
          <Text style={[styles.text, {color: theme.color}]}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={{alignItems: 'center'}}>
          <Icon style={styles.lightIcon} name="sun" />
          <Text style={styles.text}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Theme;
