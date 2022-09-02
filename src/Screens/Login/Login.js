import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './Login.style';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {Picker} from '@react-native-picker/picker'; // picker paketi import ediliyor.
import data from '../../areaCode.json';
import {useUser} from '../../Context/UserContext';
import {ThemeContext} from '../../Context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage'; // local storage import ediyoruz.

const Login = ({navigation}) => {
  const {user, setUser} = useUser();
  const {theme} = useContext(ThemeContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedCode, setSelectedCode] = useState();
  const handleClick = async () => {
    setUser({
      ...user,
      userName: userName,
      lastName: lastName,
      firstName: firstName,
    });
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({
        userName: userName,
        lastName: lastName,
        firstName: firstName,
      }),
    );
    navigation.navigate('Main');
  };
  {
    /* Login Screen If the user has already logged in, this screen will not be rendered. */
  }
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/telegram_logo.png')}
          />
        </View>
        <View>
          <Text style={[styles.phoneNumberText, {color: theme.color}]}>
            Phone Number
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* I found a data with area codes. I rendered that data in the picker package. */}
            <Picker
              style={styles.picker}
              selectedValue={selectedCode}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCode(itemValue)
              }>
              {data.map((item,index) => (
                <Picker.Item
                key={index}
                  label={`${item.code} (${item.dial_code})`}
                  value={item.dial_code}
                />
              ))}
              
            </Picker>
            <View style={styles.inputPhone}>
              <TextInput
                style={styles.inputPhoneText}
                placeholder="Phone Number "
              />
            </View>
          </View>
          <Input
            onChangeText={value => setFirstName(value)}
            placeholder="first Name"
          />
          <Input
            onChangeText={value => setLastName(value)}
            placeholder="Last Name"
          />
          <Input
            onChangeText={value => setUserName(value)}
            placeholder="User Name"
          />
        </View>
        <View>
          <Button
            buttonName="Giriş Yap"
            onPress={handleClick}
            disabled={!userName && !firstName && !lastName}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
