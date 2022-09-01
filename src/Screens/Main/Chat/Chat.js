import {View, Text, ScrollView, ImageBackground, FlatList} from 'react-native';
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
      <ScrollView>
        <View>
          <ChatHeader firstName={firstName} profilPhoto={profilPhoto} />

          {message.map((item, index) =>
            message[0]?.message ? (
              message[0].is_sended_by_me === true ? (
                <Text key={index} style={styles.messageTextMe}>
                  {item.message}
                </Text>
              ) : (
                <Text key={index} style={styles.messageTextOther}>
                  {item.message}
                </Text>
              )
            ) : (
              false
            ),
          )}
        </View>
      </ScrollView>
      <View>
        <ChatFooter />
      </View>
    </ImageBackground>
  );
};

export default Chat;
