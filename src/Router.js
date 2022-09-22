import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Completed from './Screens/Completed';
import Uncompleted from './Screens/Uncompleted';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Uncompleted} name="UncompletedScreen" />
        <Stack.Screen component={Completed} name="CompletedScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
