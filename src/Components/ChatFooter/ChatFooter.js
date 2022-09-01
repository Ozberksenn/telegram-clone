import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './ChatFooter.style';
import Icon from 'react-native-vector-icons/Feather';
import {MessageContext} from '../../Context/MessageContext';
const ChatFooter = () => {
  {
    /* Bu component Chat ekranında mesaj gönderebildiğimiz alanı kapsamakata. */
  }
  const {message, setMessage} = useContext(MessageContext);
  const [onChange, setOnChange] = useState(0);
  const handleSendButton = () => {
    setMessage([
      ...message,
      {
        created_at: Date.now(), // anlık saat
        user_id: 1,
        is_sended_by_me: true, // mesajı ben mi gönderdim ?
        message: onChange,
      },
    ]);
  };
  return (
    <View>
      <Text style={{color: 'white', fontSize: 20}}></Text>
      <View style={styles.container}>
        <Icon style={styles.iconPaperclip} name="paperclip" />
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={value => setOnChange(value)}
            style={styles.textInput}
            placeholderTextColor="white"
            placeholder="Mesaj Yazın"
          />
          <Icon style={styles.iconSticker} name="pie-chart" />
        </View>
        {onChange.length > 0 ? (
          <Pressable onPress={handleSendButton} style={styles.iconSend}>
            <Icon style={{color: '#808080'}} size={25} name="arrow-up-circle" />
          </Pressable>
        ) : (
          <Icon style={styles.iconSend} name="mic" />
        )}
      </View>
    </View>
  );
};

export default ChatFooter;
