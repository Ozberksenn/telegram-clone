import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Theme.style';
import {useTheme} from '../../../../Context/ThemeContext';

const Theme = () => {
  /* const {theme, toggleTheme} = useContext(ThemeContext); */
  const {backgroundColor, toggleTheme} = useTheme();

  return (
    <SafeAreaView
      style={
        ({
          flex: 1,
          justifyContent: 'center',
        },
        [backgroundColor])
      }>
      <View style={styles.editProfileContainer}>
        <TouchableOpacity
          onPress={() => toggleTheme('dark')}
          style={{alignItems: 'center'}}>
          <Icon style={styles.darkIcon} name="moon" />
          <Text style={styles.text}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleTheme('light')}
          style={{alignItems: 'center'}}>
          <Icon style={styles.lightIcon} name="sun" />
          <Text style={styles.text}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Theme;
