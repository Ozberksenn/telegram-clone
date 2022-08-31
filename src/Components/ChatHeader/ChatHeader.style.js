import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  ChatHeaderComponent: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#262626',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowIcon: {fontSize: 30, color: '#0368be'},
  title: {fontSize: 22, color: '#fff', left: 5},
  profilImage: {
    right: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
