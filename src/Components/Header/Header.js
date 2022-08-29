import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Header.style';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titles}>
        <TouchableOpacity>
          <Text style={styles.sortText}>Sort</Text>
        </TouchableOpacity>
        <Text style={styles.ContactText}>Contact</Text>
        <TouchableOpacity>
          <Icon style={styles.icon} name="plus" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholderTextColor="#fff"
          placeholder="Search"
        />
      </View>
    </View>
  );
};

export default Header;
