import {View, Text, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import Input from '../../../../Components/Input/Input';
import Button from '../../../../Components/Button/Button';
import styles from './EditProfile.style';
import {useUser} from '../../../../Context/UserContext';
import {ThemeContext} from '../../../../Context/ThemeContext';
const EditProfile = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const {user, setUser} = useUser();
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
          <Input placeholder="First Name" defaultValue={user.firstName} />
        </View>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>Last Name</Text>
          <Input placeholder="Last Name" defaultValue={user.lastName} />
        </View>
        <View>
          <Text style={[styles.titles, {color: theme.color}]}>User Name</Text>
          <Input placeholder="User Name" defaultValue={user.userName} />
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate('Settings')}
            buttonName="Save"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
