import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../../../Components/Header/Header';
import {MessageContext} from '../../../Context/MessageContext';
import MessagesCard from '../../../Components/MessagesCard/MessagesCard';
import ContactData from '../../../ContactData.json';

const Messages = () => {
  const {message} = useContext(MessageContext);
  const users = ContactData;
  const [data, setData] = useState(null);

  useEffect(() => {
    users.map(e => {
      e.messages = [];
      message.map(item => {
        if (e.id === item.user) {
          e.messages.push(item);
        }
      });
    });
    setData(users);
  }, [users]);

  return (
    <View>
      <Header />
      {data &&
        data.map(item => {
          if (item?.messages?.length > 0) {
            return <MessagesCard data={item?.messages} />;
          }
        })}
    </View>
  );
};

export default Messages;
