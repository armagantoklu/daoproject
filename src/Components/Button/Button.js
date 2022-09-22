import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './Button.Styles';

const Button = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerContainer} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
