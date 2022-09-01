import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  messageTextMe: {
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: '#3b99f9',
    right: 5,
    marginLeft: 'auto',
    padding: 10,
    borderRadius: 10,
  },
  messageTextOther: {
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: 'white',
    left: 5,
    marginRight: 'auto',
    padding: 10,
    borderRadius: 10,
  },
});
