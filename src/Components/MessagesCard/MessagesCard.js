import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {MessageContext} from '../../Context/MessageContext';
import styles from './MessagesCard.style';
import {useNavigation} from '@react-navigation/native';
const MessagesCard = ({data}) => {
  const navigation = useNavigation();
  const {message} = useContext(MessageContext);
  console.log(message);
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: data.photo}} style={styles.image} />
      </View>
      <View>
        <Text style={styles.firstName}>{data.firstName}</Text>
        <Text style={styles.textMessage}>{data.message}</Text>
      </View>
    </View>
  );
};

export default MessagesCard;
