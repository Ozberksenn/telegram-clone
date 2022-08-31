import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './ContactCard.style';
import {ThemeContext} from '../../Context/ThemeContext';
const ContactList = ({data}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
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
