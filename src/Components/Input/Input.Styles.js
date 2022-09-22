import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {width: Dimensions.get('window').width / 1},
  textInput: {
    backgroundColor: '#F5EFE6',
    borderRadius: 10,
    margin: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#7895B2',
  },
});
