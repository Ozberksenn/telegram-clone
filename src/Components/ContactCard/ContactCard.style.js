import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flexDirection: 'row', margin: 10},
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  name: {fontSize: 18, color: '#000', left: 10},
  lastSeen: {fontSize: 12, color: 'gray', left: 10},
});
