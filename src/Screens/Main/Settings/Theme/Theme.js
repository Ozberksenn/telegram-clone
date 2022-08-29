import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Theme.style';

const Theme = () => {
  return (
    <SafeAreaView style={styles.container}>
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
