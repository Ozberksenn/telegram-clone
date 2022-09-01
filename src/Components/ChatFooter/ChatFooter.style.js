import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    height: 50,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  textInputContainer: {
    height: 30,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 15,
    backgroundColor: '#2C3333',
    justifyContent: 'center',
  },
  textInput: {
    position: 'absolute',
    fontSize: 16,
    left: 5,
    color: 'white',
  },
  iconPaperclip: {position: 'absolute', fontSize: 25, color: '#808080'},
  iconSend: {position: 'absolute', fontSize: 25, right: 5, color: '#808080'},
  iconSticker: {
    position: 'absolute',
    fontSize: 20,
    right: 10,
    color: '#808080',
  },
});
