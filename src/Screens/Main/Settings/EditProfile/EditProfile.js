import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import Input from '../../../../Components/Input/Input';
import Button from '../../../../Components/Button/Button';
import styles from './EditProfile.style';
import {useUser} from '../../../../Context/UserContext';
import {ThemeContext} from '../../../../Context/ThemeContext';
const EditProfile = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const {user, setUser} = useUser();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  const handleSaveButton = () => {
    setUser({
      ...user,
      userName: userName,
      lastName: lastName,
      firstName: firstName,
    });
    if (userName.length > 0 && lastName.length > 0 && firstName.length > 0) {
      navigation.navigate('Settings');
    } else {
      Alert.alert('Warning !', 'Input values are not left blank ');
    }
  };
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
      <View>
        <Text style={[styles.editProfileTitle, {color: theme.color}]}>
          EDIT PROFIL
        </Text>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>First Name</Text>
          {/* titles style tanımı bir çok yerde kullanıldı. */}
          <Input
            placeholder="First Name"
            onChangeText={value => setFirstName(value)}
            defaultValue={user.firstName}
          />
        </View>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>Last Name</Text>
          <Input
            placeholder="Last Name"
            onChangeText={value => setLastName(value)}
            defaultValue={user.lastName}
          />
        </View>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>User Name</Text>
          <Input
            placeholder="User Name"
            onChangeText={value => setUserName(value)}
            defaultValue={user.userName}
          />
        </View>
        <View>
          <Button onPress={handleSaveButton} buttonName="Save" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
