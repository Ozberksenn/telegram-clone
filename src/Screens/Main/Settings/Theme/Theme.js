import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Theme.style';
import ThemeContext from '../../../../Context/ThemeContext';

const Theme = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
      }}>
      <View style={styles.editProfileContainer}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon style={styles.darkIcon} name="moon" />
          <Text style={styles.text}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon style={styles.lightIcon} name="sun" />
          <Text style={styles.text}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Theme;
