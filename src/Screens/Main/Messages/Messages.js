import {View,ScrollView} from 'react-native';
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
    filter()
  }, [data]);

  const filter = async () => {
    await users.map(e => {
      e.messages = [];
      message.map(item => {
        if (e.id === item.user) {
          e.messages.push(item);
        }
      });
    });
    setData(users);
  }
 

  return (
    <View>
      <ScrollView>
      <Header />
      {data &&
        data.map(item => {
          if (item?.messages?.length > 0) {
            return <MessagesCard data={item?.messages} />;
          }
        })}
        </ScrollView>
    </View>
  );
};

export default Messages;
