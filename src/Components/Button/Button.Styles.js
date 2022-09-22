import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {width: Dimensions.get('window').width / 1},
  innerContainer: {
    backgroundColor: '#E8DFCA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AEBDCA',
    margin: 15,
    padding: 5,
  },
  buttonTitle: {fontWeight: 'bold', fontSize: 18, textAlign: 'center'},
});
