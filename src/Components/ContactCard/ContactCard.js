import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ContactCard.style';
const ContactList = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image style={styles.profilePhoto} source={{uri: data.photo}} />
      </View>
      <View>
        <Text style={styles.name}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={styles.lastSeen}>Çevrimiçi</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactList;
