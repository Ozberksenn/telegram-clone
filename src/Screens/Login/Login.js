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
import {Picker} from '@react-native-picker/picker';
import data from '../../areaCode.json';
import {useUser} from '../../Context/UserContext';
import {ThemeContext} from '../../Context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    /* Login Screen eğer kullanıcı daha önceden girmişse bu ekran render edilmeyecek. */
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
            {/* alan kodlarının olduğu bir data buldum. O datayı picker paketinin içerisinde render ettim. */}
            <Picker
              style={styles.picker}
              selectedValue={selectedCode}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCode(itemValue)
              }>
              {data.map(item => (
                <Picker.Item
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
