import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './Uncompleted.Styles';
import machine from './../ToDoMachine';
import {useMachine} from '@xstate/react';
import Button from './../../Components/Button';
import Input from '../../Components/Input';
const Uncompleted = () => {
  const [taskName, setTaskName] = useState('');
  const [state, send] = useMachine(machine);
  const {uncompletedList, completedList} = state.context;
  const renderItem1 = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        send('CompleteTask', {todo: item});
        console.log(completedList);
      }}
      style={{margin: 5, padding: 5, borderWidth: 1, borderRadius: 10}}>
      <Text style={{fontSize: 18}}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text>Tamamlanmamış Görevler</Text>
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
    </View>
  );
};
export default Uncompleted;
