import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Completed.Styles';
import {useMachine} from '@xstate/react';
import machine from './../ToDoMachine';
import Button from '../../Components/Button';

const Completed = () => {
  const [state, send] = useMachine(machine);
  const {completedList} = state.context;
  const renderItem2 = ({item}) => <Text>{item}</Text>;
  return (
    <View style={styles.container}>
      <Text>Tamamlanmış Görevler</Text>
      <FlatList
        data={completedList}
        renderItem={renderItem2}
        keyExtractor={(_, index) => index.toString()}
      />
      <Button
        title={'Tamamlanmış Görevleri Göster'}
        onPress={() => {
          const list = send('GetAllList');
          console.log(list.context.completedList);
        }}
      />
    </View>
  );
};
export default Completed;
