import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Chat.style';
import ChatHeader from '../../../Components/ChatHeader/ChatHeader';
const Chat = ({route}) => {
  const {firstName, profilPhoto} = route.params;
  return (
    <SafeAreaView>
      <ChatHeader firstName={firstName} profilPhoto={profilPhoto} />
      <Text>Burada Mesajlar Listelenecek.</Text>
    </SafeAreaView>
  );
};

export default Chat;
