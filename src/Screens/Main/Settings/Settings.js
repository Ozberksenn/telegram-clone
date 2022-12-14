import {SafeAreaView, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../../Context/ThemeContext';
import Button from '../../../Components/Button/Button';
import styles from './Settings.style';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = () => {
 
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  }; // Clicking the LogOut button clears the localStorage.

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://img-s1.onedio.com/id-625e88fc12fa8b2916fae97e/rev-0/w-620/f-jpg/s-26c16b54c5837d483b0804c3a31f8438c237bdf3.jpg',
          }}
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Theme')}
          buttonName="theme"
        />
        <Button
          onPress={() => navigation.navigate('EditProfile')}
          buttonName="edit profile"
        />
      </View>
      <View style={{marginTop: 100}}>
        <Button onPress={handleLogout} buttonName="Log out" />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
