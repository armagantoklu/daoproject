import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.Styles';

const Input = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default Input;
