import {View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import styles from './Contact.style';
import Header from '../../../Components/Header/Header';
import ContactCard from '../../../Components/ContactCard/ContactCard';
import ContactData from '../../../ContactData.json';
import {ThemeContext} from '../../../Context/ThemeContext';
const Contact = () => {
// I created a data and pulled the contact list from that data.
  const {theme} = useContext(ThemeContext);
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
      <Header />
      <FlatList
        ItemSeparatorComponent={
          renderSeperator
        } /* 
        I add a line between each item. */
        style={{height: '85%'}}
        data={ContactData}
        renderItem={({item}) => <ContactCard data={item} />}
      />
    </View>
  );
};

export default Contact;
