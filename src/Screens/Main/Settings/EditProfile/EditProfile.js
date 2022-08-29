import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Input from '../../../../Components/Input/Input';
import Button from '../../../../Components/Button/Button';
import styles from './EditProfile.style';
const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.titles}>First Name</Text>
          {/* titles style tanımı bir çok yerde kullanıldı. */}
          <Input placeholder="First Name" />
        </View>
        <View>
          <Text style={styles.titles}>Last Name</Text>
          <Input placeholder="Last Name" />
        </View>
        <View>
          <Text style={styles.titles}>User Name</Text>
          <Input placeholder="User Name" />
        </View>
        <View>
          <Button buttonName="Save" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
