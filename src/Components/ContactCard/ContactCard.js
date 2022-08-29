import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ContactCard.style';
const ContactList = ({data}) => {
  console.log(data.photo);
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.profilePhoto} source={{uri: `${data.photo}`}} />
      </View>
      <View>
        <Text style={styles.name}>{data.firstName}</Text>
        <Text style={styles.lastSeen}>Çevrimiçi</Text>
      </View>
    </View>
  );
};

export default ContactList;
