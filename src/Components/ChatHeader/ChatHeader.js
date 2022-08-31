import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from './ChatHeader.style';
import {useNavigation} from '@react-navigation/native';
const ChatHeader = ({firstName, profilPhoto}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.ChatHeaderComponent}>
        <Icon
          onPress={() => navigation.navigate('Messages')}
          style={styles.arrowIcon}
          name="arrow-left"
        />
        <Text style={styles.title}>{firstName}</Text>
        <Image style={styles.profilImage} source={{uri: profilPhoto}} />
      </View>
    </View>
  );
};

export default ChatHeader;
