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
  const [firstName, setFirstName] = useState(
    user.firstName ? user.firstName : '',
  );
  const [lastName, setLastName] = useState(user.lastName ? user.lastName : '');
  const [userName, setUserName] = useState(user.userName ? user.userName : '');

  const handleSaveButton = () => {
    setUser({
      ...user,
      userName: userName,
      lastName: lastName,
      firstName: firstName,
    });
    if (userName && lastName && firstName) {
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
            value={firstName}
          />
        </View>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>Last Name</Text>
          <Input
            placeholder="Last Name"
            onChangeText={value => setLastName(value)}
            value={lastName}
          />
        </View>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>User Name</Text>
          <Input
            placeholder="User Name"
            onChangeText={value => setUserName(value)}
            value={userName}
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
