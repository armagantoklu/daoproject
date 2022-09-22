import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './Completed.Styles';
import {useMachine} from '@xstate/react';
import machine from './../../ToDoMachine';
import Button from '../../Components/Button';

const Completed = ({navigation}) => {
  const [state, send] = useMachine(machine);
  const {completedList} = state.context;
  const renderItem1 = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        send('RecompleteTask', {todo: item});
      }}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tamamlanan Görevler</Text>
      <FlatList
        data={completedList}
        renderItem={renderItem1}
        keyExtractor={(_, index) => index.toString()}
      />
      <Button
        title={'Tamamlanmamış Görevlerim'}
        onPress={() => {
          navigation.navigate('UncompletedScreen');
        }}
      />
    </View>
  );
};
export default Completed;
