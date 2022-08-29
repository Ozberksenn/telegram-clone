import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    height: Dimensions.get('window').height / 8,
    backgroundColor: '#262626',
    justifyContent: 'space-around',
  },
  titles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#0368be',
  },
  ContactText: {
    fontSize: 22,
    color: '#fff',
  },
  icon: {
    fontSize: 25,
    color: '#0368be',
    marginRight: 10,
  },
  searchBar: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 30,
    backgroundColor: '#111a20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarText: {
    justifyContent: 'center',
    fontSize: 14,
    position: 'absolute',
    color: '#fff',
  },
});
