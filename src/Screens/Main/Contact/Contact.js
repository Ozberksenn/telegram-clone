import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Header from '../../../Components/Header/Header';
import ContactCard from '../../../Components/ContactCard/ContactCard';
import ContactData from '../../../ContactData.json';
const Contact = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={ContactData}
        renderItem={({item}) => <ContactCard data={item} />}
      />
    </View>
  );
};

export default Contact;
