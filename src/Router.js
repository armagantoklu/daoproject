import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Completed from './Screens/Completed';
import Uncompleted from './Screens/Uncompleted';
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen component={Uncompleted} name="UncompletedScreen" />
        <Tab.Screen component={Completed} name="CompletedScreen" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
