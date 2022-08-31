import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './ContactCard.style';
import {ThemeContext} from '../../Context/ThemeContext';
import {useNavigation} from '@react-navigation/native';
const ContactList = ({data}) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Chat', {
          firstName: data.firstName,
          profilPhoto: data.photo,
        })
      }
      style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
      <View>
        <Image style={styles.profilePhoto} source={{uri: data.photo}} />
      </View>
      <View>
        <Text style={[styles.name, {color: theme.color}]}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={styles.lastSeen}>Çevrimiçi</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactList;
