import {View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import styles from './Contact.style';
import Header from '../../../Components/Header/Header';
import ContactCard from '../../../Components/ContactCard/ContactCard';
import ContactData from '../../../ContactData.json';
import {ThemeContext} from '../../../Context/ThemeContext';
const Contact = () => {
  const {theme} = useContext(ThemeContext);
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={[styles.container, {backgroundColor: theme.backgrounColor}]}>
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
