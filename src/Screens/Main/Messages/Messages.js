import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import Header from '../../../Components/Header/Header';
import {MessageContext} from '../../../Context/MessageContext';
import MessagesCard from '../../../Components/MessagesCard/MessagesCard';
const Messages = ({item}) => {
  const {message} = useContext(MessageContext);
  return (
    <View>
      <Header />
      {message.map(item => (
        <MessagesCard data={item} />
      ))}
    </View>
  );
};

export default Messages;
