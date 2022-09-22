import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './Uncompleted.Styles';
import machine from './../../ToDoMachine';
import {useMachine} from '@xstate/react';
import Button from './../../Components/Button';
import Input from '../../Components/Input';
const Uncompleted = ({navigation}) => {
  const [taskName, setTaskName] = useState('');
  const [state, send] = useMachine(machine);
  const {uncompletedList} = state.context;
  const renderItem1 = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        send('CompleteTask', {todo: item});
      }}
      style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yapılacaklar</Text>
      <FlatList
        data={uncompletedList}
        renderItem={renderItem1}
        keyExtractor={(_, index) => index.toString()}
      />
      <Input
        value={taskName}
        onChangeText={item => {
          setTaskName(item);
        }}
      />
      <Button
        title={'Görevi Ekle'}
        onPress={() => {
          if (taskName.length > 1) {
            send('AddTask', {todo: taskName});
            setTaskName('');
          }
        }}
      />
      <Button
        title={'Tamamlanmış Görevlerim'}
        onPress={() => {
          navigation.navigate('CompletedScreen');
        }}
      />
    </View>
  );
};
export default Uncompleted;
