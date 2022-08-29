import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  logoContainer: {alignItems: 'center'},
  logo: {
    width: 100,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
  phoneNumberText: {marginLeft: 20, fontSize: 20, color: '#000'},
  picker: {
    marginLeft: 10,
    width: Dimensions.get('window').width / 2.4,
  },
});
