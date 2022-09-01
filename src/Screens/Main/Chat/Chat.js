import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React, {useContext} from 'react';
import styles from './Chat.style';
import ChatHeader from '../../../Components/ChatHeader/ChatHeader';
import ChatFooter from '../../../Components/ChatFooter/ChatFooter';
import {MessageContext} from '../../../Context/MessageContext';
const Chat = ({route}) => {
  const {message, setMessage} = useContext(MessageContext);
  const {firstName, profilPhoto} = route.params;
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/20/99/f2/2099f2dda704cb708fe20347afb964ba.jpg',
      }}
      style={styles.container}>
      <View>
        <ChatHeader firstName={firstName} profilPhoto={profilPhoto} />
        {message[0]?.message ? (
          message.is_sended_by_me === false ? (
            <Text style={styles.messageTextMe}>
              {message[0]?.message ? message[0]?.message : 'özberk gay'}
            </Text>
          ) : (
            <Text style={styles.messageTextOther}>
              {message[0]?.message ? message[0]?.message : 'özberk gay'}
            </Text>
          )
        ) : (
          false
        )}
      </View>

      <View>
        <ChatFooter />
      </View>
    </ImageBackground>
  );
};

export default Chat;
