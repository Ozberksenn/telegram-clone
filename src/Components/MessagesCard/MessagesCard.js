import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {MessageContext} from '../../Context/MessageContext';
import styles from './MessagesCard.style';
import {useNavigation} from '@react-navigation/native';
const MessagesCard = ({data}) => {
  // const navigation = useNavigation();
  const {message} = useContext(MessageContext);
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: data[0].photo}} style={styles.image} />
      </View>
      <View>
        <Text style={styles.firstName}>{data[0].firstName}</Text>
        <Text style={styles.textMessage}>{data[0].message}</Text>
      </View>
    </View>
  );
};

export default MessagesCard;
