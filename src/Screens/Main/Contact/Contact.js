import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './Contact.style';
import Header from '../../../Components/Header/Header';
import ContactCard from '../../../Components/ContactCard/ContactCard';
import ContactData from '../../../ContactData.json';
const Contact = () => {
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View>
      <Header />
      <FlatList
        ItemSeparatorComponent={
          renderSeperator
        } /* her bir item arasına çizgi ekletiyorum. */
        style={{height: '85%'}}
        data={ContactData}
        renderItem={({item}) => <ContactCard data={item} />}
      />
    </View>
  );
};

export default Contact;
