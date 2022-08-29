import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {Picker} from '@react-native-picker/picker';
import data from '../../areaCode.json';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
const Login = ({navigation}) => {
  const navigate = useNavigation();
  const [selectedCode, setSelectedCode] = useState();
  {
    /* Login Screen eğer kullanıcı daha önceden girmişse bu ekran render edilmeyecek. */
  }
  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/telegram_logo.png')}
        />
      </View>
      <View>
        <Text style={styles.phoneNumberText}>Phone Number</Text>
        <View style={{flexDirection: 'row'}}>
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
        </View>
        <Input placeholder="first Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="User Name" />
      </View>
      <View>
        <Button
          buttonName="Giriş Yap"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
